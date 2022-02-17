
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;


function initFor(api, resolvePath) {
    const crawler = require('./crawler.js').aCrawler(resolvePath);
    
    crawler.initCrawler(
        api,
        API_DAILY_LIMIT,
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
    );
    
    crawler.initializeCache();
}

exports.init = function() {
    console.time("app initialized");
    initFor("wordsapi");
    initFor("google");
    console.timeEnd("app initialized");
}