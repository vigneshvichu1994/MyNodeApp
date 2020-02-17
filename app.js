var express = require('express');

var appController = require('./controllers/appController');

var app = express();

app.set("view engine", 'ejs');

app.use(express.static('./public'));

// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )

// app.use(bodyParser.json())


appController(app);

app.listen(8080);