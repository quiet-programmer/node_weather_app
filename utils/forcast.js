const request = require('request')

const key = ""

const forcast = (latitude , longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${encodeURIComponent(latitude, longitude)}&days=1`

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect', undefined)
        } else if(response.body.error) {
            callback('Unable to find Locations', undefined)
        } else {
            const data = response.body
            const currentData = data.current
            // const locationData = data.location
            callback(undefined, `It is currently ${currentData['temp_c']} degress out. There is ${currentData['precip_mm']}% chance of Rain`)
        }
    })
}

module.exports = forcast