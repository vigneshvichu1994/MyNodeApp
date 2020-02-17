var fs = require('fs');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json()
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get('/Employee/:id', function (req, res) {
        var data
        if (req.params.id !== "0") {

            var list = JSON.parse(fs.readFileSync('employee.json', 'utf8'));
            data = list.filter(emp => emp.id == req.params.id)[0];


        }
        else {
            data = {
                id: 0,
                name: "",
                designation: ""
            }
        }

        res.render('employee', { data: data });
    });


    app.post("/MergeEmployee", jsonParser, function (req, res) {

        if (req.body.id === "0") {

            var list = JSON.parse(fs.readFileSync('employee.json', 'utf8'));

            var newiD = (list.length + 1)
            var newObj = {
                "id": newiD,
                "name": req.body.name,
                "designation": req.body.designation
            }

            list.push(newObj);

            fs.writeFile("employee.json", JSON.stringify(list), 'utf-8', function (err) {

                var data = {
                    'STATUS': "SUCCESS",
                    "ID": newiD
                }

                res.send(JSON.stringify(data));
            });





        }
        else {

            var list = JSON.parse(fs.readFileSync('employee.json', 'utf8'));

            var index = list.findIndex(obj => obj.id == req.body.id);


            if (index != -1) {
                list[index].name = req.body.name;
                list[index].designation = req.body.designation;
            }

            fs.writeFile("employee.json", JSON.stringify(list), 'utf-8', function (err) {

                var data = {
                    'STATUS': "SUCCESS",
                    "ID": req.body.id
                }

                res.send(JSON.stringify(data));
            });
        }

    });

    app.get("/getAllEmployees", function (req, res) {
        var data = JSON.parse(fs.readFileSync('employee.json', 'utf8'));

        res.writeHead(200, { 'Contrewnt-Type': 'text/json' })

        res.end(JSON.stringify(data));

    });

}