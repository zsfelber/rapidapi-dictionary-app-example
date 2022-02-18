
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
  const in_words = "true"===event.queryStringParameters.in_words||true===event.queryStringParameters.in_words;
  const in_meanings = "true"===event.queryStringParameters.in_meanings||true===event.queryStringParameters.in_meanings;
  const in_examples = "true"===event.queryStringParameters.in_examples||true===event.queryStringParameters.in_examples;
  const crawler = require('./include/crawler.js').aCrawler(resolvePath);
  let apis = event.queryStringParameters.apis || "";


  async function find(api) {

    crawler.initCrawler(
        api,
        100000,//no limit for occasional 1 or 2 single words
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
      );

    return crawler.find(word, in_words, in_meanings, in_examples);
  }    
  return service.respond(async () => {

    if (apis) {

        apis = apis.split("-");
        let data = { results: [], pronunciation: {} };
  
        for (let api of apis) {
          let ad = await find(api);

          if (ad) {

            if (!data.word) {
              data.word = ad.word;
            }
            if (!data.noWords) {
              data.noWords = ad.noWords;
            }
            if (!data.noDefinitions) {
              data.noDefinitions = ad.noDefinitions;
            }
  
            if (!data.frequency) {
              data.frequency = ad.frequency;
            }
            data.pronunciation = Object.assign(data.pronunciation, ad.pronunciation);
            data.results.push.apply(data.results, ad.results);
          }
        }
    }

    let result = {
      root, html
    };
    if (!html) {
      result.error = "notfound";
    }
    return result;
  }, context);

};
