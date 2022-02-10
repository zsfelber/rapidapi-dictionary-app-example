
const crawler = require('./include/crawler').aCrawler();

const API_DAILY_LIMIT = 20000;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_ALL = true;


export async function handler(event, context) {
  crawler.initCrawler(
    "wordsapi",
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
    );

  try {

    console.log("generate indices...");

    await crawler.generateIndexes();

    return {
      statusCode: 200,
      body: "{}",
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }

  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}
