// Grab any GitHub user's stars

const request = require('request');
const yargs = require('yargs');


const gitHubApi = 'https://api.github.com/users/';

let gitHubUser = yargs.args(arg[0]);

request(`${gitHubApi}/${gitHubUser}/starred`, function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

// let userStarred = this.request.get(`${gitHubApi}/${gitHubUser}/starred`);


// // Convert the return object into a CSV file
// let starredList = [];

// for (let i = 0; i < userStarred.length; i += 1) {
// 	console.log(userStarred[i]);
//	starredList.push(userStarred[i].url + ', ' + userStarred[i].data + '\n');
// }



