const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=41db79f8a89299dfaad8474b4e12be27&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ", It is currently " + body.current.temperature + " degrees out. It is feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast