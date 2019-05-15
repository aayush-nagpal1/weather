module.exports = {
    getWeatherDetails: function(queryData, successCb, errorCb) {
      console.log(queryData)
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/getWeatherUpdate",
        datatype: "json",
        data: queryData,
        success: successCb,
        error: errorCb
      });
    }
}