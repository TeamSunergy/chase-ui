const net = require('net');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const Parser = require("json-stream-parse");
const parser = new Parser();
var socket = new net.Socket();
var count = 0;
io.once('connection', (socket) => {
	parser.on("json", (json) => {
		io.sockets.emit("data", json);
		console.log(json);
	});
});

socket.connect(25000, '127.0.0.1', () => {
   	console.log('connection');
	socket.pipe(parser);
});
server.listen(port, () => console.log("Listening on port: ", port));
