var employeeDashboard = {
    GetEmployees: function () {

        _http.get("/getAllEmployees", this.GetEmployeesComplete)
    },
    GetEmployeesComplete: function (res) {

        //console.log(res);
        
        $("#dvEmployees").empty().append();
        var table = $('<table/>').addClass('table').attr('id', 'tblEmployee')
        var head = $("<tr/>");
        head.append($('<th>ID</th>'));
        head.append($('<th>NAME</th>'));
        head.append($('<th>Designation</th>'));
        table.append(head);

        res.forEach(function(obj, i){
            var row  = $("<tr/>");
            row.append(`<td>${obj.id}</td>`);
            row.append(`<td>${obj.name}</td>`);
            row.append(`<td>${obj.designation}</td>`);
            table.append(row);
        });

        $("#dvEmployees").empty().append(table);
    }


}


$(document).ready(function () {
    employeeDashboard.GetEmployees();

})