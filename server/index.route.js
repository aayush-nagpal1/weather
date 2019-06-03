const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require("path");
var cors = require('cors')
const dummyData = {
    date: new Date(),
    time: "11:50 PM",
    temperature: 31.3,
    future: [{
        date: new Date(),
        temperature: 31.3,
    }, {
        date: new Date(),
        temperature: 31.3,
    }, {
        date: new Date(),
        temperature: 31.3,
    }, {
        date: new Date(),
        temperature: 31.3,
    }],
};

var corsOptions = {
    origin: 'http://localhost:4001',
    optionsSuccessStatus: 200
}
router.get("/getWeatherUpdate", cors(corsOptions), (req, res, next) => {
    var token = JSON.parse(req.headers['file-access-id']);    
    try {
        let url = "https://api.openweathermap.org/data/2.5/forecast?q=" + token.city + "&units=metric&appid=bd72c4e133c1f2b6557982d7510b4648"
        axios.get(url)
            .then(function (response) {
                res.end(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // console.log(error);
            });
    } catch (error) {
        // console.log(error)
    }

})

router.get("/", (req, res, next) => {
    try {
        res.render(path.join(__dirname, "../dist/bundle.js"), {
            data: dummyData,
            Month,


        });
    } catch (error) {
        console.error(error);
        next()
    }
})

module.exports = router;