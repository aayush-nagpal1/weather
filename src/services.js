
module.exports = {
    getWeatherDetails: function(queryData, successCb, errorCb) {
      console.log(queryData)
      $.ajax({
        type: "GET",
        url: "http://localhost:4000/getWeatherUpdate",
        datatype: "json",
        headers: { "x-access-token": queryData },
        success: successCb,
        error: errorCb
      });
    }
}