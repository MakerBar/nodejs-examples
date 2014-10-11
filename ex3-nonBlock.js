// install "promises" through npm before running
/// npm install promise

// out of order execution

console.log("starting");
process.nextTick(function() {
    console.log("next tick");
});
console.log("end example 2");

// using promises to process callbacks

var Promise = require('promise');

function getData() {
    return new Promise(function(resolve, reject) {
	// this takes 5 seconds to resolve
	setTimeout(function() {
	    console.log("resolving promise");
	    resolve("hello");
	}, 5000);
    });
}

console.log("going to call getData");
getData().then(function(result) {
    console.log("get Data returned: " + result);
    console.log("processing getData results");
});
console.log("already called getData");
