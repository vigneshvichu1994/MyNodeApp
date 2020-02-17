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
         head.append($('<th>&nbsp;</th>'));
        table.append(head);

        res.forEach(function(obj, i){
            var row  = $("<tr/>");
            row.append(`<td>${obj.id}</td>`);
            row.append(`<td>${obj.name}</td>`);
            row.append(`<td>${obj.designation}</td>`); 
             row.append(`<td><a onclick=" employeeDashboard.getEmployee(${obj.id})">Edit</a>   </td>`);
            table.append(row);
        });

        $("#dvEmployees").empty().append(table);
    },

    getEmployee:function(id){
        window.location.href = window.location.origin + `/Employee/${id}`; 
    }
}


$(document).ready(function () {
    employeeDashboard.GetEmployees();

})