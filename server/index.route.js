const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require("path");
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


router.get("/getWeatherUpdate",(req,res,next)=>{
    console.log(req,"weather")
    try {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+req.param.data+'&units=metric&appid=bd72c4e133c1f2b6557982d7510b4648')
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });    
    } catch (error) {
        console.log(error)
    }

})


const Month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

router.get("/", (req, res, next) => { 
    try {
        res.render(path.join(__dirname, "../public/index.html"), {
            data: dummyData,
            Month,
            

        });
    } catch (error) {
        console.error(error);
        next()
    }
})

module.exports = router;