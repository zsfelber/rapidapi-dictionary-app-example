
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
  const phrase = event.queryStringParameters.phrase || "";
  const in_words = "true"===event.queryStringParameters.in_words||true===event.queryStringParameters.in_words;
  const in_meanings = "true"===event.queryStringParameters.in_meanings||true===event.queryStringParameters.in_meanings;
  const in_examples = "true"===event.queryStringParameters.in_examples||true===event.queryStringParameters.in_examples;
  const per_word_matching = "true"===event.queryStringParameters.per_word_matching||true===event.queryStringParameters.per_word_matching;
  const all_words = "true"===event.queryStringParameters.all_words||true===event.queryStringParameters.all_words;
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

    return crawler.findPhrases(phrase, in_words, in_meanings, in_examples, per_word_matching, all_words);
  }    
  return service.respond(async () => {

    let result = { words:[], meanings:[], examples:[] };

    if (apis) {

        apis = apis.split("-");
  
        for (let api of apis) {
          let ad = await find(api);

          if (ad) {
            result.words.push.apply(result.words, ad.words);
            result.meanings.push.apply(result.meanings, ad.meanings);
            result.examples.push.apply(result.examples, ad.examples);
          }
        }
        result.words.sort((a,b)=>{
            return a.word.localeCompare(b.word);
        });
        result.meanings.sort((a,b)=>{
            return a.definition.localeCompare(b.definition);
        });
        result.examples.sort((a,b)=>{
            return a.example.localeCompare(b.example);
        });
        if (result.words.length>500) result.words = result.words.slice(0, 500);
        if (result.meanings.length>500) result.meanings = result.meanings.slice(0, 500);
        if (result.examples.length>500) result.examples = result.examples.slice(0, 500);
    }

    return result;
  }, context);

};
