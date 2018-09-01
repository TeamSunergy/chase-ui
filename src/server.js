const express = require('express'),
	http = require('http'),
	socketIO = require('socket.io'),
	app = express(),
	expressPort = 4001,
	server = http.createServer(app),
	io = socketIO(server),
	log4js = require('log4js'),
	logger = log4js.getLogger('chase-ui'),
	nconf = require('nconf');
module.exports.connected = false;

const isPortReachable = require('is-port-reachable');

//nconf configuration
nconf.file("default", './config/default.json');
nconf.file("file", './config/config.json');

//logging configuration
log4js.configure("./config/log4js.json");
logger.level = 'info';

let rabbit = nconf.get("rabbit");
var amqp = require('amqplib/callback_api');
var count = 0;
amqp.connect(rabbit.host + ':' + rabbit.port, function (err, conn) {
	module.exports.connected = true;
	conn.createChannel(function (err, ch) {
		var q = 'data';
		ch.assertQueue(q, { durable: false });
		logger.info(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
		ch.consume(q, function (msg) {
			module.exports.data = JSON.parse(msg.content.toString());
			io.sockets.emit("data", JSON.parse(msg.content.toString()));
			//Notification Template
			//io.sockets.emit('notification', {message:"MESSAGE_GOES_HERE", link: "/data"});
		}, { noAck: true });
	});
});
io.once('connection', (socket) => {
	logger.info('Event: SocketIO Connection Established w/ browser');
});

var router = require('./lib/controller/router');
app.use('/api', router);

server.listen(expressPort, () => logger.info("Listening on port: ", expressPort));
