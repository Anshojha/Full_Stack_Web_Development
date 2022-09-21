

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const firstname= req.body.fname;
    const lastname = req.body.lname;
    const emaill = req.body.email;
const data = {
    members:[
        {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstname,
                LNAME:lastname,
            }
        }
    ]
};
 const jsonData = JSON.stringify(data)
    
} );


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
})



//api keys
// fa8735b59732e37003ccf27a52822e7c-us17