const request = require('request');

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCw_LKWmXh6Lc9ELHlgrzSzRv6jVrfEwhs`,
    json: true
}, (error, response, body)=>{
    console.log(body);
});