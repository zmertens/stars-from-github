// Grab a GitHub user's starred repos and converts to CSV file

const request = require('request');
const argv = require('yargs').argv;
const fs = require('fs');

let gitHubUser = argv.u;
let gitHubApi = `https://api.github.com/users/${gitHubUser}/starred`;
const csvFile = `${gitHubUser}-starred.csv`;
console.log(`api call: ${gitHubApi}\r\nWriting to file: ${csvFile}`);

let requestOptions = {
  url: gitHubApi,
  headers: { 'User-Agent': 'request' }
};

// First: Make the GET request to GitHub API
let responseCsv = '';
let apiCallback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    let info = JSON.parse(body);
    // console.log(info);
    for (let count of info) {
      responseCsv += count.git_url + ', ' + count.stargazers_count + '\r\n';
      console.log(responseCsv);
    }
  } else {
    console.error(error);
  }
}

request(requestOptions, apiCallback)
  .pipe(fs.createWriteStream(csvFile, responseCsv));

