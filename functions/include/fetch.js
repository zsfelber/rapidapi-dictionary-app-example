const fetch = require('node-fetch');
const https = require('https');
const httpsAgent = new https.Agent({ keepAlive: true });
const errors = require('./errors.js');


exports.fetchTextFromHttpUrl = async function(url, headers, info) {

    let f = await fetch;
    f = f.default;
    let response = await f(url, {
        agent: httpsAgent,
        headers: new fetch.Headers(headers)
    });

    if (response.status === 404) { throw new errors.NoDefinitionsFound({ info, reason: 'Website returned 404.' }); }

    if (response.status === 429) { throw new errors.RateLimitError(); }

    if (response.status !== 200) { throw new errors.NoDefinitionsFound({ info, reason: 'Threw non 200 status code.' }); }

    let body = await response.text();

    return body;

}
