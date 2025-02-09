
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const service = require("./include/service");


exports.handler = async function(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const mode = event.queryStringParameters.mode || "";
  const letter = event.queryStringParameters.letter || "";
  const ffrom = event.queryStringParameters.ffrom || 0;
  const fto = event.queryStringParameters.fto || 100;
  let lang = event.queryStringParameters.lang || "";
  let apis = event.queryStringParameters.apis || "";
  const resolvePath = context.resolvePath;

  return service.respond(async () => {
    if (apis) {

      apis = apis.split("-");
      let data = { results: [], pronunciation: {} };

      let stopiterateapis = { stop: 0 };

      for (let api of apis) {
        let ad = await get(lang, api, word, mode, letter, ffrom, fto, resolvePath, stopiterateapis);

        if (ad) {

          if (!data.word) {
            data.word = ad.word;
          }
          if (!data.forlang) {
            data.forlang = ad.forlang;
          }
          if (!data.colloc) {
            data.colloc = ad.colloc;
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

        if (stopiterateapis.stop) break;
      }

      if (mode === "dictionary" && stopiterateapis.wordprovider) data = stopiterateapis.apirunner.singleWordToDisplay(data);

      return data;
    }
  }, context);
}

async function get(lang, api, word, mode, letter, ffrom, fto, resolvePath, stopiterateapis) {


  switch (mode) {
    case "dictionary":
      wordprovider = require('./include/wordprovider.js').anInstance({
        LANG:lang,API:api,
        API_DAILY_LIMIT:100000,//no limit for occasional 1 or 2 single words
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL,
        resolvePath
      });
      break;
    case "minimal_cluster":
      wordprovider = require('./include/wordprovider.js').anInstance({
        LANG:lang,API:api,
        API_DAILY_LIMIT:API_DAILY_LIMIT[api],
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL,
        MAX_LEVEL_MINCL,
        resolvePath
      });
      break;
    default:
      wordprovider = require('./include/wordprovider.js').anInstance({
        LANG:lang,API:api,
        API_DAILY_LIMIT:API_DAILY_LIMIT[api],
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL,
        resolvePath
      });
      break;
  }

  const apirunner = require("./include/api-interface").getRunner(wordprovider);
  stopiterateapis.wordprovider = wordprovider;
  stopiterateapis.apirunner = apirunner;

  let data;
  let forlang, colloc;
  console.log(api + " " +mode + ":" + word + ":" + ffrom + ".." + fto+" letter:"+letter);

  switch (mode) {
    case "most_common_3000_words":
      stopiterateapis.stop = 1;

      data = await apirunner.loadCommon3000_words(word, true);
      break;
    case "most_common_5000_words":
      stopiterateapis.stop = 1;

      data = await apirunner.loadCommon5000_words(word, true);
      break;
    case "most_common_10000_words":
      stopiterateapis.stop = 1;

      data = await apirunner.loadCommon10000_words(word, true);
      break;
    case "all_words":
      stopiterateapis.stop = 1;

      data = await apirunner.loadAll_words(word, true);
      break;
    case "my_words":
      stopiterateapis.stop = 1;

      data = await apirunner.loadMyWords(word, letter, true);
      break;
    case "words_by_frequency":
      stopiterateapis.stop = 1;

      data = await apirunner.wordsByFrequency(word, Number(ffrom), Number(fto), true);
      break;

    case "minimal_cluster":
      forlang = apirunner.getForLang(lang, word);
      colloc = apirunner.findCollocation(word);

    case "synonym_cluster":

      // TODO : it depends on English ::
      //if (!lang || lang == "en")
      data = await apirunner.loadCluster(word, true);
      data.lang = lang;
      data.forlang = forlang;
      data.colloc = colloc;
      break;
    default:
      data = await apirunner.loadSingleWord(word, true);
      break;
  }
  return data;
}
