
let request = require("request"),
    nconf = require("nconf"),
    log4js = require("log4js"),
    logger = log4js.getLogger('chase-ui')

let baseUrl = nconf.get("OpenWeatherMap:baseUrl"),
    logBasePath = "weather",
    apiKey = nconf.get("weather-api");


//units - imperial, metric 
//long, lat - string
//lat, long, units
exports.getCurrentWeather = (req, res) => {
    logPrefix = `[${logBasePath}].getCurrentWeather`;
    let url = `${baseUrl}weather?lat=${req.query.lat}&lon=${req.query.lon}&units=${req.query.units}&appid=${apiKey}`;
    console.log(req);
    console.log(url);
    return request(url, function (err, response, body) {
        if (err) {
            logger.error(`Could not retreive current weather: ${err.description}`)
        }
        else {
            return res.status(200)
			.set({ "Content-Type": "application/json" })
			.send(body)
        }
    });
}

//units - imperial, metric 
//long, lat - string
//lat, long, units
exports.getWeatherForecast = (req, res) => {
    logPrefix = `[${logBasePath}].getCurrentWeather`;
    let url = `${baseUrl}forecast?lat=${req.query.lat}&lon=${req.query.lon}&units=${req.query.units}&appid=${apiKey}`;
    return request(url, function (err, response, body) {
        if (err) {
            logger.error(`Could not retreive current weather: ${err.description}`)
        }
        else {
            return res.status(200)
			.set({ "Content-Type": "application/json" })
			.send(body)
        }
    });
}
