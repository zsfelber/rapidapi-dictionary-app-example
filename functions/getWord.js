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
  const fto = event.queryStringParameters.fto  || 100;

  try {

    switch (mode) {
      case "dictionary":
        crawler.initCrawler(
          100000,//no limit for occasional 1 or 2 single words
          MAX_WORDS,
          MAX_NODE_FREQUENCY,
          TRAVERSE_ALL
        );
        break;
      default:
        crawler.initCrawler(
          API_DAILY_LIMIT,
          MAX_WORDS,
          MAX_NODE_FREQUENCY,
          TRAVERSE_ALL
        );
        break;
    }
  
    let json;
    switch (mode) {
    case "most_common_3000_a-e":
      console.log("most_common_3000_a-e");

      json = await crawler.loadCommonWords3000_a_e(word, false);
      break;
    case "most_common_3000_f-p":
      console.log("most_common_3000_f-p");

      json = await crawler.loadCommonWords3000_f_p(word, false);
      break;
    case "most_common_3000_q-z":
      console.log("most_common_3000_q-z");

      json = await crawler.loadCommonWords3000_q_z(word, false);
      break;
    case "most_common_10000_a-c":
      console.log("most_common_10000_a-c");

      json = await crawler.loadCommonWords10000_a_c(word, false);
      break;
    case "most_common_10000_d-h":
      console.log("most_common_10000_d-h");

      json = await crawler.loadCommonWords10000_d_h(word, false);
      break;
    case "most_common_10000_i-o":
      console.log("most_common_10000_i-o");

      json = await crawler.loadCommonWords10000_i_o(word, false);
      break;
    case "most_common_10000_p-r":
      console.log("most_common_10000_p-r");

      json = await crawler.loadCommonWords10000_p_r(word, false);
      break;
    case "most_common_10000_s-z":
      console.log("most_common_10000_s-z");

      json = await crawler.loadCommonWords10000_s_z(word, false);
      break;
    case "top3000":
      console.log("top3000:"+letter);

      json = await crawler.loadCommonWords3000(word, letter, false);
      break;
    case "top10000":
      console.log("top10000:"+letter);

      json = await crawler.loadCommonWords10000(word, letter, false);
      break;
    case "most_common_3000_words":
      console.log("most_common_3000_words");

      json = await crawler.loadCommon3000_words(word, false);
      break;
    case "most_common_10000_words":
      console.log("most_common_10000_words");

      json = await crawler.loadCommon10000_words(word, false);
      break;
    case "all_words":
      console.log("all_words");

      json = await crawler.loadAll_words(word, false);
      break;
    case "my_words":
      console.log("my_words");

      json = await crawler.loadMyWords(word, false);
      break;
    case "words_by_frequency":
      console.log("words_by_frequency:"+ffrom+".."+fto);

      json = await crawler.wordsByFrequency(word, Number(ffrom), Number(fto), false);
      break;

    case "synonym_cluster":
      console.log("synonym_cluster:"+word);

      json = await crawler.loadCluster(word, false);
      break;
    default:
      json = await crawler.loadSingleWord(word, false);
      break;
    }
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
