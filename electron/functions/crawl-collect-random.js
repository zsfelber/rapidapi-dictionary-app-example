
const fs = require('fs');

const path = require("path");
const service = require("../../functions/include/service");
//const findInFiles =  require('fast-find-in-files');
const findInFiles =  require('./find-in-files');

const API_DAILY_LIMIT = 24500;
const MAX_WORDS = 10000000;
const MAX_NODE_FREQUENCY = Number.MAX_SAFE_INTEGER;
const TRAVERSE_ALL = true;


exports.handler = async function(event, context) {

  const API = "wordsapi";
  let lang = event.queryStringParameters.lang || "";

  const wordprovider = require('../../functions/include/wordprovider').anInstance({LANG:lang,API:api,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL,
    resolvePath:context.resolvePath});
  const apirunner = require("../../functions/include/api-interface").getRunner(wordprovider);

  return service.respond(async () => {

    const word = event.queryStringParameters.word || "";
    if (word==="stop"||word==="dont"||word==="not"||word==="no"||
    word==="disable"||word==="disabled") {
      console.log("crawling disabled...");
      return null;
    }

    console.log("crawling in the background starting from random words...");

    const ws0 = await apirunner.loadAll_words("", true);
    const cs0 = ws0.results;
    console.log("all words:"+cs0.length);

    // descending !!!
    function cmp (a,b) {
      let s1 = fs.statSync(`${wordprovider.CACHE_DIR_API}/words/${a}`);
      let s2 = fs.statSync(`${wordprovider.CACHE_DIR_API}/words/${b}`);
      return s2.mtime-s1.mtime;
    }

    function inf(a) {
      let s1 = fs.statSync(`${wordprovider.CACHE_DIR_API}/words/${a}`);
      return a+":"+s1.mtime.toUTCString();
    }

    cs0.sort(cmp);
    // most recent 10000
    const cs = cs0.slice(0, 10000);

    console.log("now:"+cs.length+" oldest:"+inf(cs[cs.length-1])+" newest:"+inf(cs[0]));

    const cs2=[];
    const cs02 = apirunner.loadCommon10000_words("", true);
    for (let a of cs02.results) {
      if (fs.existsSync(`${wordprovider.CACHE_DIR_API}/words/${a}`)) {
        cs2.push(a);
      }
    }
    cs.push.apply(cs, cs2);
    cs.sort(cmp);

    console.log("with most common 10000:"+cs.length+" oldest:"+inf(cs[cs.length-1])+" newest:"+inf(cs[0]));

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
    
    let sorries = await findInFiles.findInFiles(`${wordprovider.CACHE_DIR_API}/words`, "Sorry pal, you were just rate limited by the upstream server.");
    console.log("sorry-pals:"+sorries.length);

    for (let strPath of sorries) {
      let word = strPath.filePath.substring(wordprovider.TWELVE);
      cs.unshift(word);
      console.log(word);
    }



    const by_def = {};
    const by_w = {};
    let tresult = {
      by_def,
      by_w    };
    tresult.noWords = 0;
    tresult.newWords = 0;

    let promises = [];
    for (let w of cs) {
      let trpromise = apirunner.traverseCluster(tresult, w, false, true);
      promises.push(trpromise);

      if (promises.length >= 10) {
        await Promise.all(promises);
        promises = [];
        if (wordprovider.isApiLimitReached()) {
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
