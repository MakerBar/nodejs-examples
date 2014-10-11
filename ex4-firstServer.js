// "require" is Node.js feature to "load" libraries
// Library is loaded into variable "http"
var http = require("http");

// Starts a server, takes in a function as an argument
http.createServer(function (req, res) {

  // If someone visits the webpage, it returns a webpage with the words "Hello world"
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("This is my website\n");
  
// Have server listen on port "1337"
}).listen(1337, "127.0.0.1");