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

      json = await crawler.loadCommonWords();
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
