let mqtt		= require('mqtt');
let Excel		= require('exceljs');
let fs			= require('fs');
let express		= require('express');
let bodyParser		= require('body-parser');
let zip			= require('adm-zip');
let config		= require('./config.json');
let https		= require('https');
let http		= require('http');






let client		= mqtt.connect(config.mqtt_ip);
let app			= express();

app.use(bodyParser.urlencoded({ exneded: true }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'ejs');

//Open excel file with name input parameter

function openExcelFile(object) {
	let currentDate = new Date();
	let fileName = `${currentDate.getDate()}_${currentDate.getMonth()}_${currentDate.getFullYear()}.xlsx`;
	let pathToData = "./public/Data/"
	let isExist = checkFileExists((pathToData + fileName), object);
}

//Check file existing
//if file does not exists create it and init worksheet

async function checkFileExists(name, object) {
	let workbook = new Excel.Workbook();
	if (fs.existsSync(name)) {
		console.log(`File ${name} exist.`);
		workbook.xlsx.readFile(name)
			.catch(function (err) {
				console.log(err);
			})
			.then(function () {
				let worksheet = workbook.getWorksheet("Data");
				let lastRow = worksheet.lastRow;
				let id = lastRow.getCell(1).value;
				id++;
				console.log(`Raw with ${id} ID was added`);
				worksheet.addRow([id, object.name, object.action, object.room, object.time, new Date()]);
				console.log("Writing file...");
				saveExcelFile(name, workbook);
				console.log("File writen.");
			});
	} else {
		console.log(`File ${name} does not exist. Creating started...`);

		var worksheet = workbook.addWorksheet("Data");
		worksheet.columns = [
			{ header: 'No',				key: 'id',			width: 5  },
			{ header: 'Name', 			key: 'name',		width: 25 },
			{ header: 'Action', 		key: 'action', 		width: 30 },
			{ header: 'Room',			key: 'room',		width: 10 },
			{ header: 'SendTime', 		key: 'sendTime', 	width: 10 },
			{ header: 'TimeStamp',		key: 'timeStamp',	width: 15 }
		];
		worksheet.addRow([1, object.name, object.action, object.room, object.time, new Date()]);
		saveExcelFile(name, workbook);
		console.log(`File ${name} created.`);
	}

	var state = true;
	return state;
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



//Return hours end minutes as string

function getStringTime(date) {
	let time = new Date(date);
	return time.getFullYear() + "-" + time.getMonth() +"-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + "." + time.getSeconds();
}

//Check if first date lower than second

function isLower(date1, date2) {
	return date1 <= date2;
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


//Save workbook as excel file

async function saveExcelFile(name, workbook) {
	console.log(`Excel file ${name} saved.`)
	await workbook.xlsx.writeFile(name).then(function() {
		return 0;
	});
}


//Search name in table

function searchName(name, fileName) {

}

//Add row with action on room number

function addRow(data_array, worksheet) {
	if (data) {}
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
		{ header: 'SendTime', 		key: 'sendTime', 	width: 10 },
		{ header: 'TimeStamp',		key: 'timeStamp',	width: 15 }
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


app.get('/', function (req, res) {
	res.render('index.ejs', { title: "test"});
});

app.post('/', async function (req, res) {
	let firstDate = Date.parse(req.body.reqDateFirst) || Date.now();
	let secondDate = Date.parse(req.body.reqDateSecond) || Date.now();
	let lower = isLower(firstDate, secondDate);
	let files = getFiles(firstDate, secondDate);
	let radio = req.body.radio;
	console.log("First Date: " + firstDate + " | " + "Second Date: " + secondDate);
	let bigWorkbook = new Excel.Workbook();
	switch (radio) {
		case "archive_excels":
			let pathToDownload = zipFiles(files);
			res.download(pathToDownload);
			break;
		case "one_excel":
			bigWorkbook = await mergeTables(files);
			await saveExcelFile('./public/test2.xlsx', bigWorkbook);
			res.download('./public/test2.xlsx');
			break;
		case "show":
			bigWorkbook = await mergeTables(files);
			await saveExcelFile('./public/test2.xlsx', bigWorkbook);
			let outputWorkbook = new Excel.Workbook();
			await outputWorkbook.xlsx.readFile('./public/test2.xlsx');
			let outWotksheet = outputWorkbook.getWorksheet("Data");
			let outputRows = [];
			outWotksheet.eachRow(function (row, index) {
				let time = new Date(row.values[5]);
				let object = { name: row.values[1], action: row.values[2], room: row.values[3], sendTime: row.values[4], timeStamp: row.values[5]}
				outputRows.push(object);
			})
			res.render('table.ejs', { title: "test", contacts: outputRows });
			break;
		default:
			res.render('error.ejs', {message: "Wrong date range!", startDate: new Date(firstDate), endDate: new Date(secondDate)})


	}
})


client.on('connect', function () {
	client.subscribe(config.mqtt_topic);
	console.log('Connected to ' + config.mqtt_topic + " topic.");
});

client.on('message', function (topic, message) {
	var inputObject = JSON.parse(message);
	openExcelFile(inputObject);
});


//http.createServer(app).listen(80);
//https.createServer(app).listen(443);

app.listen(config.app_port, function() {
	console.log("Listening on " + config.app_port + " port.");
});
