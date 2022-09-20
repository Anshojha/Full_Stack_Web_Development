const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser"); // to include bodyPraser
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); // to use bodyParser
app.get("/", function (req, res) {
res.sendFile(__dirname+ "/APIindex.html");
});

app.post("/", function(req, res){
   
const city = req.body.cityName; // tanking  city name as input
const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=cee75939f5d487cc7c21f76a47338cbe&units=metric";
https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
        const weatherCode = JSON.parse(data);
        const object = {
            name: "Angela",
            favourite: "Ramen"
        }
        
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp;
        
        console.log(temp);
        const weatherDiscr = weatherData.weather[0].discription;
        console.log(weatherDiscr);
        res.write("<h1>The temperature in "+city+" is " + temp + " degress celcius.</h1>");
        res.write("<p>The weather discription is " + weatherDiscr + ".</p>");
        res.send();
    })
});
})






app.listen(3000, function () {
    console.log("Server is running on port 3000!");
})