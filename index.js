const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 6253;

app.use(bodyParser.urlencoded({ extended : false}));

console.log(path.join(__dirname ,"/public"));
const staticpath = path.join(__dirname, "/public");
app.use(express.static(staticpath));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname + "/public/weather-test.html"));
});

app.post("/api/v4/sign",(req,res)=> {
    res.send("<h1>Done<h1>");
    console.log(req.body);
});

app.listen(port,()=>{
    console.log(`App is listenting on ${port}`);
});
