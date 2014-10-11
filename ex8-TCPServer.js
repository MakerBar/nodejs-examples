// Load the TCP library and assign it to variable "net"
var net = require("net");

// Start the TCP server
var server = net.createServer(function (socket) {
  // If someone connects to the server, just repeat the message
  socket.write("You said: \r\n");
  socket.pipe(socket);
});

// Have the TCP server listen to port 1337
server.listen(1337, "127.0.0.1");