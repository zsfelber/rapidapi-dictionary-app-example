const axios = require('axios');
const fs = require('fs');
const finder = require('./finder.js');

const API_DAILY_LIMIT = 25000;
let MAX_WORDS;
let CACHE_CLUSTERS;
let MAX_NODE_FREQUENCY;
let TRAVERSE_SIMILAR;

let cacheIsInitialized = false;
let totalWordsLastDay = 0;

async function lazyInitCache() {

  if (!cacheIsInitialized) {
    cacheIsInitialized = true;

    let curtime = new Date();

    // 86400000 milliseconds (24 hours)
    totalWordsLastDay = await finder.findFiles("cache/words", curtime - 86400000);

    console.log("lazyInitCache  totalWordsLastDay : "+totalWordsLastDay+" errors:"+finder.errors);
  }

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    console.error("Could not make request to file/single "+wfpath+"  totalWordsLastDay >= API_DAILY_LIMIT :  "+totalWordsLastDay+" >= "+API_DAILY_LIMIT+"\n");
    return false;
  } else {
    totalWordsLastDay++;
    return true;
  }
}

export async function initCrawler(
  _MAX_WORDS,
  _CACHE_CLUSTERS,
  _MAX_NODE_FREQUENCY,
  _TRAVERSE_SIMILAR
  ) {

  MAX_WORDS = _MAX_WORDS;
  CACHE_CLUSTERS = _CACHE_CLUSTERS;
  MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
  TRAVERSE_SIMILAR = _TRAVERSE_SIMILAR;


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

  const wfpath = `cache/words/${word}`;

  if (fs.existsSync(wfpath)) {

    //console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();
    try {
      let data = JSON.parse(ijson);

      if (asobject) {
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

  if (!await lazyInitCache()) {
    return null;
  }

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

  totalWordsLastDay++;

  const djson = JSON.stringify(response.data);  // original
  fs.writeFile(wfpath, djson, (err) => {
    if (err) {
      console.error("Cache file/single "+wfpath+"  asobject:"+asobject+" write failure : "+err+"\n");
    } else {
      console.log("Cache file/single "+wfpath+"  asobject:"+asobject+" written successfully\n");
    }
  });

  if (asobject) {
    return response.data;
  } else {
    let result = singleWordToDisplay(response.data);
    const ojson = JSON.stringify(result);         // modified
    return ojson;
  }

}

export class TraverseNode {

  entry;val;level;partOfSpeech;
  definition;synonyms;similar;words;
  key;

  constructor(by_def, entry, val, level) {
    this.entry=entry;this.val=val;this.level=level;

    this.definition = val.definition; 
    this.synonyms = [];
    this.similar = [];
    this.words = [];

    this.add(by_def);
  }

  add(by_def) {
  
    this.partOfSpeech = this.val.partOfSpeech;
    this.synonyms.push.apply(this.synonyms, this.val.synonyms);
    this.synonyms.push(this.entry.word);
    this.synonyms.sort();
  
    this.similar.push.apply(this.similar, this.val.similarTo);
    this.similar.sort();
  
    this.words.push.apply(this.words, this.synonyms);
    this.words.push.apply(this.words, this.similar);
  
    this.key = this.level+":::::::"+this.synonyms.length+"::::::"+this.synonyms.join(", ");

    if (!by_def[this.val.definition]) {

      by_def[this.val.definition] = this;
    }
  }

  compress() {
    delete this.val;
    delete this.key;
    delete this.words;
  }
  
};

export async function loadDictionaryAndChildren(tresult, word, traversion) {

  const by_def = tresult.by_def;
  const entry = await loadSingleWord(word, true);

  if (!entry ||
      (traversion.level > 1 && 
      entry.frequency && entry.frequency>=MAX_NODE_FREQUENCY)) {
    return true;
  }


  for (let key in entry.results) {
    const val = entry.results[key]; 

    let node = new TraverseNode(by_def, entry, val, traversion.level);
    if (TRAVERSE_SIMILAR) {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.words);
    } else {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.synonyms);
    }
  }

  return true;
}

export async function traverseCluster(tresult, word) {

  let traversion = {
    level : 1,
    wordsbreadthfirst : [word]
  };
  tresult.noWords = 0;
  tresult.master = await loadSingleWord(word, true);

  do {
    var previouslevelchildwords = traversion.wordsbreadthfirst.concat([]);
    traversion.wordsbreadthfirst = [];

    let promises = [];
    for (let w of previouslevelchildwords) {
      if (tresult.by_w[w]) {
      } else if (tresult.noWords >= MAX_WORDS) {
        console.log("Level "+traversion.level+" finished. Completed.");
        return;
      } else {
        tresult.noWords++;
        tresult.by_w[w] = 1;
        console.log(tresult.noWords + "/" + MAX_WORDS);
    
        let nodepromise = loadDictionaryAndChildren(tresult, w, traversion);
        promises.push(nodepromise);
      }
    }
    await Promise.all(promises);
    console.log("Level "+traversion.level+" finished.");

    traversion.level++;
  } while (traversion.wordsbreadthfirst.length);

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
    for (let defobj of by_key) {
      defobj.compress();
    }
    let result = {
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

  result.noWords++;
  console.log(result.noWords + "/" + noWords);

  for (let key in entry.results) {
    const val = entry.results[key]; 
    const synonyms = [].concat(val.synonyms);
    synonyms.sort();

    const definition = {
      partOfSpeech: val.partOfSpeech,
      definition: val.definition,
      synonyms
    };
    result.noDefinitions++;
    result.results.push(definition);
  }
}

export async function loadCommonWords() {
  const cw = require('./common-words.js');

  // create new array to push data to
  let results = [];
  let result = {
    noWords:0,
    noDefinitions:0,
    results
  };

  let promises = [];
  let noWords = Object.keys(cw.TheMostCommon3000).length;
  for (let commonWord in cw.TheMostCommon3000) {
    promises.push(loadCommonWord(result, commonWord, noWords));
  }
  await Promise.all(promises);

  return result;
}
