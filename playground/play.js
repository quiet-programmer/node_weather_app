const request = require('request')

const url = "https://icanhazdadjoke.com/"

const fetchData = (callback) => {

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Sorry could not connect to the internet')
        } else if (response.headers.error) {
            callback('Could not get any Jokes at this time')
        } else {
            const jokeData = response.body

            const jokes = jokeData['joke']

            callback(jokes)
        }

    })
}

fetchData((joke) => {
    console.log(joke)
})