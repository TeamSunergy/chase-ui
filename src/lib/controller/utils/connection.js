let nconf = require("nconf"),
	log4js = require("log4js"),
	logger = log4js.getLogger('chase-ui');

var connection = require('../../../server');

exports.getStatus = (req, res) => {
	message = connection.connected ? "CHASE is runnning" : "CHASE is NOT running";
	return res.status(200)
		.set({ "Content-Type": "application/json" })
		.send(JSON.stringify({ "status": connection.connected, "message": message, "timeStamp": new Date().toISOString() }))
}

exports.getData = (req, res) => {
	return res.status(200)
		.set({ "Content-Type": "application/json" })
		.send(JSON.stringify(connection.data));
};
