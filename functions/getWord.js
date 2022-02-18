
const API_DAILY_LIMIT = { wordsapi: 25000, google: 100000000 };
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 100000;
const TRAVERSE_ALL = false;
const MAX_LEVEL_MINCL = 2;

const service = require("./include/service");


exports.handler = async function(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const lang = event.queryStringParameters.lang || "";
  const mode = event.queryStringParameters.mode || "";
  const letter = event.queryStringParameters.letter || "";
  const ffrom = event.queryStringParameters.ffrom || 0;
  const fto = event.queryStringParameters.fto || 100;
  let apis = event.queryStringParameters.apis || "";
  const resolvePath = context.resolvePath;

  return service.respond(async () => {
    if (apis) {

      apis = apis.split("-");
      let data = { results: [], pronunciation: {} };

      let stopiterateapis = { stop: 0 };

      for (let api of apis) {
        let ad = await get(api, lang, word, mode, letter, ffrom, fto, resolvePath, stopiterateapis);

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

        if (stopiterateapis.stop) break;
      }

      if (mode === "dictionary" && stopiterateapis.crawler) data = stopiterateapis.crawler.singleWordToDisplay(data);

      return data;
    }
  }, context);
}

async function get(api, lang, word, mode, letter, ffrom, fto, resolvePath, stopiterateapis) {

  const crawler = require('./include/crawler.js').aCrawler(resolvePath);
  stopiterateapis.crawler = crawler;

  switch (mode) {
    case "dictionary":
      crawler.initCrawler(
        api,
        100000,//no limit for occasional 1 or 2 single words
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
      );
      break;
    case "minimal_cluster":
      crawler.initCrawler(
        api,
        API_DAILY_LIMIT[api],
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL,
        MAX_LEVEL_MINCL
      );
      break;
    default:
      crawler.initCrawler(
        api,
        API_DAILY_LIMIT[api],
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
      );
      break;
  }

  let data;
  let forlang;
  console.log(api + " " +mode + ":" + word + ":" + ffrom + ".." + fto+" letter:"+letter);

  switch (mode) {
    case "most_common_3000_a-e":

      data = await crawler.loadCommonWords3000_a_e(word, true);
      break;
    case "most_common_3000_f-p":

      data = await crawler.loadCommonWords3000_f_p(word, true);
      break;
    case "most_common_3000_q-z":

      data = await crawler.loadCommonWords3000_q_z(word, true);
      break;
    case "most_common_10000_a-c":

      data = await crawler.loadCommonWords10000_a_c(word, true);
      break;
    case "most_common_10000_d-h":

      data = await crawler.loadCommonWords10000_d_h(word, true);
      break;
    case "most_common_10000_i-o":

      data = await crawler.loadCommonWords10000_i_o(word, true);
      break;
    case "most_common_10000_p-r":

      data = await crawler.loadCommonWords10000_p_r(word, true);
      break;
    case "most_common_10000_s-z":

      data = await crawler.loadCommonWords10000_s_z(word, true);
      break;
    case "top3000":

      data = await crawler.loadCommonWords3000(word, letter, true);
      break;
    case "top10000":

      data = await crawler.loadCommonWords10000(word, letter, true);
      break;
    case "most_common_3000_words":
      stopiterateapis.stop = 1;

      data = await crawler.loadCommon3000_words(word, true);
      break;
    case "most_common_10000_words":
      stopiterateapis.stop = 1;

      data = await crawler.loadCommon10000_words(word, true);
      break;
    case "all_words":
      stopiterateapis.stop = 1;

      data = await crawler.loadAll_words(word, true);
      break;
    case "my_words":
      stopiterateapis.stop = 1;

      data = await crawler.loadMyWords(word, letter, true);
      break;
    case "my_word_cls":

      data = await crawler.loadMyWordCls(word, letter, true);
      break;
    case "words_by_frequency":
      stopiterateapis.stop = 1;

      data = await crawler.wordsByFrequency(word, Number(ffrom), Number(fto), true);
      break;

    case "minimal_cluster":
      forlang = crawler.getForLang(lang, word);

    case "synonym_cluster":

      // TODO : it depends on English ::
      //if (!lang || lang == "en")
      data = await crawler.loadCluster(word, true);
      data.lang = lang;
      data.forlang = forlang;
      break;
    default:
      data = await crawler.loadSingleWord(word, true);
      break;
  }
  return data;
}
