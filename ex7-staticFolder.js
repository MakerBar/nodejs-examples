// Express makes routes easy

// Set express module to variable "express"
var express = require("express");

// Create an "app" variable from the express library
var app = express();

// Sets the /static webpage route to the /public folder
app.use('/static', express.static(__dirname + '/public'));

// Add a "route" that leads to the req/res, as seen in Node.js
app.get("/", function(req, res){
  // Grab a file and respond with that
  res.sendFile(__dirname + '/public/index.html');
});

// Starts up the server
var server = app.listen(1337, function() {
  
});