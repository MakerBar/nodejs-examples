// install jade before this example
/// npm install jade

// Express makes routes easy

// Set express module to variable "express"
var express = require("express");

// Create an "app" variable from the express library
var app = express();

// Sets the /static webpage route to the /public folder
app.use('/static', express.static(__dirname + '/public'));

// map jade files
app.engine('jode', require('jade').__express);

// Add a "route" that leads to the req/res, as seen in Node.js
app.get("/", function(req, res){
    // Grab a file and respond with that
    res.render('index.jode',
         {pageTitle: 'Hello, MakerBar!'}
    );
});

app.route(/\/css\/.+/).all(
    function(req, res) {
        console.log("fetching " + req.url + ".jode");
        res.render(req.url.slice(1) + ".jode");
    }
);

// Starts up the server
var server = app.listen(1337, function() {
  
});
