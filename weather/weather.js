const request = require('request');

var getWeather = (lat, lng, callback)=>{
    request({
        url: `https://api.forecast.io/forecast/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                actualTemperature: body.currently.apparentTemperature
            })
        }else {
            callback('Unable to fetch weather');
        }
    })
}

module.exports.getWeather = getWeather;