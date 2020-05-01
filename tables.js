let Excel		= require('exceljs');
let fs			= require('fs');
let zip			= require('adm-zip');


//Open excel file with name input parameter
//object = {name, action (short/long), room}
async function openExcelFile(object) {
	let currentDate = new Date();
	let fileName = `${currentDate.getDate()}_${currentDate.getMonth()}_${currentDate.getFullYear()}.xlsx`;
	let pathToTable = "./public/Data/" + fileName;
    if (!isFileExist(pathToTable)) {
        await createTodayTable(pathToTable, ()=> {
            addActionToTable(pathToTable, object);
        });
    } else {
        await addActionToTable(pathToTable, object);
    }
}


function createTodayTable(path, callback) {
    console.log(`File ${path} does not exist. Creating started...`);
    let workbook = new Excel.Workbook();
	let worksheet = workbook.addWorksheet("Data");
	worksheet.columns = [
		{ header: 'No',				key: 'id',			width: 5  },
		{ header: 'Name', 			key: 'name',		width: 25 },
		{ header: 'Action', 		key: 'action', 		width: 30 },
		{ header: 'Room',			key: 'room',		width: 10 },
		{ header: 'Time',    		key: 'time',     	width: 10 },
		{ header: 'Status', 		key: 'status',  	width: 10 }
	];
    //worksheet.addRow([1, object.name, object.action, object.room, new Date(), "in"]);
    worksheet.addRow(["1", "1", "1", "1", "1", "1"]);
	saveExcelFile(path, workbook);
    console.log(`File ${path} created.`);
    callback();
}

function addActionToTable(path, object) {
    let workbook = new Excel.Workbook();
    console.log(`File ${path} reading...`);
	workbook.xlsx.readFile(path)
        // .catch(function (err) {
        //     console.log("Huuuuuuuuuu");
        //     console.log(err);
        // })
        .then(function () {
            let worksheet = workbook.getWorksheet("Data");
            let usersAction = "";
            let lastRow;
            let id;
            let status;
            let roomCount;
            if (typeof worksheet == undefined) {
                console.log("UNDEFINED")
                id = 0;
                status = "in";
                roomCount = 1;
            } else {
                lastRow = worksheet.lastRow;
                id = lastRow.getCell(1).value;
                status = getLastStatus(worksheet, object.name);
                roomCount = getCountOfRoom(worksheet, object.room);
            }
            if (id == 'No') {
                id = 1;
            } else {
                id++;
            }
            if (object.action == "long") {
                if (status == "out") {
                    usersAction = "Enter and ";
                }

                if (roomCount%2 != 0) {
                    usersAction += "Put key";
                } else {
                    usersAction += "Get key";
                }
                status = "in";
            } else {
                if (status == "in") {
                    usersAction = "Exit";
                    status = "out"
                } else {
                    usersAction = "Enter";
                    status = "in"
                }
            }
            
            worksheet.addRow([id, object.name, usersAction, object.room, new Date(), status]);
            console.log(`Row with ${id} ID was added`);
            console.log("Writing file...");
            saveExcelFile(path, workbook);
            console.log("File writen.");
        });
}


function getLastStatus(worksheet, name) {
    let status = "";
    worksheet.eachRow(function(row){
        if (row.getCell(2) == name) {
            status = row.values[6];
        }
    })
    return status
}

function getCountOfRoom(worksheet, room) {
    let count = 0;
    worksheet.eachRow(function(row){
        //console.log("Cell " + row.getCell(2));
        if (row.getCell(4) == room) {
             count++;
        }
    })
    return count;
}



function addDataToExistingTable(path, object) {
    let workbook = new Excel.Workbook();
    console.log(`File ${path} exist.`);
	workbook.xlsx.readFile(path)
        .catch(function (err) {
            console.log(err);
        })
        .then(function () {
            let worksheet = workbook.getWorksheet("Data");
            console.log(worksheet)
            let lastRow = worksheet.lastRow;
            let id = lastRow.getCell(1).value;
            id++;
            worksheet.addRow([id, object.name, object.action, object.room, new Date(), status]);
            console.log(`Raw with ${id} ID was added`);
            console.log("Writing file...");
            saveExcelFile(path, workbook);
            console.log("File writen.");
        });
}


function isFileExist(path) {
    return fs.existsSync(path);
}


//Check file existing
//if file does not exists create it and init worksheet
// async function checkFileExists(name, object) {
// 	let workbook = new Excel.Workbook();
// 	if (fs.existsSync(name)) {
// 		console.log(`File ${name} exist.`);
// 		workbook.xlsx.readFile(name)
// 			.catch(function (err) {
// 				console.log(err);
// 			})
// 			.then(function () {
// 				let worksheet = workbook.getWorksheet("Data");
// 				let lastRow = worksheet.lastRow;
// 				let id = lastRow.getCell(1).value;
// 				id++;
// 				console.log(`Raw with ${id} ID was added`);
// 				worksheet.addRow([id, object.name, object.action, object.room, object.time, new Date()]);
// 				console.log("Writing file...");
// 				saveExcelFile(name, workbook);
// 				console.log("File writen.");
// 			});
// 	} else {
// 		console.log(`File ${name} does not exist. Creating started...`);

// 		var worksheet = workbook.addWorksheet("Data");
// 		worksheet.columns = [
// 			{ header: 'No',				key: 'id',			width: 5  },
// 			{ header: 'Name', 			key: 'name',		width: 25 },
// 			{ header: 'Action', 		key: 'action', 		width: 30 },
// 			{ header: 'Room',			key: 'room',		width: 10 },
// 			{ header: 'Time',    		key: 'time',     	width: 10 },
// 			{ header: 'Status', 		key: 'status',  	width: 5 }
// 		];
// 		worksheet.addRow([1, object.name, object.action, object.room, new Date(), "in"]);
// 		saveExcelFile(name, workbook);
// 		console.log(`File ${name} created.`);
// 	}

// 	var state = true;
// 	return state;
// }



//Read all rows from input files and create one big table for table.ejs output

async function mergeTables(files) {
	console.log("Merging files started...")
	let bigWorkbook = new Excel.Workbook();
	let bigWorksheet = bigWorkbook.addWorksheet("Data");
	bigWorksheet.columns = [
		{ header: 'Name', 			key: 'name',		width: 25 },
		{ header: 'Action', 		key: 'action', 		width: 30 },
		{ header: 'Room',			key: 'room',		width: 10 },
		{ header: 'Time',    		key: 'time', 	    width: 10 },
		{ header: 'status', 		key: 'status',  	width: 10 }
	];
	for (let i=0; i<files.length; i++) {
		let workbook = new Excel.Workbook();
		await workbook.xlsx.readFile(files[i]).then(function() {
			let worksheet = workbook.getWorksheet("Data");
			worksheet.eachRow(function(row, index){
				if (row.values[1] != 'No') {
					bigWorksheet.addRow([row.values[2], row.values[3], row.values[4], row.values[5], getStringTime(row.values[6])]);
				}
				var roww = bigWorksheet.lastRow;
			})
		})
		console.log(`File ${files[i]} was merged.`)
	}
	return bigWorkbook;
}


//Save workbook as excel file
async function saveExcelFile(path, workbook) {
	console.log(`Excel file ${path} saved.`)
	await workbook.xlsx.writeFile(path).then(function() {
		return 0;
	});
}


//Get files on date range
function getFiles(date1, date2) {
	let files = [];
	for (let loopTime = date1; loopTime < date2+86400000; loopTime += 86400000) {
		let date = new Date(loopTime);
		let fileName = `./public/Data/${date.getDate()}_${date.getMonth()}_${date.getFullYear()}.xlsx`;
		if (fs.existsSync(fileName)) {
			files.push(fileName);
			console.log(`${fileName} file exists and added to files array.`)
		}
	}
	console.log(`Array with files ready.`)
	return files;
}


//Create zip file from request
function zipFiles(files) {
	let archive = new zip();
	for (let i=0; i < files.length; i++) {
		console.log(`Adding ${files[i]} file to archive...`)
		archive.addLocalFile(files[i]);
	}
	let currentTime = new Date();
	let zipName = `./public/archives/${currentTime.getTime()}.zip`;
	archive.writeZip(zipName);
	console.log(`Archive create and saved to ${zipName}`)
	return zipName
}

//EXPORTS

module.exports.openExcelFile = openExcelFile;
//module.exports.zipFiles = zipFiles;
//module.exports.saveExcelFile = saveExcelFile;
//module.exports.getFiles = getFiles;
//module.exports.mergeTables = mergeTables;