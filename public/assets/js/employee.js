$(document).ready(function () {
    $("#btnSave").on("click", function () {

        employee.SaveEmployee();
    });

    $("#btnCancel").on("click", function () {
        window.location.href = window.location.origin;
    });
});


var employee = {
    SaveEmployee: function () {
        var data = {
            id: $("#hdnEmployeeID").val(),
            name: $("#txtEmployee").val(),
            designation: $("#txtDesignation").val()
        }

        _http.post("/MergeEmployee", data, this.SaveEmployeeComplete)
    },
    SaveEmployeeComplete: function (res) {

        if (res.STATUS == "SUCCESS") {
            window.location.href = window.location.origin;
        }
    }
}