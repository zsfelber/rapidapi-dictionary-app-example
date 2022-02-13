const fs = require('fs');

const crawler = require('./include/crawler').aCrawler();
const service = require("./include/service");

const API_DAILY_LIMIT = 24500;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_ALL = true;


export async function handler(event, context) {

  const API = "wordsapi";
  crawler.initCrawler(
    API,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL
    );

  return service.respond(async () => {

    const word = event.queryStringParameters.word || "";
    if (word==="stop"||word==="dont"||word==="not"||word==="no"||
    word==="disable"||word==="disabled") {
      console.log("crawling disabled...");
      return null;
    }

    console.log("crawling in the background starting from random words...");

    const ws0 = await crawler.loadAll_words("", true);
    const cs0 = ws0.results;
    console.log("all words:"+cs0.length);

    const CACHE_DIR = "cache/"+API;

    cs0.sort((a,b)=>{
      let s1 = fs.statSync(`${CACHE_DIR}/words/${a}`);
      let s2 = fs.statSync(`${CACHE_DIR}/words/${b}`);
      return s1.mtime-s2.mtime;
    });
    function inf(a) {
      let s1 = fs.statSync(`${CACHE_DIR}/words/${a}`);
      return a+":"+s1.mtime.toUTCString();
    }

    // most recent 10000
    const cs = cs0.slice(0, 10000);

    console.log("now:"+cs.length+" oldest:"+inf(cs[cs.length-1])+" newest:"+inf(cs[0]));

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
    cs.sort((a,b)=>{
      return a.hashCode()-b.hashCode();
    });

    const by_def = {};
    const by_w = {};
    let tresult = {
      by_def,
      by_w    };
    tresult.noWords = 0;
    tresult.newWords = 0;

    let promises = [];
    for (let w of cs) {
      let trpromise = crawler.traverseCluster(tresult, w, false, true);
      promises.push(trpromise);

      if (promises.length >= 10) {
        await Promise.all(promises);
        promises = [];
        if (crawler.isApiLimitReached()) {
          console.log("API limit reached. STOP whole crawling");

        }
      }
    }

    await Promise.all(promises);
    promises = [];


    console.log("Completed  Travesred:"+tresult.noWords+" written:"+tresult.newWords);
    return {result:true};
  }, context);

}
