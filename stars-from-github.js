/**
 * Grab a GitHub user's starred repos and converts to CSV file
 * @github github.com/zmertens/stars-from-github
 *
 */ 
const argv = require('yargs').argv;
const fs = require('fs');
const getStars = require('./get-stars')

let gitHubUser = argv.u;

getStars(gitHubUser).then((result) => {
    const csvFile = `${gitHubUser}-starred.csv`;

    console.debug(`Writing to file: ${csvFile}`)

    fs.writeFile(csvFile, result, (error) => {
        if (error) {
            console.error(error)
        }
    })
}).catch((error) => {
    console.log(error)
})

