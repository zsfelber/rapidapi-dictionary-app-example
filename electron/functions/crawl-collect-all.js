
const fs = require('fs');

const path = require("path");
const service = require("../../functions/include/service");
//const fastFindInFiles =  require('fast-find-in-files');

const API_DAILY_LIMIT = 24500;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = Number.MAX_SAFE_INTEGER;
const TRAVERSE_ALL = true;


exports.handler = async function(event, context) {

  let apis = event.queryStringParameters.apis || "";
  let deep = event.queryStringParameters.deep || "";
  const resolvePath = context.resolvePath;

  const word = event.queryStringParameters.word || "";
  if (word==="stop"||word==="dont"||word==="not"||word==="no"||
  word==="disable"||word==="disabled") {
    console.log("crawling disabled...");
    return null;
  }

  return service.respond(async () => {
    if (apis) {

      apis = apis.split("-");
      for (let api of apis) {
        await doItFor(api, deep, resolvePath);
      }
    }
    return {result:true};
  }, context);

}

async function doItFor(api, deep, resolvePath) {

  const crawler = require('../../functions/include/crawler').aCrawler();

  if (deep) deep = Number(deep);
  crawler.initCrawler(
    api,
    api=="wordsapi"?API_DAILY_LIMIT:10000000,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL,
    deep
    );

  console.log(api, "crawling and filling word list...");

  const totwords = crawler.loadCaggleFrequencies();
  console.log(api, "word count:"+Object.keys(totwords).length);
  
  const CACHE_DIR = "cache/"+api;
  //let sorries = await fastFindInFiles.fastFindInFiles(`${CACHE_DIR}/words`, "Sorry pal, you were just rate limited by the upstream server.");
  //console.log(api, "sorry-pals:"+sorries.length);

  const TWELVE = (CACHE_DIR+"/words/").length;
  let cs=[];
  /*for (let strPath of sorries) {
    let word = strPath.filePath.substring(TWELVE);
    cs.push(word);
    console.log(word);
    delete totwords[word];
  }*/

  cs.push.apply(cs, Object.keys(totwords));

  const by_def = {};
  const by_w = {};
  let tresult = {
    by_def,
    by_w    };
  tresult.noWords = 0;
  tresult.newWords = 0;

  let promises = [];
  for (let w of cs) {
    let trpromise;
    if (deep)
      trpromise = crawler.traverseCluster(tresult, w, false, true);
    else
      trpromise = crawler.loadSingleWord(w, true);

    promises.push(trpromise);

    if (promises.length >= 10) {
      await Promise.all(promises);
      promises = [];
      if (crawler.isApiLimitReached()) {
        console.log(api, "API limit reached. STOP whole crawling");
      }
    }
  }

  await Promise.all(promises);
  promises = [];


  if (deep)
    console.log("Completed  Travesred:"+tresult.noWords+" written:"+tresult.newWords);
  else
    console.log(api, "Completed.");

}
