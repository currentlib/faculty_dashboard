let Excel		= require('exceljs');
let fs			= require('fs');
let zip			= require('adm-zip');
let users       = require('./users.json')


//Open excel file with name input parameter
//object = {name, action (short/long), room}
async function openExcelFile(object) {
	let currentDate = new Date();
	let fileName = `${currentDate.getDate()}_${currentDate.getMonth()}_${currentDate.getFullYear()}.xlsx`;
	let pathToTable = "./public/Data/" + fileName;
    if (!isFileExist(pathToTable)) {
        createTodayTable(pathToTable).then(setTimeout(addActionToTable, 3000, pathToTable, object));
    } else {
        addActionToTable(pathToTable, object);
    }
}


function createTodayTable(path) {
    console.log(`File ${path} does not exist. Creating started...`);
    let workbook = new Excel.Workbook();
	let worksheet// = workbook.addWorksheet("Data");
	return new Promise( function(resolve, reject) {
        try {
            worksheet = workbook.addWorksheet("Data");
            worksheet.columns = [
                { header: 'No',				key: 'id',			width: 5  },
                { header: "Ім'я", 			key: 'name',		width: 25 },
                { header: 'Дія', 		    key: 'action', 		width: 30 },
                { header: 'Аудиторія',		key: 'room',		width: 10 },
                { header: 'Час',    		key: 'time',     	width: 10 },
                { header: 'Статус', 		key: 'status',  	width: 10 }
            ];
            workbook.xlsx.writeFile(path);
            console.log(`File ${path} created.`);
            resolve(workbook)
        }
        catch(err) {
            reject()
        }
    }); 
}

function addActionToTable(path, object) {
    let workbook = new Excel.Workbook();
    console.log(`File ${path} reading...`);
	workbook.xlsx.readFile(path)
        .then(function () {
            let worksheet = workbook.getWorksheet("Data");
            let usersAction = "";
            let lastRow = worksheet.lastRow;
            let id = lastRow.getCell(1).value;
            let username = users[object.name];
            let status = getLastStatus(worksheet, username);
            let roomCount = getCountOfRoom(worksheet, object.room);
            if (id == 'No') {
                id = 1;
            } else {
                id++;
            }
            if (object.action == "long") {
                if (status == "out" || "") {
                    usersAction = "Ввійшов і ";
                }

                if (roomCount%2 != 0) {
                    usersAction += "Залишив ключ";
                } else {
                    usersAction += "Взяв ключ";
                }
                status = "in";
            } else {
                if (status == "in") {
                    usersAction = "Вийшов";
                    status = "out"
                } else {
                    usersAction = "Ввійшов";
                    status = "in"
                }
            }
            
            worksheet.addRow([id, username, usersAction, object.room, new Date(), status]);
            console.log(`Row with ${id} ID was added`);
            console.log("Writing file...");
            saveExcelFile(path, workbook);
            console.log("File writen.");
        }, function () {
            console.log("Something went wrong.")
        });
}


function getLastStatus(worksheet, name) {
    let status = "out";
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
            workbook.xlsx.writeFile(path)
            //saveExcelFile(path, workbook);
            console.log("File writen.");
        });
}


function isFileExist(path) {
    return fs.existsSync(path);
}


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