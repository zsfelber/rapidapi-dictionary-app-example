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
  const synonym_cluster = event.queryStringParameters.synonym_cluster=="true";
  const most_common_3000 = event.queryStringParameters.most_common_3000=="true";

  try {

    let json;
    if (most_common_3000) {
      console.log("most_common_3000");

      json = await crawler.loadCommonWords3000(false);
    } if (most_common_10000a_c) {
      console.log("most_common_10000a_c");

      json = await crawler.loadCommonWords10000a_c(false);
    } if (most_common_10000d_h) {
      console.log("most_common_10000d_h");

      json = await crawler.loadCommonWords10000d_h(false);
    } if (most_common_10000i_o) {
      console.log("most_common_10000i_o");

      json = await crawler.loadCommonWords10000i_o(false);
    } if (most_common_10000p_r) {
      console.log("most_common_10000p_r");

      json = await crawler.loadCommonWords10000p_r(false);
    } if (most_common_10000s_z) {
      console.log("most_common_10000s_z");

      json = await crawler.loadCommonWords10000s_z(false);
    } else if (synonym_cluster) {
      console.log("synonym_cluster:"+word);

      json = await crawler.loadCluster(word, false);
    } else {

      json = await crawler.loadSingleWord(word, false);
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
