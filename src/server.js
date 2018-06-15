const net = require('net'),
	express = require('express'),
	http = require('http'),
	socketIO = require('socket.io'),
	app = express(),
	expressPort = 4001
server = http.createServer(app),
	io = socketIO(server),
	Parser = require("json-stream-parse"),
	parser = new Parser(),
	log4js = require('log4js'),
	logger = log4js.getLogger('chase-server'),
	connection = false;
var socket = new net.Socket(),
	nconf = require('nconf');

nconf.argv()
	.env()
	.file({ file: 'config/config.json' });

logger.info(nconf.get("canpiServer"));
logger.level = 'info';
var canpiServer = nconf.get("canpiServer")

establishConnection();

io.once('connection', (socket) => {
	logger.info('Event: SocketIO Connection Established w/ browser')
	parser.on("json", (json) => {
		io.sockets.emit("data", json);
		//logger.info(json)
	});
});

function establishConnection() {
	socket.connect(canpiServer.port, canpiServer.host, () => {
		connection = true;
		logger.info("Connection made with host: " + canpiServer.host + " on port: " + canpiServer.port);
		try {
			socket.pipe(parser);
		}
		catch (e) {
			logger.fatal("Could not pipe bytes to parser")
		}
	});
	socket.on('error', function () { });

	socket.on('close', () => {
		connection = false;
		logger.info("Socket closed - Attempting to establish a connection");
		setTimeout(establishConnection, nconf.get("connectionInterval"));
	});
}

server.listen(expressPort, () => console.log("Listening on port: ", expressPort));
