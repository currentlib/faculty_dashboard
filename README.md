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
  - Web GUI
  - Create single .xlsx file for every day
  - Return table on request
  - Merge files in inputed date range

### Future features:
  - In/Out person and Put/Get key identifier
  - Response on RFID unit
  - and other...

### Tech
Dasboard uses a number of open source projects to work properly:

* [Mosquitto](https://mosquitto.org/) - an open source (EPL/EDL licensed) message broker that implements the MQTT protocol
* [exceljs](https://www.npmjs.com/package/exceljs) - read, manipulate and write spreadsheet data and styles to XLSX and JSON
* [node.js](http://nodejs.org/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js network app framework
* [adm-zip](https://www.npmjs.com/package/adm-zip) - pure JavaScript implementation for zip data compression for NodeJS
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware

And of course Dashboard itself is open source with a [public repository](https://github.com/currentlib/faculty_dashboard)
 on GitHub.

[Demo](http://40.71.93.219/) page if app is running.
