
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const service = require("./include/service");
const atob = require("atob");


exports.handler = async function (event, context) {


  //   extract the word query parameter from the HTTP request
  const resolvePath = context.resolvePath;
  const word = event.queryStringParameters.word || "";
  const crawler = require('./include/crawler.js').aCrawler(api,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
,resolvePath);

  return service.respond(async () => {
    let root = "../data/dict/stardict-OxfordCollocationsDictionary-2.4.2/";
    let html = crawler.findCollocation(word);

    let result = {
      root, html
    };
    if (!html) {
      result.error = "notfound";
    }
    return result;
  }, context);

};