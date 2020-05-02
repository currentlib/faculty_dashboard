# University Dashboard
Electronic system of control, accounting of working hours and journal of issuing keys from the audience for university employees

### Installation

System requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd faculty_dashboard
$ npm i
$ node index.js
```

### Released features:

  - Parse MQTT request
  - Create single .xlsx file for every day
  - Manage actions from users and write to table
  - Return table on request
  - Merge files in inputed date range
  - In/Out person and Put/Get key identifier

### How to use
Create config file and run
```sh
$ node index.js
```
Income mqtt message must be JSON-like: {"name": "${number}", "action": "long/short", "room": number}
Where name number is number from users.json table; long action with room number (get/put key), short action can be without room number (enter/exit); room number - number of room which key used.

### Tech
Dasboard uses a number of open source projects to work properly:

* [node.js](http://nodejs.org/) - evented I/O for the backend
* [exceljs](https://www.npmjs.com/package/exceljs) - read, manipulate and write spreadsheet data and styles to XLSX and JSON
* [Express](https://expressjs.com/) - fast node.js network app framework
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
* [adm-zip](https://www.npmjs.com/package/adm-zip) - pure JavaScript implementation for zip data compression for NodeJS


Free mqtt broker:

* [Mosquitto](https://mosquitto.org/) - an open source (EPL/EDL licensed) message broker that implements the MQTT protocol
* [Cloudmqtt](https://www.cloudmqtt.com/) - register free mqtt broker with 5 connections limit.

And of course Dashboard itself is open source with a [public repository](https://github.com/currentlib/faculty_dashboard)
 on GitHub.
