// Grab a GitHub user's starred repos and converts to CSV file

const http = require('https')
const argv = require('yargs').argv;
const fs = require('fs');
const superagent = require('superagent')

let gitHubUser = argv.u;
let gitHubApi = `https://api.github.com/users/${gitHubUser}/starred`;
const csvFile = `${gitHubUser}-starred.csv`;
console.log(`api call: ${gitHubApi}\r\nWriting to file: ${csvFile}`);

// First: Make the GET request to GitHub API
superagent.get(gitHubApi)
  .set('User-Agent', 'request')
  .end((err, res) => {
    if (err) { 
      return console.log(err);
    }

    // console.log(res.body[0])
    let responseCsv = 'HTML URL, Stargazers Count\r\n'
    for (star = 0; star < res.body.length; star += 1) {
      console.log(`res.body[${star}]: ${JSON.stringify(res.body[star].stargazers_count)}`)
      responseCsv += JSON.stringify(res.body[star].html_url) + ', ' + res.body[star].stargazers_count + '\r\n'
    }

    fs.writeFile(csvFile, responseCsv, (error) => {
      if (error) {
        console.error(error)
      }
    })
  });

