// Use NPM to install expressjs
//npm install express

// Set express module to variable "express"
var express = require('express');

// Create an "app" variable from the express library
var app = express();

// Add a "route" that leads to the req/res, as seen in Node.js
app.get('/', function(req, res){
  res.send("Express powered web page");
});

// Starts up the server
var server = app.listen(1337, function() {
  
});