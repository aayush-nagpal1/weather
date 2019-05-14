module.exports = {
    getWeatherDetails: function(queryData, successCb, errorCb) {
      $.ajax({
        type: "POST",
        url: "https://http://localhost:5000/getWeatherUpdate",
        datatype: "json",
        data: queryData,
        success: successCb,
        error: errorCb
      });
    }
}