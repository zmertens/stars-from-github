
const superagent = require('superagent')

const getStars = async (username) => {
    
    return new Promise((resolve, reject) => {
        // Make the GET request to GitHub API
        const gitHubApi = `https://api.github.com/users/${username}/starred`;

        let responseCsv = 'HTML URL, Stargazers Count\r\n'

        superagent.get(gitHubApi)
            .set('User-Agent', 'request')
            .end((err, res) => {
                if (err) { 
                    return reject(err)
                }

                for (star = 0; star < res.body.length; star += 1) {
                    // console.debug(`res.body[${star}]: ${JSON.stringify(res.body[star].stargazers_count)}`)
                    responseCsv += res.body[star].html_url + ', ' + res.body[star].stargazers_count + '\r\n'
                }

                resolve(responseCsv)
            });
    })
}

module.exports = getStars