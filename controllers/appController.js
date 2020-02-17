var fs = require('fs');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get('/Employee/:id', function (req, res) {


        
        res.render('employee');
    });

    app.get("/getAllEmployees", function (req, res) {
        var data = JSON.parse(fs.readFileSync('employee.json', 'utf8'));

        res.writeHead(200, { 'Contrewnt-Type' : 'text/json'} )

        res.end(JSON.stringify(data));

    });

}