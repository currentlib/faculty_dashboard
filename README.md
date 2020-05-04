# University Dashboard
Electronic system of control, accounting of working hours and journal of issuing keys from the audience for university employees

### Installation

System requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/currentlib/faculty_dashboard.git
$ cd faculty_dashboard
$ npm i
```

### Released features:

  - Parse MQTT request
  - Create single .xlsx file for every day
  - Manage actions from users and write to table
  - Return table on request
  - Merge files in inputed date range
  - In/Out person and Put/Get key identifier

### How to use
Create config file and run <br />

```sh
$ node index.js
```

Income mqtt message must be JSON-like: {"name": "${number}", "action": "long/short", "room": number}<br />
Where name number is number from users.json table; long action with room number (get/put key), short action can be without room number (enter/exit);<br /> room number - number of room which key used.<br />

### Tech
Dasboard uses a number of open source projects to work properly:

* [node.js](http://nodejs.org/) - evented I/O for the backend
* [exceljs](https://www.npmjs.com/package/exceljs) - read, manipulate and write spreadsheet data and styles to XLSX and JSON
* [Express](https://expressjs.com/) - fast node.js network app framework
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
* [adm-zip](https://www.npmjs.com/package/adm-zip) - pure JavaScript implementation for zip data compression for NodeJS
<br />
Free mqtt broker:

* [Mosquitto](https://mosquitto.org/) - an open source (EPL/EDL licensed) message broker that implements the MQTT protocol
* [Cloudmqtt](https://www.cloudmqtt.com/) - register free mqtt broker with 5 connections limit.
<br />

And of course Dashboard itself is open source with a [public repository](https://github.com/currentlib/faculty_dashboard) on GitHub.
<br />

### Workflow
[Here](https://app.diagrams.net/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=faculty_dashboard.drawio#R7V1Zd6M2FP4tffCj57Avj842nTadLT2TySMxik0LyAGR2P31lUAyIGEbLwjsNufMBIQQcHd990oZ6dfR8mPiLeZ%2FQB%2BEI03xlyP9ZqRpuuqq%2BBdpWRUtqmEqRcssCXzaVjY8BP8A2si6ZYEP0lpHBGGIgkW9cQrjGExRrc1LEvhe7%2FYCw%2FpTF94MCA0PUy8UWx8DH82LVkezy%2FZfQTCbsyerlltciTzWmX5JOvd8%2BF5p0m9H%2BnUCISqOouU1CAn1GF2K%2B%2B42XF2%2FWAJi1OaGH5OfN0Zq%2B4HzOpk8fvv22%2BP097FejPLmhRn9YPqyaMUoAHxMEHoKEzSHMxh74W3ZepXALPYBeYyCz8o%2B9xAucKOKG%2F8CCK0od70MQdw0R1FIr4qfQr8uhVkyBVven%2FYj71i5kRLgI4ARQMkKd0hA6KHgrc5Uj8rGbN1vfetXGOBX0RQqyJpCmcjEmDGVDYG8ZAYQvatkAj6ovEbZlLNmDzapApse8BORwKuSE4Ss7%2FMAgYeFl1PwHStonepeMqUcMZVtTHgDCQLLreRdcmShZDLo6XupOapF2%2BYVrTGUzQypkXJfullnLt4GtXi5dG3pZ3aiBpMk8VaVDgsi3ulmLdEtTksMheNgMeJJVcP5j7DYPjWLj1IsQ6D6pzhAhR9%2BCWbkkbGP%2Fw%2BDFIEYJOkWU6XsNlUd2Kb1uQzjlC2nk0%2FO6vrr%2FezxIXR%2F%2FojGYKwNSHI5sTpMlO1OfK9lmzXGaa5c32sLbHoEz%2FlnvWYg3eaD5Qi26XL0Ufv2uuwFBiHZhwhyN%2B50p7%2FUHLmSbQps%2BhKTmcsrIi8ZgTQlk6O%2B5XtNFUYlpXf5Fk3Cecm3qvcj4OtzWdMmcXr7HXj%2BbhnHc%2FUFOcTE9cIQhHCWeBEm%2BQIkAX4pkPDXvpYXdqlEWvBT%2BaCYjl77MTpSGKd3hRHDxZFmhfixV37whg9n5HBkXn32IjAyb9hF%2FLDq9cZbJlMUwHjPm75DGG25pe9QVecYaIkMtBv4x7uP0%2FFP9BQbVeYlBMsJAd4wLUDs08ObaeilaTCt0wosA%2FSzcvyU64VJz26WlOL5yYqeHGH1jJZWr0Jms4HMrO1YTImbkOgKx77igwTjKA7k7BioYyurnTuIyDp2jiIadUaZklFErYUa%2F88o4gidnhkl4r0NfuxTirsc5AHvYTwb6XfsynPC993lEOcwes7SXsJ%2Fo20005k31ERU%2BQmIABf%2BPsQB7mEwi4kvxNTII0VChWDqhRN6IQp8v9AxgKNE7zkfimgZRV7xuOYVYTQeC6sVjSRPRWiTE%2FqGeZbRQGdeN05HZ3Ga9RmePZkNfTeZdZlk1puMjXyvwGLBMv57qlxpjgUxF5JV5SZy%2BlS9Vt6Wnx0fQzqUNjvher1tsHmkq1K5KbbJT%2BLaRpH8QJbkKFIfRq5OvkjpbTNA%2BslTQBtQG%2FeDW%2Fmx7bpc8ALWsVwYAzFPw5ULQ%2BvH1NiyLUQrFGmKOU1eGr4U0fEa6lGg71eC3p1B8hccFSu%2FFGw8j1DZ2WDBe4uUDXdgulvT3FKRT6%2B7dkvddSWFCToXdTotrfi%2BJSBjDuJwVAklIHpTPkbQ5wlWfxJEW68ZKbm7%2BgjIe%2F8NVmUT4RieYSh0Rj1MdHjMVzLYvSd89aYiHIEBObivKWP87y7LB6UtuanOUpB8aG2cKYf0CeHFHJJSuHzgYsqn3ZFpQsHQkGAdxcVFhrvdzRjf2z8t9yHFGElxGGfRc%2BV993YL5zZrFYROY1UZFaFrhAfMzoROdC4XAA9YWt2Hq65AZqnogHvumDGLjntwxcfFTtohTu1rdp5OzRmaS3OHUeNRmXZqkuadbut5pyUpdlXrgIRZr3djIaasaagrTkMf8pAiRR7K0po6BnFVDwemY27fOmYNQ8eO8C1WS1WxTq4qx%2FkWEWstHAnzEQoRXMX3kJeHvO%2B9yy4vvE7%2FS0uGgW0cLrxWa%2BF1BiW8lii8dzCJhi2vrszVBlu5WK1jTzAZOLoVmo%2Bgn8M%2BKJ%2F9DI2YqtJ7CbAh1jxdQg2AkARsKLaQWgPA0IOdlaMFIDPS8GOUOIeVyJFH%2Fdn1iCE35AgF7DoN2fYpHm2N%2BIj4F33FHEeCiZ8fs%2FdWXmBSUTxv62TtAGhtX2StAU4jLz0SULSjQbTWA%2FwZrD8SWyywZmTxkXtS7IEF62Nq8%2B5gPnWOYByg%2FDvf5yAhowcpR8KLB%2FsMc3ew1VgZKyyLPp0dGEaNqfwssMk2Pdi5BFhSJsnkXUTL5Xj7ZpKsDTWYm%2BpX%2BP7sfFN%2F4Tvq%2FbvJVLnDmDSsxVgdSUqIthfjk082WrK%2Fo4So8ByatuhUzBi1t0dN9166AbbKXWGJWw2u0IGvz%2B6%2FJthqilN79U%2B2LAc1OLiYL1OSjA%2BbIj7cInFzm0fY%2B%2BVshEGLPRfSTWh0o1rvX9EkefbPK3v%2FuSFTzIleQubZqOdVei9MZ6nw4dhUWSbVGbhJdexugiXhOcr2GH5H%2F46Cq1bFToJ9L5CUbg18Pd14JvZdKFttKHmRDJWL9v0SwF2TS5yblljCJRXctYdh4A831MwMyra%2FhuSNYuxhFIHJhy0Yg3fvzibJE%2FNLyA3JazDspnlu88pkLoeogGWQonNZSiHsqdCwBYdchMEZxjqoI3Spp2DVMO1WKrJvsMrnStlzOg0%2BGRErUnCdAJoN4xTuPcCSSqTT84ewASOvUb3vSmSL5WeXEObptlGXy4bsndwwT5wwXQBconHRdJM8S4VLnHOvpnQkpX6EJfMto%2Blj18KZMjKMbIOCS039DC7z41wkGKxaPFbQs3VzxfD3Epz10PbccURfvQHJpBt8b4Y0ew43hRWLTbSVvKbo3PGu1rvfyHLlu%2FZpa7v5zZj%2FAx8d7vjWuBe8WN72GOR3eUT7OBlhW236cJpFORN36dNzITP3z3UZELSpQSw25ws5kmlt1xMdsCIYn5Z%2FKKegefn3hvTbfwE%3D) you can find workflow of process.