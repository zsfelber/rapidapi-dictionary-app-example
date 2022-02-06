const crawler = require('./include/crawler.js');

const MAX_WORDS = 50;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 4;
const TRAVERSE_ALL = false;



export async function handler(event, context) {
  crawler.initCrawler(
    MAX_WORDS,
    CACHE_CLUSTERS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
    );

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const mode = event.queryStringParameters.mode || "";

  try {

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
