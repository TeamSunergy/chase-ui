
let request = require("request"),
    nconf = require("nconf"),
    log4js = require("log4js"),
    logger = log4js.getLogger('chase-ui')

let baseUrl = `https://api.openweathermap.org/data/2.5/`;
let logBasePath = "weather"
let apiKey = nconf.get("weather-api");

module.exports = {
    getCurrentWeather: getCurrentWeather,
}

function getCurrentWeatherByCity(city, callback){
    logPrefix = `[${logBasePath}].getCurrentWeather`;
    let url = `${baseUrl}q=${city}&appid=${apiKey}`;
    logger.debug(`${logPrefix} Get current weather url ${url}`)
    return request(url, function(err, res, body){
        if(err){
            logger.error(`Could not retreive current weather: ${err.description}`)
            callback(new Error(err.description));
        }
        else if (res && body.cod == 401){
            logger.error(`${logPrefix}API key bad ${body.message}`);
            callback(new Error(err.description))
        }
        else{
            console.log(body);
            callback(null, body)
        }
    })
}