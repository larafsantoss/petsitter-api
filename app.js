// Importing express 
// with app I will use all express sources ---> const app = express();
// development enviroment (creating functions)/homologation is what the client see


const express = require('express');
const app = express();
const config = require('./config/config');
const db = require('./config/db');
var bodyParser = require('body-parser');
const fs = require('fs');


process.env.NODE_ENV = config.env;
/* connecting to mongo db*/

let d = db;
d.on("connected", function () {
    console.log("connected!");
});

d.on("disconnected", function () {
    console.log("disconnected!");
});

d.on("error", function (error) {
    console.log('Connection error: ' + error);
});

app.use(bodyParser.json());
app.use(express.static("./client/build"));

require('./config/routes')(app);

app.get("*", (req, res) => {
    res.setHeader("content-type", "text/html");
    fs.createReadStream(`${__dirname}/client/build/index.html`).pipe(res);
});

app.listen(config.port || 4000, function(){
    console.log("Great! It works. Server started on port 4000");
})