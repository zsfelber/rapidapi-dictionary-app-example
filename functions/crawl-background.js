import { TheMostCommon3000 } from '../include/common-words';

const axios = require('axios');
const fs = require('fs');
const crawler = require('crawler');
const cw = require('common-words');

const API_DAILY_LIMIT = 25000;
const MAX_WORDS = 10000000;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_SIMILAR = true;


export async function handler(event, context) {
  crawler.initCrawler(
    API_DAILY_LIMIT,
    MAX_WORDS,
    CACHE_CLUSTERS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_SIMILAR
    );

  try {

    console.log("crawling in the background starting from top 3000 English words...");

    let promises = [];
    for (let commonWord in TheMostCommon3000) {
      promises.push(crawler.loadCluster(commonWord, false));
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
