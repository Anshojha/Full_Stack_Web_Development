const express = require("express");

const bodyPraser = require("body-parser");

const app = express();

app.use(bodyPraser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmi.html");
})

app.post("/",function (req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var resut = weight/(height*height);           
    res.send("Your BMI is " + resut);                                                                                           
})

app.listen(3000,function(){
    console.log("This website is working !!");
})