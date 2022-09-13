const { response } = require("express");
const express = require("express");

const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url ="https://api.openweathermap.org/data/2.5/weather?q=noida&appid=cee75939f5d487cc7c21f76a47338cbe&units=metric";
    https.get(url , function(response){
        console.log(response.statusCodex);
    });

    response.on("data" , function(data){
        console.log(data);
    })
    res.send("Server is up and running");
})


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
})