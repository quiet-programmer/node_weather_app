const geoCode = require('./utils/geocode.js')
const forcast = require('./utils/forcast.js')

const log = console.log

const address = process.argv[2]

geoCode(address, (error, data) => {

    if (error) {
        return log(error)
    } else if(address === undefined) {
        return log('Please provide a location')
    }

    forcast(data.latitude, data.longitude, (error, forcastData) => {
        if (error) {
            return log(error)
        }

        log(data.location)
        log(forcastData)
    })

})
