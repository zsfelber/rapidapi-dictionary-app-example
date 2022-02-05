
const crawler = require('./include/crawler');

const MAX_WORDS = 10000000;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_SIMILAR = true;


export async function handler(event, context) {
  crawler.initCrawler(
    MAX_WORDS,
    CACHE_CLUSTERS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_SIMILAR
    );

  try {

    console.log("crawling in the background starting from top 10000 English words...");

    let promises = [];
    const cw1 = require('./include/common-words-10000-a-c.js');
    const cw2 = require('./include/common-words-10000-d-h.js');
    const cw3 = require('./include/common-words-10000-i-o.js');
    const cw4 = require('./include/common-words-10000-p-r.js');
    const cw5 = require('./include/common-words-10000-s-z.js');
    const cws = [cw1, cw2, cw3, cw4, cw5]; 

    for (let cw of cws) {
      for (let commonWord in cw.TheMostCommon10000) {
        promises.push(crawler.loadCluster(commonWord, false));
      }
    }
    await Promise.all(promises);

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
