let mqtt		= require('mqtt');
let express		= require('express');
let bodyParser	= require('body-parser');
let config		= require('./config.json');
let tables 		= require('./tables.js');
let https		= require('https');
let http		= require('http');



let client = mqtt.connect("https://tailor.cloudmqtt.com", {
    port: 11847,
    username: "euveaslz",
    password: "EeAR0N6BgvpM"}
);
/*
let app			= express();

app.use(bodyParser.urlencoded({ exneded: true }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'ejs');
*/


//Return hours end minutes as string

function getStringTime(date) {
	let time = new Date(date);
	return time.getFullYear() + "-" + time.getMonth() +"-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + "." + time.getSeconds();
}

//Check if first date lower than second

function isLower(date1, date2) {
	return date1 <= date2;
}


/*
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
*/

client.on('connect', function () {
	client.subscribe("test");
	console.log('Connected to ' + "test" + " topic.");
});

client.on('message', function (topic, message) {
	var inputObject = JSON.parse(message); // [name, action (short/long), room]
	tables.openExcelFile(inputObject);
});


//http.createServer(app).listen(80);
//https.createServer(app).listen(443);

/*
app.listen(config.app_port, function() {
	console.log("Listening on " + config.app_port + " port.");
});
*/