const request = require('request');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`,
    json: true
}, (error, response, body)=>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].gemoetry.location.lat}`);
    console.log(`Longitude: ${body.results[0].gemoetry.location.lng}`);
});