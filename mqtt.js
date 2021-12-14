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
		client.subscribe(config.mqtt_topic2);
		console.log('Connected to ' + config.mqtt_topic + " topic.");
	});
	
	client.on('message', function (topic, message) {
		var inputObject = JSON.parse(message); // [name, action (short/long), room]
		console.log(topic);
		if (topic == "EeAR0N6BgvpM/test") {
			if (Object.keys(users).includes(inputObject.name)) {
				console.log("allow");
				client.publish("EeAR0N6BgvpM/server", "1");
				// tables.openExcelFile(inputObject);
			} else {
				console.log("deny");
				client.publish("EeAR0N6BgvpM/server", "0");
				console.log("User ID: " + inputObject.name + " not allowed.")
			}
		} else if (topic == "EeAR0N6BgvpM/test2") {
			console.log("writing");
			tables.openExcelFile(inputObject);
		}
		
	});
}

