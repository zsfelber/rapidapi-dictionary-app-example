
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;


function initFor(lang, api, resolvePath) {
    const wordprovider = require('./wordprovider.js').anInstance({LANG:lang,API:api,
        API_DAILY_LIMIT,
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
        , resolvePath});
    
    wordprovider.initializeCache();
}

exports.init = function() {
    console.time("app initialized");
    initFor("en","wordsapi");
    initFor("en","google");
    initFor("de","google");
    console.timeEnd("app initialized");
}