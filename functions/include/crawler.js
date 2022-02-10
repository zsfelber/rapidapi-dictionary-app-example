
const fs = require('fs');
const finder = require('./finder.js');

const API_LIMIT_EXCEPTION = {
  apiLimitException:1
};

const TURNING_TIME_GMT = [20,55];
const MAX_PARALLEL = 20;
let CACHE_DIR;
let API_DAILY_LIMIT;
let MAX_WORDS;
let MAX_NODE_FREQUENCY;
let TRAVERSE_ALL;
let download, curtime, turntime;
let TWELVE;

let cacheInitializerCommon;
let cacheIsInitialized = false;
let pendingParallelRequests = 0;
let admittedParallelRequests = 0;
let totalWordsLastDay = 0;
let cacheInitIsError = false;

let pendingObjects = {

};

function timeoutAsPromise(millis) {
  return new Promise((a,r)=>{
    setTimeout(a, millis);
  });
}

async function parallelBottleneck() {
  pendingParallelRequests++;
  if (!(pendingParallelRequests%1000)) {
    console.log("++pendingParallelRequests:"+pendingParallelRequests+" admittedParallelRequests:"+admittedParallelRequests);
  }
  while (admittedParallelRequests >= MAX_PARALLEL) {
    await timeoutAsPromise(20);
  }
  admittedParallelRequests++;
}

async function remoteInitBottleneck() {

  await parallelBottleneck();

  if (!cacheIsInitialized) {
    if (!cacheInitializerCommon) {
      cacheInitializerCommon = finder.findFiles(`${CACHE_DIR}/words`, turntime);
      totalWordsLastDay = await cacheInitializerCommon;
      cacheIsInitialized = true;
      console.log("remoteInitBottleneck  turntime:"+turntime.toUTCString()+"  totalWordsLastDay:"+totalWordsLastDay+" errors:"+finder.errors+" pendingParallelRequests:"+pendingParallelRequests+" admittedParallelRequests:"+admittedParallelRequests);
    } else {
      await cacheInitializerCommon;
    }
  }

  if (isApiLimitReached()) {
    if (!cacheInitIsError) {
      console.error("Could not proxy more request to API file/single  totalWordsLastDay+"+pendingParallelRequests+" >= API_DAILY_LIMIT :  "+(totalWordsLastDay+pendingParallelRequests)+" >= "+API_DAILY_LIMIT+"\n");
    }
    cacheInitIsError = true;
    return false;
  } else {
    totalWordsLastDay++;
    return true;
  }
}

export function isApiLimitReached(pendingBeforeRequest=0) {
  if (cacheIsInitialized) {
    if (cacheInitializerCommon) {
      return (totalWordsLastDay+pendingParallelRequests+pendingBeforeRequest) >= API_DAILY_LIMIT;
    } else {
      return false;
    }
  } else {
    return (pendingParallelRequests+pendingBeforeRequest) >= API_DAILY_LIMIT;
  }
}

export async function initCrawler(
  _API,
  _API_DAILY_LIMIT,
  _MAX_WORDS,
  _MAX_NODE_FREQUENCY,
  _TRAVERSE_ALL
  ) {

  CACHE_DIR = "cache/"+_API;
  API_DAILY_LIMIT = _API_DAILY_LIMIT;
  MAX_WORDS = _MAX_WORDS;
  MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
  TRAVERSE_ALL = _TRAVERSE_ALL;
  TWELVE = (CACHE_DIR+"/words/").length;

  switch (_API) {
    case "google":
      download = require('./googletransapi/google_dict').googleDictionary;
      break;
    case "wordsapi":
      download = require('./wordsapi/wordapi_dict').wordsApiDictionary;
      break;
    default:
      throw "API is not supported : "+_API;
  }
  
  
  if (!fs.existsSync(`${CACHE_DIR}/words`)){
    fs.mkdirSync(`${CACHE_DIR}/words`, { recursive: true });
  }
  if (!fs.existsSync(`${CACHE_DIR}/clusters`)){
    fs.mkdirSync(`${CACHE_DIR}/clusters`);
  }
  if (!fs.existsSync(`cache/index`)){
    fs.mkdirSync(`cache/index`);
  }

  curtime = new Date();
  turntime = Date.UTC(curtime.getUTCFullYear(),
          curtime.getUTCMonth(),curtime.getUTCDate(),
          TURNING_TIME_GMT[0],TURNING_TIME_GMT[1]);
  // 86400000 milliseconds (24 hours)
  if (curtime < turntime) {
    turntime = new Date(turntime - 86400000);
  } else {
    turntime = new Date(turntime);
  }

  console.log("initCrawler  curtime:"+curtime.toUTCString()+"  turntime:"+turntime.toUTCString());
}

export function singleWordToDisplay(data) {

  // create new array to push data to
  let results = [];
  let result = {
    word:data.word,
    frequency:data.frequency,
    pronunciation:data.pronunciation,
    results, etc:""
  };

  if (data.results) data.results.map(def => {
    let definitionArray = [];
    let definition = {
      partOfSpeech:def.partOfSpeech,
      properties:definitionArray
    };

    // creates array of keys in object
    const skeys = [];
    const therest = Object.assign({}, def);
    function addif(skeys, key) {
      if (def[key]) skeys.push(key);
      delete therest[key];
    }
    addif(skeys, "word");
    addif(skeys, "pronunciation");
    addif(skeys, "partOfSpeech");
    addif(skeys, "definition");
    addif(skeys, "synonyms");
    addif(skeys, "similarTo");
    addif(skeys, "antonyms");

    delete therest["examples"];

    const more = Object.keys(therest);
    more.sort();
    skeys.push.apply(skeys, more);

    const skeys2 = [];
    addif(skeys2, "examples");
    skeys.push.apply(skeys, skeys2);


    skeys.map(key => {

      // builds regex that looks for capital letters
      // The response parameters are in camelCase, so we need to ID
      // the capital letters and add spaces instead so the 
      // front end can easily display the parameter labels
      const regex = /(?=[A-Z])/;

      // creates presentable label
      const label = key.split(regex).join(' ').toLowerCase();

      // grabs the value for the parameter from the
      // definition object in response
      const value = def[key];

      // constructs new object to send to frontend
      let newObj = {
        label,
        value,
        isString: typeof value === 'string' ? true : false
      };

      definitionArray.push(newObj);
    })

    results.push(definition);
  });

  return result;
}

export async function loadSingleWord(word, asobject, cachedonly=false) {

  let fileword = word.replace(/[.,/']/g, "$").toLowerCase();
  const wfpath = `${CACHE_DIR}/words/${fileword}`;

  let data;

  if (fs.existsSync(wfpath)) {
  
    //console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();
    try {
      data = JSON.parse(ijson);

  } catch (e) {
      console.warn("Delete invalid file : "+wfpath, e);
      fs.unlinkSync(wfpath);
    }
  }

  if (data) {
    if (data.error) {
      console.warn("File is of an error entry : "+wfpath, " ", (data.error?data.error.message?data.error.message:data.error:"unknown error"));
      return null;
    }
    if (asobject) {
      data.fromCache = true;
      return data;
    } else {
      let result = singleWordToDisplay(data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }
  }


  try {
    if (pendingObjects[word]) {
      if (asobject) {
        return pendingObjects[word];
      } else {
        let result = singleWordToDisplay(pendingObjects[word]);
        const ojson = JSON.stringify(result);         // modified
        return ojson;
      }
    }
  } catch (e) {
    console.warn("Error (",word, ") ", e&&e.message?e.message:"?");
    return null;
  }

  if (cachedonly) {
    return null;
  }

  let djson;
  try {
    let success = await remoteInitBottleneck();
    if (!success) {
      return null;
    }

    console.error(`ENTER http download      ${word}   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`);

    data = await download(word);

    console.error(`DONE  http download      ${word}   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`);

    var copy = Object.assign({}, data);
    copy.fromCache = false;
    pendingObjects[word] = copy;

    djson = JSON.stringify(data);  // original

    if (asobject) {
      data.fromCache = false;
      return data;
    } else {
      let result = singleWordToDisplay(data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }
  } catch (e) {
    console.warn("API error (",word, ") ", e&&e.message?e.message:"?");
    djson = JSON.stringify({error:e.message});
    return null;
  } finally {

    fs.writeFile(wfpath, djson, (err) => {
      if (err) {
        console.error("Cache file/single "+wfpath+"  asobject:"+asobject+" pendingParallelRequests:"+pendingParallelRequests+" admittedParallelRequests:"+admittedParallelRequests+" write failure : "+err+"\n");
      } else {
        console.log("Cache file/single "+wfpath+"  asobject:"+asobject+" pendingParallelRequests:"+pendingParallelRequests+" admittedParallelRequests:"+admittedParallelRequests+" written successfully\n");
      }
      delete pendingObjects[word];
    });

    pendingParallelRequests--;
    admittedParallelRequests--;
    if (pendingParallelRequests && !(pendingParallelRequests%1000)) {
      console.log("--pendingParallelRequests:"+pendingParallelRequests+" admittedParallelRequests:"+admittedParallelRequests);
    }

  }

}

export class DefinitionNode {

  entry;val;partOfSpeech;
  definition;synonyms;similar;word;examples;examplesTmp;
  key;

  constructor(entry, val) {
    this.entry=entry;this.val=val;

    this.definition = val.definition; 
    this.synonyms = [];
    this.similar = [];
    this.examplesTmp = {};

    this.word = this.entry.word;
    this.partOfSpeech = this.val.partOfSpeech;
    this.synonyms.push.apply(this.synonyms, this.val.synonyms);
    this.synonyms.push(this.word);
    this.synonyms.sort();
  
    this.similar.push.apply(this.similar, this.val.similarTo);
    this.similar.sort();
  
    this.addExamples(this.val.examples);

    this.key = this.word+":::::::"+this.synonyms.length+":::::::"+this.synonyms.join(", ");
  }

  addExamples(examples) {
    if (examples) for (let x of examples) {
      this.examplesTmp[x] = 1;
    }
  }

  compress() {
    delete this.entry;
    delete this.val;
    delete this.key;
    this.examples = [];
    for (let x of Object.keys(this.examplesTmp)) {
      this.examples.push(x);
    }
    this.examples.sort();
    delete this.examplesTmp;
  }

}

export class ClusterDefinitionNode extends DefinitionNode {

  level;defkey;
  words;

  constructor(by_def, entry, val, level) {
    super(entry, val);
    this.level=level;
    
    this.words = [];

    if (TRAVERSE_ALL) {
      appendTo(this.words, val.synonyms);
      appendTo(this.words, val.similarTo);
      appendTo(this.words, val.antonyms);
      appendTo(this.words, val.typeOf);
      appendTo(this.words, val.hasTypes);
      appendTo(this.words, val.partOf);
      appendTo(this.words, val.hasParts);
      appendTo(this.words, val.instanceOf);
      appendTo(this.words, val.hasInstances);
      appendTo(this.words, val.also);
      appendTo(this.words, val.entails);
      appendTo(this.words, val.memberOf);
      appendTo(this.words, val.hasMembers);
      appendTo(this.words, val.substanceOf);
      appendTo(this.words, val.hasSubstances);
      appendTo(this.words, val.inCategory);
      appendTo(this.words, val.hasCategories);
      appendTo(this.words, val.usageOf);
      appendTo(this.words, val.hasUsages);
      appendTo(this.words, val.inRegion);
      appendTo(this.words, val.regionOf);
      appendTo(this.words, val.pertainsTo);
    } else {
      appendTo(this.words, val.synonyms);
    }

    this.defkey = this.synonyms.length+"::::::"+this.synonyms.join(", ");
    this.key = this.level+":::::::"+this.defkey;

    if (!by_def[this.defkey]) {

      by_def[this.defkey] = this;
    }
  }

  compress() {
    super.compress();
    delete this.words;
    delete this.defkey;
  }
};

function appendTo(array, itemOrArray) {
  if (Array.isArray(itemOrArray)) {
    array.push.apply(array, itemOrArray);
  } else if (itemOrArray) {
    array.push(itemOrArray);
  }
}

async function checkAPIlimitAndFinish(promises) {
  let remainingApiLimit = API_DAILY_LIMIT - (totalWordsLastDay + pendingParallelRequests);
  if (promises.length < remainingApiLimit) {
    return true;
  } else {
    await Promise.all(promises);
    remainingApiLimit = API_DAILY_LIMIT - (totalWordsLastDay + pendingParallelRequests);
    promises = [];
    return remainingApiLimit > 0;
  }
}

export async function loadDictionaryAndChildren(tresult, word, traversion, parentNode, loadChildren) {

  if (!parentNode &&  !loadChildren) {
    return true;
  }

  const by_def = tresult.by_def;
  const entry = await loadSingleWord(word, true);

  if (entry && !entry.fromCache) {
    tresult.newWords++;
  }
  if (!entry ||
      (traversion.level > 1 && 
      entry.frequency && entry.frequency>=MAX_NODE_FREQUENCY)) {
    return true;
  }


  for (let key in entry.results) {
    const val = entry.results[key]; 
    if (parentNode && val.definition == parentNode.definition) {
      parentNode.addExamples(val.examples);
      if (!loadChildren) break;
    }

    if (loadChildren) {
      let node = new ClusterDefinitionNode(by_def, entry, val, traversion.level);
      for (let word of node.words) {
        let pair = {parent:node, word};
        traversion.wordsbreadthfirst.push(pair);
      }
    }
  }

  return true;
}

export async function traverseCluster(tresult, word, themainabstraction=true, stopwhenallloaded=false) {

  let traversion = {
    level : 1,
    wordsbreadthfirst : [{word}]
  };
  if (themainabstraction) {
    tresult.noWords = 0;
    tresult.newWords = 0;
  }

  tresult.master = await loadSingleWord(word, true);
  if (!tresult.master) {
    return false;
  }

  do {
    var previouslevelchildwords = traversion.wordsbreadthfirst.concat([]);
    traversion.wordsbreadthfirst = [];

    let promises = [];
    try {
      for (let pair of previouslevelchildwords) {
        let w = pair.word;
        let loadChildren;

        if (tresult.by_w[w]) {
          loadChildren = false;
        } else {
          tresult.noWords++;
          tresult.by_w[w] = 1;
          loadChildren = tresult.noWords < MAX_WORDS;

          if (!(tresult.noWords%1000)) console.log(tresult.noWords + "/" + MAX_WORDS);
        }

        let nodepromise = loadDictionaryAndChildren(tresult, w, traversion, pair.parent, loadChildren);
        promises.push(nodepromise);

        if (stopwhenallloaded && !await checkAPIlimitAndFinish(promises)) {
          console.log(word+" Level "+traversion.level+" finished. Stop searching. API Limit reached.");
          return false;
        }
        if (tresult.noWords >= MAX_WORDS) {
          await Promise.all(promises);
          if (themainabstraction) console.log(word+" Level "+traversion.level+" finished. Search limit reached.");
          return true;
        }
      }
    } catch (e) {
      if (e === API_LIMIT_EXCEPTION) {
        console.log(word+" Level "+traversion.level+" finished. API Limit reached (by exception).");
        return false;
      } else {
        throw e;
      }
    }

    await Promise.all(promises);
    if (themainabstraction) console.log(word+" Level "+traversion.level+" finished.");

    traversion.level++;
  } while (traversion.wordsbreadthfirst.length);

  if (themainabstraction) {
    console.log(word+" Completed  Travesred:"+tresult.noWords+" written:"+tresult.newWords);
  }
  return true;
}

export async function loadCluster(word, asobject) {

  const by_def = {};
  const by_w = {};
  const by_key = [];
  let tresult = {
    by_def,
    by_w    };
  
  await traverseCluster(tresult, word);

  by_key.push.apply(by_key, Object.values(by_def));
  const cmp = (firstEl, secondEl) => {
    return firstEl.key.localeCompare(secondEl.key);
  };
  by_key.sort(cmp);
  for (let node of by_key) {
    node.compress();
  }
  let result = {
    word,
    noClusterEntries:by_key.length,
    results:by_key
  };
  if (tresult.master) {
    result.frequency = tresult.master.frequency;
    result.pronunciation = tresult.master.pronunciation;
  }

  let cjson;
  if (asobject) {
    return result;
  } else {
    cjson = JSON.stringify(result);
    return cjson;
  }
}

export async function loadCommonWord(result, word, noWords) {

  const entry = await loadSingleWord(word, true);

  if (entry) {
    if (!entry.fromCache) {
      result.newWords++;
    }
    
    result.noWords++;
    if (!(result.noWords%1000)) console.log(result.noWords + "/" + noWords);

    for (let key in entry.results) {
      const val = entry.results[key]; 

      const definitionNode = new DefinitionNode(entry, val);

      let promises = [];
      try {
        for (let syn of (val.synonyms?val.synonyms:[])) {
          let nodepromise = loadDictionaryAndChildren(result, syn, {level:0}, definitionNode, false);
          promises.push(nodepromise);
        }
        await Promise.all(promises);
      } catch (e) {
        if (e === API_LIMIT_EXCEPTION) {
          console.log(word+" Level "+traversion.level+" finished. API Limit reached (by exception).");
          return false;
        } else {
          throw e;
        }
      }

      result.noDefinitions++;
      result.results.push(definitionNode);
    }
  }
}

export async function loadCommonWords(words, word, asobject) {

  // create new array to push data to
  let results = [];
  let result = {
    word,
    noWords:0,
    newWords:0,
    noDefinitions:0,
    results
  };

  let promises = [];
  let noWords = Object.keys(words).length;
  for (let commonWord in words) {
    let cwpromise = loadCommonWord(result, commonWord, noWords);
    promises.push(cwpromise);
  }
  await Promise.all(promises);

  const cmp = (firstEl, secondEl) => {
    return firstEl.key.localeCompare(secondEl.key);
  };
  result.results.sort(cmp);
  let prevnode;
  let filtered = [];
  for (let node of result.results) {
    if (!prevnode || prevnode.definition!=node.definition) {
      filtered.push(node);
      node.compress();
      prevnode = node;
    }
  }
  result.results = filtered;
  result.noDefinitions = filtered.length;

  console.log("Common words query processed  Travesred:"+result.noWords+" written:"+result.newWords);

  let cjson;
  if (asobject) {
    return result;
  } else {
    cjson = JSON.stringify(result);
    return cjson;
  }

}

export function loadCommonWordsLetter(words, word, letter, asobject) {
  let ofLetter = {};
  let lc = letter.toLowerCase();
  for (let w of Object.keys(words)) {
    if (w[0].toLowerCase()==lc) {
      ofLetter[w] = 1;
    }
  }
  return loadCommonWords(ofLetter, word, asobject);
}

export function loadCommonWords3000_a_e(word, asobject) {
  const cw = require('./common-words-3000-a-e.js');
  return loadCommonWords(cw.TheMostCommon3000, word, asobject);
}

export function loadCommonWords3000_f_p(word, asobject) {
  const cw = require('./common-words-3000-f-p.js');
  return loadCommonWords(cw.TheMostCommon3000, word, asobject);
}

export function loadCommonWords3000_q_z(word, asobject) {
  const cw = require('./common-words-3000-q-z.js');
  return loadCommonWords(cw.TheMostCommon3000, word, asobject);
}

export function loadCommonWords10000_a_c(word, asobject) {
  const cw = require('./common-words-10000-a-c.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export function loadCommonWords10000_d_h(word, asobject) {
  const cw = require('./common-words-10000-d-h.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export function loadCommonWords10000_i_o(word, asobject) {
  const cw = require('./common-words-10000-i-o.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export function loadCommonWords10000_p_r(word, asobject) {
  const cw = require('./common-words-10000-p-r.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export function loadCommonWords10000_s_z(word, asobject) {
  const cw = require('./common-words-10000-s-z.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}



export function loadCommonWords3000(word, letter, asobject) {
  let lc = letter.toLowerCase(),cw;
  if ('a'<=lc && lc<='e') {
    cw = require('./common-words-3000-a-e.js');
  } else if ('f'<=lc && lc<='p') {
    cw = require('./common-words-3000-f-p.js');
  } else if ('q'<=lc && lc<='z') {
    cw = require('./common-words-3000-q-z.js');
  } else {
    cw = {TheMostCommon3000:{}};
  }
  return loadCommonWordsLetter(cw.TheMostCommon3000, word, letter, asobject);
}

export function loadCommonWords10000(word, letter, asobject) {
  let lc = letter.toLowerCase(),cw;
  if ('a'<=lc && lc<='c') {
    cw = require('./common-words-10000-a-c.js');
  } else if ('d'<=lc && lc<='h') {
    cw = require('./common-words-10000-d-h.js');
  } else if ('i'<=lc && lc<='o') {
    cw = require('./common-words-10000-i-o.js');
  } else if ('p'<=lc && lc<='r') {
    cw = require('./common-words-10000-p-r.js');
  } else if ('s'<=lc && lc<='z') {
    cw = require('./common-words-10000-s-z.js');
  } else {
    cw = {TheMostCommon10000:{}};
  }
  return loadCommonWordsLetter(cw.TheMostCommon10000, word, letter, asobject);
}

export function loadWordsOnly(words0, word, asobject) {
  let words;
  if (Array.isArray(words0)) {
    words = words0;
  } else {
    words = [].concat(Object.keys(words0));
  }
  words.sort();

  let result = {
    word,
    noWords:words.length,
    results:words
  };
  let cjson;
  if (asobject) {
    return result;
  } else {
    cjson = JSON.stringify(result);
    return cjson;
  }
}

export function loadCommon3000_words(word, asobject) {
  let cw1 = require('./common-words-3000-a-e.js');
  let cw2 = require('./common-words-3000-f-p.js');
  let cw3 = require('./common-words-3000-q-z.js');
  let TheMostCommon3000 = Object.assign({}, cw1.TheMostCommon3000, cw2.TheMostCommon3000, cw3.TheMostCommon3000);
  return loadWordsOnly(TheMostCommon3000, word, asobject);
}

export function loadCommon10000_words(word, asobject) {
  let cw1 = require('./common-words-10000-a-c.js');
  let cw2 = require('./common-words-10000-d-h.js');
  let cw3 = require('./common-words-10000-i-o.js');
  let cw4 = require('./common-words-10000-p-r.js');
  let cw5 = require('./common-words-10000-s-z.js');
  let TheMostCommon10000 = Object.assign({}, cw1.TheMostCommon10000, cw2.TheMostCommon10000, cw3.TheMostCommon10000, cw4.TheMostCommon10000, cw5.TheMostCommon10000);
  return loadWordsOnly(TheMostCommon10000, word, asobject);
}


export async function loadAll_words(word0, asobject) {
  let allwords0 = [];
  function onFile(strPath, stat) {
    let word = strPath.substring(TWELVE);
    allwords0.push(word);
  }
  await finder.findFiles(`${CACHE_DIR}/words`, 0, onFile);

  return loadWordsOnly(allwords0, word0, asobject);
}

export function loadMyWords(word, asobject) {
  let cw1 = require('./my-words.js');
  return loadWordsOnly(cw1.MyWords, word, asobject);
}

export async function wordsByFrequency(word0, ffrom, fto=1000000, asobject) {
  let files = [];
  const indpath = `cache/index/frequency`;

  let ijson = fs.readFileSync(indpath);
  let find = JSON.parse(ijson);

  let words0 = [];
  let notf=0,fit=0;

  for (let df in find) {
    let a = find[df];
    if (ffrom <= df && df <= fto) {
      words0.push.apply(words0, a);
      fit+=a.length;
    } else {
      notf+=a.length;
    }
  }

  console.log("Items fit:"+fit+" nonfit:"+notf+" tot:"+(fit+notf));

  return loadWordsOnly(words0, word0, asobject);
}


export async function generateIndexes() {
  let files = [];
  async function onFile(strPath, stat) {
    let word = strPath.substring(TWELVE);
    files.push(word);
  }
  let nowords = await finder.findFiles(`${CACHE_DIR}/words`, 0, onFile);


  let cntf = 0;
  let byf = {};
  function entry(f) {
    let es = byf[f];
    if (!es) {
      byf[f] = es = [];
      cntf++;
    }
    return es;
  }
  let chkFile = async function(word) {
    let data = await loadSingleWord(word, true, true);
    if (data) {
      let df = data.frequency ? data.frequency : 0;
      entry(df).push(word);
    }
  };

  let promises = [];
  for (let file of files) {
    promises.push(chkFile(file));
  }
  await Promise.all(promises);

  var fkeys = [].concat(Object.keys(byf));
  fkeys.sort((a,b)=>Number(a)-Number(b));
  var byfs = {};
  for (let f of fkeys) {
    let es = byf[f];
    byfs[f] = es;
    es.sort();
  }

  console.log("Frequency indexes:"+cntf+"  of no.words:"+nowords);
  function quantilize(size) {
    let lst = 0;
    let buckets = [0];
    for (let f of fkeys) {
      f = Number(f);
      if (f) {
        let es = byfs[f];
        lst += es?es.length:0;
        if (lst >= size) {
          let fpl = f+0.005;
          let ff = fpl.toFixed(3);
          console.log("Frequency:.."+f+" "+ff+"  cnt:"+lst);
          lst = 0;
          buckets.push(ff);
        }
      }
    }
    console.log("Frequency:..  cnt:"+lst);
    console.log("\nvar frqntls"+size+"=["+buckets.join(", ")+",100];");
  }
  quantilize(800);
  quantilize(3000);
  quantilize(10000);

  const indpath = `cache/index/frequency`;
  const djson = JSON.stringify(byfs);

  console.log("Saving cache file/index "+indpath);
  fs.writeFileSync(indpath, djson);

}

