var express = require('express');

var appController = require('./controllers/appController');

var app = express();

app.set("view engine", 'ejs');

app.use(express.static('./public'));


appController(app);

app.listen(8080);