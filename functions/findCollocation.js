
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const fs = require("fs");
const service = require("./include/service");
const atob = require("atob");
const { Console } = require("console");


exports.handler = async function (event, context) {


  //   extract the word query parameter from the HTTP request
  const resolvePath = context.resolvePath;
  const word = event.queryStringParameters.word || "";
  const crawler = require('./include/crawler.js').aCrawler(resolvePath);

  return service.respond(async () => {
    let result = crawler.findCollocation(word);
    return result;
  }, context);

};