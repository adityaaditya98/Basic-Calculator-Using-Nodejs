const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));



app.get("/",function(req,res){
  console.log("hellomy self");
  res.sendFile(__dirname+"/index.html");

})
app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var ans = num1+num2;
  res.send("<h1>Ans: </h1>"+ans);
  console.log(req.body.num1);
})



var count=0;
app.listen(8080,function(){
  console.log(count++);
})
