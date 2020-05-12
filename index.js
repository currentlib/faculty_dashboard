let express		= require('express');
let Excel		= require('exceljs');
let bodyParser	= require('body-parser');
let config		= require('./config.json');
let tables 		= require('./tables.js');
let mqtt		= require('./mqtt.js')


let app	= express();

app.use(bodyParser.urlencoded({ exneded: true }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'ejs');


//Check if first date lower than second

function isLower(date1, date2) {
	return date1 <= date2;
}

app.get('/', function (req, res) {
	res.render('index.ejs', { title: "Dashboard"});
});

app.post('/', async function (req, res) {
	let firstDate = Date.parse(req.body.reqDateFirst) || Date.now();
	let secondDate = Date.parse(req.body.reqDateSecond) || Date.now();
	let lower = isLower(firstDate, secondDate);
	let files = tables.getFiles(firstDate, secondDate);
	let radio = req.body.radio;
	console.log("First Date: " + firstDate + " | " + "Second Date: " + secondDate);
	let bigWorkbook = new Excel.Workbook();
	switch (radio) {
		case "archive_excels":
			let pathToDownload = tables.zipFiles(files);
			res.download(pathToDownload);
			break;
		case "one_excel":
			bigWorkbook = await tables.mergeTables(files);
			await tables.saveExcelFile('./public/merged.xlsx', bigWorkbook);
			res.download('./public/merged.xlsx');
			break;
		case "show":
			bigWorkbook = await tables.mergeTables(files);
			await tables.saveExcelFile('./public/merged.xlsx', bigWorkbook);
			let outputWorkbook = new Excel.Workbook();
			await outputWorkbook.xlsx.readFile('./public/merged.xlsx');
			let outWotksheet = outputWorkbook.getWorksheet("Data");
			let outputRows = [];
			outWotksheet.eachRow(function (row, index) {
				let time = new Date(row.values[5]);
				let object = { name: row.values[1], action: row.values[2], room: row.values[3], sendTime: row.values[4], timeStamp: row.values[5]}
				outputRows.push(object);
			})
			res.render('table.ejs', { title: "Dashboard", contacts: outputRows });
			break;
		default:
			res.render('error.ejs', {message: "Wrong date range!", startDate: new Date(firstDate), endDate: new Date(secondDate)})
	}
})

app.listen(config.web_port, function() {
	console.log("Listening on " + config.web_port + " port.");
});

mqtt.startMqtt();
