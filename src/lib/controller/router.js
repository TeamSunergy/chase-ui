var express = require('express')
var router = express.Router();
var weather = require('./utils/weather');
var connection = require('./utils/connection')


router.get('/weather/current', weather.getCurrentWeather);
router.get('/weather/forecast', weather.getWeatherForecast);

router.get('/status', connection.getStatus);
router.get('/data', connection.getData);

module.exports = router;
