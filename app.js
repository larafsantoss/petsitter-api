// Importing express 
// with app I will use all express sources ---> const app = express();
// development enviroment (creating functions)/homologation is what the client see


const express = require('express');
require(".config/config");
const app = express();
const config = require('./config/config');
const db = require('./config/db');
var cors = require('cors');
var bodyParser = require('body-parser');


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

app.use(cors());
app.use(bodyParser.json());

require('./config/routes')(app);

app.listen(config.port, function(){
    console.log("Great! It works. Server started on port 4000");
})