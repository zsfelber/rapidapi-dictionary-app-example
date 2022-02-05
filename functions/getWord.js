const crawler = require('./include/crawler.js');

const MAX_WORDS = 50;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 4;
const TRAVERSE_SIMILAR = false;



export async function handler(event, context) {
  crawler.initCrawler(
    MAX_WORDS,
    CACHE_CLUSTERS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_SIMILAR
    );

  //   extract the word query parameter from the HTTP request
  const word = event.queryStringParameters.word || "";
  const mode = event.queryStringParameters.mode || "";

  try {

    let json;
    switch (mode) {
    case "most_common_3000":
      console.log("most_common_3000");

      json = await crawler.loadCommonWords3000(false);
      break;
    case "most_common_10000_a-c":
      console.log("most_common_10000_a-c");

      json = await crawler.loadCommonWords10000_a_c(false);
      break;
    case "most_common_10000_d-h":
      console.log("most_common_10000_d-h");

      json = await crawler.loadCommonWords10000_d_h(false);
      break;
    case "most_common_10000_i-o":
      console.log("most_common_10000_i-o");

      json = await crawler.loadCommonWords10000_i_o(false);
      break;
    case "most_common_10000_p-r":
      console.log("most_common_10000_p-r");

      json = await crawler.loadCommonWords10000_p_r(false);
      break;
    case "most_common_10000_s-z":
      console.log("most_common_10000_s-z");

      json = await crawler.loadCommonWords10000_s_z(false);
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
