const net = require('net');
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server)
var serverSocket = new net.Socket();

function connect(){   
 serverSocket = new net.Socket();
 serverSocket.connect(25000, '127.0.0.1', function() {
  console.log('Connected @ localhost on Port: 25000');
  io.on('connection', socket => {
  console.log('User Connected');
  serverSocket.on('data', function(data) {
   var data = JSON.parse(data.toString());
   data.time = new Date().toLocaleString();
   io.sockets.emit("data", data);
 });
  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})
});
 serverSocket.on('error', function() {});
 serverSocket.on('close', function() {
  console.log('Connection Closed');
  connect();
});
}
connect();
server.listen(port, () => console.log("Listening on port: ", port))
