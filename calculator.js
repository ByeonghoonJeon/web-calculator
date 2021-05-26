const express = require("express");
const path = require('path');

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));

app.post("/", function(req, res){
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const calc = req.body.calc;
    let result;
    switch (calc) {
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num1/num2;
            break;
        default:
            break;
    } 
    res.send("The result of calculation is "+result);
})


});

app.listen(1992, function () {
    console.log("Server started on port 1992")
});