const net = require('net');
const client = new net.Socket();
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server)

client.connect(25000, '127.0.0.1', function() {
		console.log('Connected @ localhost on Port: 25000');
	});

io.on('connection', socket => {
  console.log('User connected');
  client.on('data', function(data) {
  	  var data = JSON.parse(data.toString());
  	  data.time = new Date().toLocaleString();
  io.sockets.emit("data", data);
});
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
server.listen(port, () => console.log("Listening on port: ", port))
