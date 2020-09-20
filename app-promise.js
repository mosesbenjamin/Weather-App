const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(`${argv.address}`);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
    .then((response)=>{
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('Unable to find that address');
        } else {
            console.log('Something went wrong');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://api.forecast.io/forecast/${lat},${lng}`;
        return axios.get(weatherURL)
            .then((response)=>{
                var temperature = response.data.currently.temperature;
                var apparentTemperature = response.data.currently.apparentTemperature;
                console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
            });
    })
    .catch((e)=>{
        if (e.code === 'ENOTFOUND'){
            console.log('Unable to connect to api service.')
        }else {
            console.log(e.message);
        }
    });


