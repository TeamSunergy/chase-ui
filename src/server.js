var net = require('net');
var client = new net.Socket();
client.connect(25000, '127.0.0.1', function() {
	console.log('Connected @ localhost on Port: 25000');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});