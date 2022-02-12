
const crawler = require('./include/crawler').aCrawler();
const service = require("./include/service");

const API_DAILY_LIMIT = 24500;
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

  return service.respond(async () => {

    console.log("crawling in the background starting from random words...");

    const ws0 = await crawler.loadAll_words("", true);
    const cs = ws0.results;
    console.log("all words:"+cs.length);

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
    for (let commonWord of cs) {
      let trpromise = crawler.traverseCluster(tresult, commonWord, false, true);
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
