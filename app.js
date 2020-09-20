const yargs = require('yargs');
const weather = require('./weather/weather');

const geocode = require('./geocode/geocode');

const argv = yargs
        .options({
            a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
            }
        })
        .help()
        .alias('help', 'h')
        .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
    if (errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResult)=>{
            if (errorMessage){
                console.log(errorMessage);
            }else {
                console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`);
            }
        })
    }
});      



