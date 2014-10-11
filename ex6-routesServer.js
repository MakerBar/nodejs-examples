// Express makes routes easy

// Set express module to variable "express"
var express = require("express");

// Create an "app" variable from the express library
var app = express();

// Add a "route" that leads to the req/res, as seen in Node.js
app.get("/", function(req, res){
  res.send("Express powered web page");
});

// Second route to /page
app.get("/page", function(req, res){
  res.send("This is a second page");
});

// This page returns a JSON value, the standard Javascript data sructure
app.get("/json", function(req, res){
  res.json(
    {
      "message": "welcome to the page"
    }
  )
});

// Visit page with value set
//  /info?value=my value
app.get("/info", function(req, res){
  res.send("The info you sent is: " + req.query.value);
});

// This page is requires a post call: such as from a web frm
app.post("/form", function(req, res){
  res.send("The form value is: " + req.query.value);
});

// Starts up the server
var server = app.listen(1337, function() {
  
});