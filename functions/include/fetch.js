const fetch = require('node-fetch');
const https = require('https');
const httpsAgent = new https.Agent({ keepAlive: true });
const errors = require('./errors.js');


export async function fetchJson(url, headers) {

    let f = await fetch;
    f = f.default;
    let response = await f(url, {
        agent: httpsAgent,
        headers: new fetch.Headers(headers)
    });

    if (response.status === 404) { throw new errors.NoDefinitionsFound({ word, language, reason: 'Website returned 404.' }); }

    if (response.status === 429) { throw new errors.RateLimitError(); }

    if (response.status !== 200) { throw new errors.NoDefinitionsFound({ word, language, reason: 'Threw non 200 status code.' }); }

    let body = await response.text(),
        data = JSON.parse(body);
        //data = JSON.parse(body.substring(4));

    if (single_results.length === 0) { throw new errors.NoDefinitionsFound({ word, language }); }

    if (error === 'TERM_NOT_FOUND_ERROR') { throw new errors.NoDefinitionsFound({ word, language }); }

    if (error) { throw new errors.UnexpectedError({ error }); }

    return single_results;

}
