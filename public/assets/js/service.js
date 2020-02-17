var _http = {

    post: function (url, data, callback) {

        return $.ajax({
            url: url,
            data: JSON.stringify(data),
            method: "POST",
            contentType: "text/json;charset=utf-8",
            dataType: "json",
            success: function (res, str, xhr) {
                if (xhr.status == 200) {
                    callback(res);
                }
            },
            error: function (xhr, status, error) {
                alert(error);

            }


        });
    },
    get: function (url, callback) {

        return $.ajax({
            url: url,
            method: "GET",
            contentType: "text/json;charset=utf-8",
            dataType: "json",
            success: function (res, str, xhr) {
                if (xhr.status == 200) {
                    callback(res);
                }
            },
            error: function (xhr, status, error) {
                alert(error);

            }


        });
    }
}