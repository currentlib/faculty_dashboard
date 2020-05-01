let mqtt    = require("mqtt")



client.on('connect', function () {
	client.subscribe(config.mqtt_topic);
	console.log('Connected to ' + config.mqtt_topic + " topic.");
});