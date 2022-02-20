
const fs = require('fs');

const path = require("path");
const service = require("../../functions/include/service");
//const findInFiles =  require('fast-find-in-files');
const findInFiles =  require('./find-in-files');

const API_DAILY_LIMIT = { wordsapi: 24500, google: 100000000 };
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = Number.MAX_SAFE_INTEGER;
const TRAVERSE_ALL = true;


exports.handler = async function(event, context) {

  let apis = event.queryStringParameters.apis || "";
  let deep = event.queryStringParameters.deep || "";
  let fix = "true"===event.queryStringParameters.fix||true===event.queryStringParameters.fix;
  let fill = "true"===event.queryStringParameters.fill||true===event.queryStringParameters.fill;
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
        await doItFor(api, deep, fix, fill, resolvePath);
      }
    }
    console.log("Done.");
    return {result:true};
  }, context);

}

async function doItFor(api, deep, fix, fill, resolvePath) {

  const crawler = require('../../functions/include/crawler').aCrawler(    api,
    API_DAILY_LIMIT[api],
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL,
    deep
);

  if (deep) deep = Number(deep);

  console.log(api, "crawling and filling word list...");

  let cs=[];

  const totwords = crawler.loadExistingWordsAndFreqs();
  console.log(api, "word count:"+Object.keys(totwords).length);

  if (fix) {
    
    let sorries = await findInFiles.findInFiles(`${crawler.CACHE_DIR_API}/words`, 
        "Sorry pal, you were just rate limited by the upstream server.");
    console.log(api, "sorry-pals:"+sorries.length);

    let cannotrs = await findInFiles.findInFiles(`${crawler.CACHE_DIR_API}/words`, 
        `{"error":"Cannot read properties`);
    console.log(api, "cannot-read-properties-es:"+cannotrs.length);

    let errorstofix = sorries.concat(cannotrs);

    for (let strPath of errorstofix) {
      let word = strPath.filePath.substring(crawler.TWELVE);
      cs.push(word);
      console.log(word);
      delete totwords[word];
    }

  }

  if (fill) {
    let cs0 = Object.keys(totwords); 
    // sort randomly
    let rnd = new Date().getMilliseconds()+Math.random()*100;
    String.prototype.hashCode = function(){
      var hash = 0;
      for (var i = 0; i < this.length; i++) {
          var character = (this.charCodeAt(i)+rnd)&0xff;
          hash = ((hash<<5)-hash)+character;
          hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }
    cs0.sort((a,b)=>{
      return a.hashCode()-b.hashCode();
    });
    
    cs.push.apply(cs, cs0);

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

}
