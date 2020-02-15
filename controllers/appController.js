var fs = require('fs');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get('/newEmployee', function (req, res) {
        res.render('employee');
    });

    app.get("/getAllEmployees", function (req, res) {
        var data = JSON.parse(fs.readFileSync('employees.json', 'utf8'));

        res.writeHead(200, { 'Contrewnt-Type' : 'text/json'} )

        res.end(JSON.stringify(data));

    });

}