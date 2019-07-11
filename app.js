const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
var preview = require("hydra-page-previewer");
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    console.log(req.body.url)
    preview(req.body.url, function(err, data) {
        if(!err) {
            console.log(data); //Prints the meta data about the page
           res.send(data);
        }
    });
})
app.listen("8000",(err)=>{
    if(err) throw err;
    else{
        console.log("listening to 8000");
    }
})