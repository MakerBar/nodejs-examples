// This will be a combination of a socket.io and express.js server
//  Socket.io functions as a communication platform

// Set express, application, then startup server
var express = require("express");
var app = express();

// Note that this part differs from previous examples, http is separated out
var http = require("http").Server(app);

// include the socket.io program and run it
var io = require("socket.io")(http);

// Sets the /static webpage route to the /public folder
app.use("/static", express.static(__dirname + "/public"));

// Add a "route" that leads to the req/res, as seen in Node.js
app.get("/", function(req, res){
  // Grab a file and respond with that
  res.sendFile(__dirname + "/public/socket.html");
});

// if someone connects to socket io
io.on("connection", function(socket){
  console.log("a user connected");
  io.emit("message", "Hello back");
});

// Starts up the server
var server = http.listen(1337, function() {
  
});