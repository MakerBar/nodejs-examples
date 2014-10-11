// Use NPM to install expressjs and jade
/* npm install express
 *  In case it breaks, choose an earlier version, like:
 * npm install express@4.8.5
 *
 * npm install jade
 */

// Set express module to variable "express"
var express = require("express");

// Create an "app" variable from the express library
var app = express();

// Set the app engine to use Jade as the template engine
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade')

// Set the template folder to be /public
//  Should ideally be in dedicated template fold
app.set('views', __dirname + '/public');

// Add a "route" that leads to the req/res, as seen in Node.js
app.get("/", function(req, res){
  res.render("simpleJade", { title: "Page Title", message: "Jade Example"});
});

// Starts up the server
var server = app.listen(1337, function() {
  
});