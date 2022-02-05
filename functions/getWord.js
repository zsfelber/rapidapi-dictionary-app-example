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
  const most_common_10000_a_c = event.queryStringParameters["most_common_10000_a-c"]=="true";
  const most_common_10000_d_h = event.queryStringParameters["most_common_10000_d-h"]=="true";
  const most_common_10000_i_o = event.queryStringParameters["most_common_10000_i-o"]=="true";
  const most_common_10000_p_r = event.queryStringParameters["most_common_10000_p-r"]=="true";
  const most_common_10000_s_z = event.queryStringParameters["most_common_10000_s-z"]=="true";

  try {

    let json;
    if (most_common_3000) {
      console.log("most_common_3000");

      json = await crawler.loadCommonWords3000(false);
    } if (most_common_10000_a_c) {
      console.log("most_common_10000_a-c");

      json = await crawler.loadCommonWords10000_a_c(false);
    } if (most_common_10000_d_h) {
      console.log("most_common_10000_d-h");

      json = await crawler.loadCommonWords10000_d_h(false);
    } if (most_common_10000_i_o) {
      console.log("most_common_10000_i-o");

      json = await crawler.loadCommonWords10000_i_o(false);
    } if (most_common_10000_p_r) {
      console.log("most_common_10000_p-r");

      json = await crawler.loadCommonWords10000_p_r(false);
    } if (most_common_10000_s_z) {
      console.log("most_common_10000_s-z");

      json = await crawler.loadCommonWords10000_s_z(false);
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
