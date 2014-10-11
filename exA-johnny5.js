// https://github.com/rwaldron/johnny-five/
// Johonny Five
// npm install johnny-five

// Be sure to install on Arduino: File > Examples > Firmata > StandardFirmata
// Connect your computer to the Arduino

// Sets module to variable "five"
var five = require("johnny-five");

// Attempts to find a connected device
//  Will fail with error if none are found
var board = new five.Board();

// When device is connected...
board.on("ready", function() {
  // Create an Led on pin 13 and strobe it on/off
  (new five.Led(13)).strobe();
});