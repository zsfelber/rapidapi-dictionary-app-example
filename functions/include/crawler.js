
const axios = require('axios');
const fs = require('fs');
const finder = require('./finder.js');

const API_DAILY_LIMIT = 25000;
let MAX_WORDS;
let CACHE_CLUSTERS;
let MAX_NODE_FREQUENCY;
let TRAVERSE_ALL;

let cacheInitializerCommon;
let cacheIsInitialized = false;
let parallelCacheInitRequests = 0;
let totalWordsLastDay = 0;
let cacheInitIsError = false;

async function remoteCallInit() {

  if (!cacheIsInitialized) {
    if (parallelCacheInitRequests >= API_DAILY_LIMIT) {
      return false;
    }
    parallelCacheInitRequests++;
    if (!cacheInitializerCommon) {
      let curtime = new Date();

      // 86400000 milliseconds (24 hours)
      cacheInitializerCommon = finder.findFiles("cache/words", curtime - 86400000);
      totalWordsLastDay = await cacheInitializerCommon;
      cacheIsInitialized = true;
      console.log("remoteCallInit  totalWordsLastDay : "+totalWordsLastDay+" errors:"+finder.errors+" parallelCacheInitRequests:"+parallelCacheInitRequests);
    } else {
      await cacheInitializerCommon;
    }
  }

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    if (!cacheInitIsError) {
      console.error("Could not proxy more request to API file/single  totalWordsLastDay >= API_DAILY_LIMIT :  "+totalWordsLastDay+" >= "+API_DAILY_LIMIT+"\n");
    }
    cacheInitIsError = true;
    return false;
  } else {
    totalWordsLastDay++;
    return true;
  }
}

export function isApiLimitReached() {
  if (cacheIsInitialized) {
    if (cacheInitializerCommon) {
      return totalWordsLastDay >= API_DAILY_LIMIT;
    } else {
      return false;
    }
  } else {
    return parallelCacheInitRequests >= API_DAILY_LIMIT;
  }
}

export async function initCrawler(
  _MAX_WORDS,
  _CACHE_CLUSTERS,
  _MAX_NODE_FREQUENCY,
  _TRAVERSE_ALL
  ) {

  MAX_WORDS = _MAX_WORDS;
  CACHE_CLUSTERS = _CACHE_CLUSTERS;
  MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
  TRAVERSE_ALL = _TRAVERSE_ALL;


  if (!fs.existsSync("cache/words")){
    fs.mkdirSync("cache/words", { recursive: true });
  }
  if (!fs.existsSync("cache/clusters")){
    fs.mkdirSync("cache/clusters");
  }

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
    const keys = Object.keys(def);
    keys.map(key => {

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

export async function loadSingleWord(word, asobject) {

  let fileword = word.replace(/[.,/']/g, "$");
  const wfpath = `cache/words/${fileword}`;

  if (fs.existsSync(wfpath)) {

    //console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();
    try {
      let data = JSON.parse(ijson);

      if (asobject) {
        data.fromCache = true;
        return data;
      } else {
        let result = singleWordToDisplay(data);
        const ojson = JSON.stringify(result);         // modified
        return ojson;
      }
  
    } catch (e) {
      console.warn("Delete invalid file : "+wfpath, e);
      fs.unlinkSync(wfpath);
    }
  }

  let success = await remoteCallInit();
  if (!success) {
    return null;
  }

  try {
    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://wordsapiv1.p.rapidapi.com/words/${word}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":process.env.RAPIDAPI_KEY
      }
    });

    const djson = JSON.stringify(response.data);  // original
    fs.writeFile(wfpath, djson, (err) => {
      if (err) {
        console.error("Cache file/single "+wfpath+"  asobject:"+asobject+" write failure : "+err+"\n");
      } else {
        console.log("Cache file/single "+wfpath+"  asobject:"+asobject+" written successfully\n");
      }
    });

    if (asobject) {
      response.data.fromCache = false;
      return response.data;
    } else {
      let result = singleWordToDisplay(response.data);
      const ojson = JSON.stringify(result);         // modified
      return ojson;
    }
  } catch (e) {
    console.warn("API error (",word, ") ", e&&e.message?e.message:"?");
    return null;
  }

}

export class DefinitionNode {

  entry;val;partOfSpeech;
  definition;synonyms;similar;word;examples;examplesTmp;words;
  key;

  constructor(entry, val) {
    this.entry=entry;this.val=val;

    this.definition = val.definition; 
    this.synonyms = [];
    this.similar = [];
    this.words = [];
    this.examplesTmp = {};

    this.word = this.entry.word;
    this.partOfSpeech = this.val.partOfSpeech;
    this.synonyms.push.apply(this.synonyms, this.val.synonyms);
    this.synonyms.push(this.word);
    this.synonyms.sort();
  
    this.similar.push.apply(this.similar, this.val.similarTo);
    this.similar.sort();
  
    this.addExamples(this.val.examples);

    this.words.push.apply(this.words, this.synonyms);
    this.words.push.apply(this.words, this.similar);

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
    delete this.words;
    this.examples = [];
    for (let x of Object.keys(this.examplesTmp)) {
      this.examples.push(x);
    }
    delete this.examplesTmp;
  }

}

export class ClusterDefinitionNode extends DefinitionNode {

  level;

  constructor(by_def, entry, val, level) {
    super(entry, val);
    this.level=level;

    this.key = this.level+":::::::"+this.synonyms.length+"::::::"+this.synonyms.join(", ");

    if (!by_def[this.val.definition]) {

      by_def[this.val.definition] = this;
    }
  }
  
};

function appendTo(array, itemOrArray) {
  if (Array.isArray(itemOrArray)) {
    array.push.apply(array, itemOrArray);
  } else if (itemOrArray) {
    array.push(itemOrArray);
  }
}

export async function loadDictionaryAndChildren(tresult, word, traversion, parentNode, loadChildren) {

  if (!parentNode &&  !loadChildren) {
    return false;
  }

  const by_def = tresult.by_def;
  const entry = await loadSingleWord(word, true);

  if (entry && !entry.fromCache) {
    tresult.newWords++;
  }
  if (!entry ||
      (traversion.level > 1 && 
      entry.frequency && entry.frequency>=MAX_NODE_FREQUENCY)) {
    return false;
  }


  for (let key in entry.results) {
    const val = entry.results[key]; 
    if (parentNode && val.definition == parentNode.definition) {
      parentNode.addExamples(val.examples);
      if (!loadChildren) break;
    }

    if (loadChildren) {
      let node = new ClusterDefinitionNode(by_def, entry, val, traversion.level);
      let totwords = [];
      if (TRAVERSE_ALL) {
        appendTo(totwords, node.words);
        appendTo(totwords, val.antonyms);
        appendTo(totwords, val.typeOf);
        appendTo(totwords, val.hasTypes);
        appendTo(totwords, val.partOf);
        appendTo(totwords, val.hasParts);
        appendTo(totwords, val.instanceOf);
        appendTo(totwords, val.hasInstances);
        appendTo(totwords, val.also);
        appendTo(totwords, val.entails);
        appendTo(totwords, val.memberOf);
        appendTo(totwords, val.hasMembers);
        appendTo(totwords, val.substanceOf);
        appendTo(totwords, val.hasSubstances);
        appendTo(totwords, val.inCategory);
        appendTo(totwords, val.hasCategories);
        appendTo(totwords, val.usageOf);
        appendTo(totwords, val.hasUsages);
        appendTo(totwords, val.inRegion);
        appendTo(totwords, val.regionOf);
        appendTo(totwords, val.pertainsTo);
      } else {
        appendTo(totwords, node.synonyms);
      }
      for (let word of totwords) {
        let pair = {parent:node, word};
        traversion.wordsbreadthfirst.push(pair);
      }
    }
  }

  return true;
}

export async function traverseCluster(tresult, word, themainabstraction=true) {

  let traversion = {
    level : 1,
    wordsbreadthfirst : [{word}]
  };
  if (themainabstraction) {
    tresult.noWords = 0;
    tresult.newWords = 0;
  }

  tresult.master = await loadSingleWord(word, true);

  do {
    var previouslevelchildwords = traversion.wordsbreadthfirst.concat([]);
    traversion.wordsbreadthfirst = [];

    let promises = [];
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

      if (tresult.noWords >= MAX_WORDS) {
        if (themainabstraction) console.log(word+" Level "+traversion.level+" finished. Limit reached.");
        return;
      }
    }
    await Promise.all(promises);
    if (themainabstraction) console.log(word+" Level "+traversion.level+" finished.");

    traversion.level++;
  } while (traversion.wordsbreadthfirst.length);

  if (themainabstraction) {
    console.log(word+" Completed  Travesred:"+tresult.noWords+" written:"+tresult.newWords);
  }
}

export async function loadCluster(word, asobject) {

  const cfpath = `cache/clusters/${word}`;
  if (CACHE_CLUSTERS && fs.existsSync(cfpath)) {
    let ijson = fs.readFileSync(cfpath).toString();
    let result = JSON.parse(ijson);
    console.log("From cache file/cluster "+cfpath+"  asobject:"+asobject+"...\n");

    if (asobject) {
      return result;
    } else {
      return ijson;
    }

  } else {

    const by_def = {};
    const by_w = {};
    const by_key = [];
    let tresult = {
      by_def,
      by_w    };
    const entry = await traverseCluster(tresult, word);
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
    if (CACHE_CLUSTERS) {
      cjson = JSON.stringify(result);
      fs.writeFile(cfpath, cjson, (err) => {
        if (err) {
          console.error("Cluster file/cluster "+cfpath+"  write failure : "+err+"\n");
        } else {
          console.log("Cluster file/cluster "+cfpath+"  written successfully\n");
        }
      });
    }

    if (asobject) {
      return result;
    } else {
      if (!cjson) {
        cjson = JSON.stringify(result);
      }
      return cjson;
    }
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
      for (let syn of (val.synonyms?val.synonyms:[])) {
        let nodepromise = loadDictionaryAndChildren(result, syn, {level:0}, definitionNode, false);
        promises.push(nodepromise);
      }
      await Promise.all(promises);

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
    promises.push(loadCommonWord(result, commonWord, noWords));
  }
  await Promise.all(promises);

  const cmp = (firstEl, secondEl) => {
    return firstEl.key.localeCompare(secondEl.key);
  };
  result.results.sort(cmp);
  for (let node of result.results) {
    node.compress();
  }

  console.log("Common words query processed  Travesred:"+result.noWords+" written:"+result.newWords);

  let cjson;
  if (asobject) {
    return result;
  } else {
    if (!cjson) {
      cjson = JSON.stringify(result);
    }
    return cjson;
  }

}

export async function loadCommonWords3000(word, asobject) {
  const cw = require('./common-words-3000.js');
  return loadCommonWords(cw.TheMostCommon3000, word, asobject);
}

export async function loadCommonWords10000_a_c(word, asobject) {
  const cw = require('./common-words-10000-a-c.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export async function loadCommonWords10000_d_h(word, asobject) {
  const cw = require('./common-words-10000-d-h.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export async function loadCommonWords10000_i_o(word, asobject) {
  const cw = require('./common-words-10000-i-o.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export async function loadCommonWords10000_p_r(word, asobject) {
  const cw = require('./common-words-10000-p-r.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}

export async function loadCommonWords10000_s_z(word, asobject) {
  const cw = require('./common-words-10000-s-z.js');
  return loadCommonWords(cw.TheMostCommon10000, word, asobject);
}
