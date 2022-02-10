const crawler = require('./include/crawler.js');

const API_DAILY_LIMIT = 23000;
const MAX_WORDS = 50;
const MAX_NODE_FREQUENCY = 4;
const TRAVERSE_ALL = false;



export async function handler(event, context) {

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const mode = event.queryStringParameters.mode || "";
  const letter = event.queryStringParameters.letter || "";
  const ffrom = event.queryStringParameters.ffrom || 0;
  const fto = event.queryStringParameters.fto || 100;
  const apis = event.queryStringParameters.apis || "";

  if (apis) {
    try {
      let data = {results:[]};

      for (let api of apis) {
        let ad = get(api, word, mode, letter, ffrom, fto);

        if (!data.word) {
          data.word = ad.word;
        }
        if (!data.frequency) {
          data.frequency = ad.frequency;
        }
        data.pronunciation = Object.assign(data.pronunciation, ad.pronunciation);
        data.results.push.apply(data.results, ad.results);
      }

      json = JSON.stringify(data);

      if (!json) {
        json = "{}";
      }

      return {
        statusCode: 200,
        body: json,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }

    } catch (err) {
      console.log(err)
      return { statusCode: 500, body: err.toString() }
    }
  }
}

export async function get(api, word, mode, letter, ffrom, fto) {

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
    default:
      crawler.initCrawler(
        api,
        API_DAILY_LIMIT,
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL
      );
      break;
  }

  let data;
  switch (mode) {
    case "most_common_3000_a-e":
      console.log("most_common_3000_a-e");

      data = await crawler.loadCommonWords3000_a_e(word, true);
      break;
    case "most_common_3000_f-p":
      console.log("most_common_3000_f-p");

      data = await crawler.loadCommonWords3000_f_p(word, true);
      break;
    case "most_common_3000_q-z":
      console.log("most_common_3000_q-z");

      data = await crawler.loadCommonWords3000_q_z(word, true);
      break;
    case "most_common_10000_a-c":
      console.log("most_common_10000_a-c");

      data = await crawler.loadCommonWords10000_a_c(word, true);
      break;
    case "most_common_10000_d-h":
      console.log("most_common_10000_d-h");

      data = await crawler.loadCommonWords10000_d_h(word, true);
      break;
    case "most_common_10000_i-o":
      console.log("most_common_10000_i-o");

      data = await crawler.loadCommonWords10000_i_o(word, true);
      break;
    case "most_common_10000_p-r":
      console.log("most_common_10000_p-r");

      data = await crawler.loadCommonWords10000_p_r(word, true);
      break;
    case "most_common_10000_s-z":
      console.log("most_common_10000_s-z");

      data = await crawler.loadCommonWords10000_s_z(word, true);
      break;
    case "top3000":
      console.log("top3000:" + letter);

      data = await crawler.loadCommonWords3000(word, letter, true);
      break;
    case "top10000":
      console.log("top10000:" + letter);

      data = await crawler.loadCommonWords10000(word, letter, true);
      break;
    case "most_common_3000_words":
      console.log("most_common_3000_words");

      data = await crawler.loadCommon3000_words(word, true);
      break;
    case "most_common_10000_words":
      console.log("most_common_10000_words");

      data = await crawler.loadCommon10000_words(word, true);
      break;
    case "all_words":
      console.log("all_words");

      data = await crawler.loadAll_words(word, true);
      break;
    case "my_words":
      console.log("my_words");

      data = await crawler.loadMyWords(word, true);
      break;
    case "words_by_frequency":
      console.log("words_by_frequency:" + ffrom + ".." + fto);

      data = await crawler.wordsByFrequency(word, Number(ffrom), Number(fto), true);
      break;

    case "synonym_cluster":
      console.log("synonym_cluster:" + word);

      data = await crawler.loadCluster(word, true);
      break;
    default:
      data = await crawler.loadSingleWord(word, true);
      break;
  }
}
