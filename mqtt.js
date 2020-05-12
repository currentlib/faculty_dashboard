let mqtt    = require("mqtt");
let config	= require("./config.json");
let tables	= require("./tables.js");
let users	= require("./users.json");


module.exports.startMqtt = function () {
	let client = mqtt.connect(config.mqtt_address, {
		port: config.mqtt_port,
		username: config.mqtt_user,
		password: config.mqtt_pass}
	);
	
	
	client.on('connect', function () {
		client.subscribe(config.mqtt_topic);
		console.log('Connected to ' + config.mqtt_topic + " topic.");
	});
	
	client.on('message', function (topic, message) {
		var inputObject = JSON.parse(message); // [name, action (short/long), room]
		if (Object.keys(users).includes(inputObject.name)) {
			tables.openExcelFile(inputObject);
		} else {
			console.log("User ID: " + inputObject.name + " not allowed.")
		}
		
	});
}

