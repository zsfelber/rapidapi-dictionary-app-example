
const path = require("path");
const service = require("../../functions/include/service");

const API_DAILY_LIMIT = 25000;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_ALL = true;


exports.handler = async function(event, context) {
  const crawler = require('../../functions/include/crawler').aCrawler(context.resolvePath);
  crawler.initCrawler(
    "wordsapi",
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
    );

  return service.respond(async () => {

    console.log("generate indices...");

    await crawler.generateIndexes();

    return {result:true};

  }, context);
}
