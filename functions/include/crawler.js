
const fs = require('fs');
const finder = require('./finder.js');
const csvParse = require('csv-load-sync');;

const API_LIMIT_EXCEPTION = {
  apiLimitException: 1
};
const noResolvePath = {
  rel: function (dirname, rel) {
    return "./" + rel;
  },
  abs: function (rel) {
    return rel;
  }
};
exports.aCrawler = function (resolvePath) {
  if (!resolvePath) resolvePath = noResolvePath;

  const TURNING_TIME_GMT = [20, 55];
  const MAX_PARALLEL = 1;
  let API;
  let CACHE_DIR;
  let API_DAILY_LIMIT;
  let MAX_WORDS;
  let MAX_NODE_FREQUENCY;
  let TRAVERSE_ALL;
  let MAX_LEVEL;
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
    return new Promise((a, r) => {
      setTimeout(a, millis);
    });
  }

  function loadJson(path) {
    let f = resolvePath.abs(path);
    let json, data;
    if (fs.existsSync(f)) {
      json = fs.readFileSync(f);
      data = JSON.parse(json);
    } else {
      data = Object.create(null);
    }
    return {f, json, data};
  }
  async function parallelBottleneck() {
    pendingParallelRequests++;
    if (!(pendingParallelRequests % 1000)) {
      console.log(API, "++pendingParallelRequests:" + pendingParallelRequests + " admittedParallelRequests:" + admittedParallelRequests);
    }
    while (admittedParallelRequests >= MAX_PARALLEL) {
      await timeoutAsPromise(200);
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
        console.log(API, "remoteInitBottleneck  turntime:" + turntime.toUTCString() + "  totalWordsLastDay:" + totalWordsLastDay + " of API limit " + API_DAILY_LIMIT + " errors:" + finder.vars.errors + " pendingParallelRequests:" + pendingParallelRequests + " admittedParallelRequests:" + admittedParallelRequests);
      } else {
        await cacheInitializerCommon;
      }
    }

    if (isApiLimitReached()) {
      if (!cacheInitIsError) {
        console.error(API, "Could not proxy more request to API file/single  totalWordsLastDay+" + pendingParallelRequests + " >= API_DAILY_LIMIT :  " + (totalWordsLastDay + pendingParallelRequests) + " >= " + API_DAILY_LIMIT + "\n");
      }
      cacheInitIsError = true;
      return false;
    } else {
      totalWordsLastDay++;
      if (!(totalWordsLastDay % 1000)) console.log(API, totalWordsLastDay + " of API limit " + API_DAILY_LIMIT);
      return true;
    }
  }

  function isApiLimitReached(pendingBeforeRequest = 0) {
    if (cacheIsInitialized) {
      if (cacheInitializerCommon) {
        return (totalWordsLastDay + pendingParallelRequests + pendingBeforeRequest) >= API_DAILY_LIMIT;
      } else {
        return false;
      }
    } else {
      return (pendingParallelRequests + pendingBeforeRequest) >= API_DAILY_LIMIT;
    }
  }

  async function initCrawler(
    _API,
    _API_DAILY_LIMIT,
    _MAX_WORDS,
    _MAX_NODE_FREQUENCY,
    _TRAVERSE_ALL,
    _MAX_LEVEL = 100
  ) {

    API = _API;
    CACHE_DIR = "cache/" + _API;
    API_DAILY_LIMIT = _API_DAILY_LIMIT;
    MAX_WORDS = _MAX_WORDS;
    MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
    TRAVERSE_ALL = _TRAVERSE_ALL;
    MAX_LEVEL = _MAX_LEVEL;
    TWELVE = (CACHE_DIR + "/words/").length;

    switch (_API) {
      case "google":
        download = require('./googletransapi/google_dict').googleDictionary;
        break;
      case "wordsapi":
        download = require('./wordsapi/wordapi_dict').wordsApiDictionary;
        break;
      default:
        throw "API is not supported : " + _API;
    }


    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR}/words`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR}/words`), { recursive: true });
    }
    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR}/clusters`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR}/clusters`));
    }
    if (!fs.existsSync(resolvePath.abs(`cache/index`))) {
      fs.mkdirSync(resolvePath.abs(`cache/index`));
    }

    curtime = new Date();
    turntime = Date.UTC(curtime.getUTCFullYear(),
      curtime.getUTCMonth(), curtime.getUTCDate(),
      TURNING_TIME_GMT[0], TURNING_TIME_GMT[1]);
    // 86400000 milliseconds (24 hours)
    if (curtime < turntime) {
      turntime = new Date(turntime - 86400000);
    } else {
      turntime = new Date(turntime);
    }

    console.log(API, "initCrawler  curtime:" + curtime.toUTCString() + "  turntime:" + turntime.toUTCString());
  }

  function singleWordToDisplay(data) {

    // create new array to push data to
    let results = [];
    let result = {
      word: data.word,
      results, etc: ""
    };
    if (data.pronunciation && Object.keys(data.pronunciation).length) {
      result.pronunciation = data.pronunciation;
    }
    let f1 = getWordCaggleFrequency(data.word);
    if (f1) {
      result.frequency = f1;
      if (data.frequency) {
        result.dataFrequency = data.frequency;
      }
    } else if (data.frequency) {
      result.frequency = (data.frequency + "(" + API + ")");
      result.dataFrequency = data.frequency;
    }

    if (data.results) data.results.map(def => {
      let definitionArray = [];
      let definition = {
        partOfSpeech: def.partOfSpeech,
        properties: definitionArray
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

  const CACHE_RAW = new Object({cache:"raw"});
  async function loadSingleWord(word, asobject, cachedonly = false) {

    let fileword = word.replace(/[.,/']/g, "$").toLowerCase();
    const wfpath = `${CACHE_DIR}/words/${fileword}`;

    let data, djson;

    function convertResult(fromCache, encode) {
      if (encode) {
        djson = JSON.stringify(data);  // original
      }
      if (asobject) {
        data.fromCache = fromCache;
        return data;
      } else {
        let result = singleWordToDisplay(data);
        const ojson = JSON.stringify(result);         // modified
        return ojson;
      }
    }
    function finish() {
      pendingParallelRequests--;
      admittedParallelRequests--;
      if (pendingParallelRequests && !(pendingParallelRequests % 1000)) {
        console.log(API, "--pendingParallelRequests:" + pendingParallelRequests + " admittedParallelRequests:" + admittedParallelRequests);
      }
    }
    function convertError() {
      if (cachedonly===CACHE_RAW) {
        data = {error:(data.error?data.error.message?data.error.message:data.error:"unknown error")};
        if (/no definitions for \{"info":\{"word":"/.test(data.error)) {
          data.error = "no definitions for word";
          console.log("Convert error message : no definitions for word:"+word);
        }
      } else {
        data = null;
      }
      return data;
    }

    loadStarDictAll();

    if (stardict_words.byword[word]) {
      data = Object.assign({}, stardict_words.byword[word]);
      if (data.errind) {
        data.error = stardict_errors.values[data.errind];
        console.warn("StarDict data is of an error entry : " + word, " ", data.error);
        data = convertError();
        return data;
      } else {
        data.results = [];
        for (let meanind of data.syninds) {
          let def = stardict_defs.values[meanind];
          if (!def.synonyms && def.synonymSet) {
            def.synonyms = [].concat(Object.keys(def.synonymSet));
          }
          data.results.push(def);
        }
        return convertResult(true);
      }
    }
  
    if (fs.existsSync(resolvePath.abs(wfpath))) {

      //console.log(API, "From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
      let ijson = fs.readFileSync(resolvePath.abs(wfpath)).toString();
      try {
        data = JSON.parse(ijson);

      } catch (e) {
        console.warn("Delete invalid file : " + wfpath, e);
        fs.unlinkSync(resolvePath.abs(wfpath));
      }
    }

    if (data) {
      if (data.error) {
        if (data.error == "Sorry pal, you were just rate limited by the upstream server.") {
          console.warn("Delete rate limit error ...  retry ...  " + wfpath);
          fs.unlinkSync(resolvePath.abs(wfpath));
          data = null;
        } else if (/^Cannot read properties/.test(data.error)) {
          console.warn("Delete Cannot read properties error ...  retry ...  " + wfpath);
          fs.unlinkSync(resolvePath.abs(wfpath));
          data = null;
        } else {
          console.warn("File is of an error entry : " + wfpath, " ", (data.error ? data.error.message ? data.error.message : data.error : "unknown error"));
          data = convertError();
          return data;
        }
      }
      if (data) {
        return convertResult(true);
      }
    }

    let sliding = 0;

    try {
      let success = await remoteInitBottleneck();
      if (!success) {
        return null;
      }

      data = await pendingObjects[word];
      if (data) {
        return convertResult(true);
      }

      if (cachedonly) {
        return null;
      }

      sliding = 1;

    } catch (e) {
      console.warn("Error (", API, '"' + word + '"', ") ", e && e.message ? e.message : "?");
      return null;
    } finally {

      if (!sliding) finish();
    }

    try {
      console.info(`ENTER http download      ${API} "${word}"   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`);

      pendingObjects[word] = download(word);

      data = await pendingObjects[word];

      console.info(`DONE  http download      ${API} "${word}"   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`);

      // keep fromCache=false in this instance only
      data = Object.assign({}, data);

      return convertResult(false, true);

    } catch (e) {
      console.warn("API error (", API, '"' + word + '"', ") ", e && e.message ? e.message : "?");
      djson = JSON.stringify({ error: e.message });
      return null;
    } finally {

      fs.writeFile(resolvePath.abs(wfpath), djson, (err) => {
        if (err) {
          console.error("Cache file/single " + wfpath + "  asobject:" + asobject + " pendingParallelRequests:" + pendingParallelRequests + " admittedParallelRequests:" + admittedParallelRequests + " write failure : " + err + "\n");
        } else {
          console.log("Cache file/single " + wfpath + "  asobject:" + asobject + " pendingParallelRequests:" + pendingParallelRequests + " admittedParallelRequests:" + admittedParallelRequests + " written successfully\n");
        }
        delete pendingObjects[word];
      });

      finish();

    }

  }

  class DefinitionNode {

    entry; val; partOfSpeech;
    definition; synonyms; similar; word; examples; examplesTmp;
    key;

    constructor(entry, val) {
      this.entry = entry; this.val = val;

      this.definition = val.definition;
      this.synonyms = [];
      this.similar = [];
      this.examplesTmp = Object.create(null);

      this.word = this.entry.word;
      this.partOfSpeech = this.val.partOfSpeech;
      this.synonyms.push.apply(this.synonyms, this.val.synonyms);
      this.synonyms.push(this.word);
      this.synonyms.sort();

      this.similar.push.apply(this.similar, this.val.similarTo);
      this.similar.sort();

      this.addExamples(this.val.examples);

      this.key = this.word + ":::::::" + this.synonyms.length + ":::::::" + this.synonyms.join(", ") + "::::::" + this.definition;
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

  class ClusterDefinitionNode extends DefinitionNode {

    level; defkey;
    words;

    constructor(by_def, entry, val, level) {
      super(entry, val);
      this.level = level;

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

      this.defkey = this.synonyms.length + "::::::" + this.synonyms.join(", ") + "::::::" + this.definition;
      this.key = this.level + ":::::::" + this.defkey;

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

  async function loadDictionaryAndChildren(tresult, word, traversion, parentNode, loadChildren) {

    if (!parentNode && !loadChildren) {
      return true;
    }

    const by_def = tresult.by_def;
    const entry = await loadSingleWord(word, true);

    if (entry && !entry.fromCache) {
      tresult.newWords++;
    }
    if (!entry ||
      (traversion.level > 1 &&
        entry.frequency && entry.frequency >= MAX_NODE_FREQUENCY)) {
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
          let pair = { parent: node, word };
          traversion.wordsbreadthfirst.push(pair);
        }
      }
    }

    return true;
  }

  async function traverseCluster(tresult, word, themainabstraction = true, stopwhenallloaded = false) {

    let traversion = {
      level: 1,
      wordsbreadthfirst: [{ word }]
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

            if (!(tresult.noWords % 1000)) console.log(API, tresult.noWords + "/" + MAX_WORDS);
          }

          if (traversion.level >= MAX_LEVEL) {
            console.log(API, word + " Level " + traversion.level + " >= " + MAX_LEVEL + ". Stop unfolding children.");
            loadChildren = false;
          }

          let nodepromise = loadDictionaryAndChildren(tresult, w, traversion, pair.parent, loadChildren);
          promises.push(nodepromise);

          if (stopwhenallloaded && !await checkAPIlimitAndFinish(promises)) {
            console.log(API, word + " Level " + traversion.level + " finished. Stop searching. API Limit reached.");
            return false;
          }
          if (tresult.noWords >= MAX_WORDS) {
            await Promise.all(promises);
            if (themainabstraction) console.log(API, '"' + word + '"' + " Level " + traversion.level + " finished. Search limit reached.");
            return true;
          }
        }
      } catch (e) {
        if (e === API_LIMIT_EXCEPTION) {
          console.log(API, '"' + word + '"' + " Level " + traversion.level + " finished. API Limit reached (by exception).");
          return false;
        } else {
          throw e;
        }
      }

      await Promise.all(promises);
      if (themainabstraction) console.log(API, '"' + word + '"' + " Level " + traversion.level + " finished.");

      traversion.level++;
    } while (traversion.wordsbreadthfirst.length);

    if (themainabstraction) {
      console.log(API, '"' + word + '"' + " Completed  Travesred:" + tresult.noWords + " written:" + tresult.newWords);
    }
    return true;
  }

  async function loadCluster(word, asobject) {

    const by_def = Object.create(null);
    const by_w = Object.create(null);
    const by_key = [];
    let tresult = {
      by_def,
      by_w
    };

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
      noClusterEntries: by_key.length,
      results: by_key
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

  async function loadCommonWord(result, word, noWords) {

    const entry = await loadSingleWord(word, true);

    if (entry) {
      if (!entry.fromCache) {
        result.newWords++;
      }

      result.noWords++;
      if (!(result.noWords % 1000)) console.log(API, result.noWords + "/" + noWords);

      for (let key in entry.results) {
        const val = entry.results[key];

        const definitionNode = new DefinitionNode(entry, val);

        let promises = [];
        try {
          for (let syn of (val.synonyms ? val.synonyms : [])) {
            let nodepromise = loadDictionaryAndChildren(result, syn, { level: 0 }, definitionNode, false);
            promises.push(nodepromise);
          }
          await Promise.all(promises);
        } catch (e) {
          if (e === API_LIMIT_EXCEPTION) {
            console.log(API, '"' + word + '"' + " Level " + traversion.level + " finished. API Limit reached (by exception).");
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

  async function loadCommonWords(words, word, asobject) {

    // create new array to push data to
    let results = [];
    let result = {
      word,
      noWords: 0,
      newWords: 0,
      noDefinitions: 0,
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
      if (!prevnode || prevnode.definition != node.definition) {
        filtered.push(node);
        node.compress();
        prevnode = node;
      }
    }
    result.results = filtered;
    result.noDefinitions = filtered.length;

    console.log(API, " Common words query processed  Travesred:" + result.noWords + " written:" + result.newWords);

    let cjson;
    if (asobject) {
      return result;
    } else {
      cjson = JSON.stringify(result);
      return cjson;
    }

  }

  function loadCommonWordsLetter(words, word, letter, asobject) {
    let ofLetter = Object.create(null);
    let lc = letter.toLowerCase();
    for (let w of Object.keys(words)) {
      if (w[0].toLowerCase() == lc) {
        ofLetter[w] = 1;
      }
    }
    return loadCommonWords(ofLetter, word, asobject);
  }

  function loadCommonWords3000_a_e(word, asobject) {
    const cw = loadJson('data/common-words-3000-a-e.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords3000_f_p(word, asobject) {
    const cw = loadJson('data/common-words-3000-f-p.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords3000_q_z(word, asobject) {
    const cw = loadJson('data/common-words-3000-q-z.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords10000_a_c(word, asobject) {
    const cw = loadJson('data/common-words-10000-a-c.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords10000_d_h(word, asobject) {
    const cw = loadJson('data/common-words-10000-d-h.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords10000_i_o(word, asobject) {
    const cw = loadJson('data/common-words-10000-i-o.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords10000_p_r(word, asobject) {
    const cw = loadJson('data/common-words-10000-p-r.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadCommonWords10000_s_z(word, asobject) {
    const cw = loadJson('data/common-words-10000-s-z.json');
    return loadCommonWords(cw.data, word, asobject);
  }



  function loadCommonWords3000(word, letter, asobject) {
    let lc = letter.toLowerCase(), cw;
    if ('a' <= lc && lc <= 'e') {
      cw = loadJson('data/common-words-3000-a-e.json');
    } else if ('f' <= lc && lc <= 'p') {
      cw = loadJson('data/common-words-3000-f-p.json');
    } else if ('q' <= lc && lc <= 'z') {
      cw = loadJson('data/common-words-3000-q-z.json');
    } else {
      cw = { };
    }
    return loadCommonWordsLetter(cw.data, word, letter, asobject);
  }

  function loadCommonWords10000(word, letter, asobject) {
    let lc = letter.toLowerCase(), cw;
    if ('a' <= lc && lc <= 'c') {
      cw = loadJson('data/common-words-10000-a-c.json');
    } else if ('d' <= lc && lc <= 'h') {
      cw = loadJson('data/common-words-10000-d-h.json');
    } else if ('i' <= lc && lc <= 'o') {
      cw = loadJson('data/common-words-10000-i-o.json');
    } else if ('p' <= lc && lc <= 'r') {
      cw = loadJson('data/common-words-10000-p-r.json');
    } else if ('s' <= lc && lc <= 'z') {
      cw = loadJson('data/common-words-10000-s-z.json');
    } else {
      cw = { };
    }
    return loadCommonWordsLetter(cw.data, word, letter, asobject);
  }

  function loadMyWordCls(word, letter, asobject) {
    let cw = loadJson('data/my-words-'+letter.toLowerCase()+'.json');
    return loadCommonWords(cw.data, word, asobject);
  }

  function loadWordsOnly(words0, word, asobject) {
    let words;
    if (Array.isArray(words0)) {
      words = words0;
    } else {
      words = [].concat(Object.keys(words0));
    }
    words.sort();

    let result = {
      word,
      noWords: words.length,
      results: words
    };
    let cjson;
    if (asobject) {
      return result;
    } else {
      cjson = JSON.stringify(result);
      return cjson;
    }
  }

  function loadCommon3000_words(word, asobject) {
    let cw1 = loadJson('data/common-words-3000-a-e.json');
    let cw2 = loadJson('data/common-words-3000-f-p.json');
    let cw3 = loadJson('data/common-words-3000-q-z.json');
    let TheMostCommon3000 = Object.assign({}, cw1.data, cw2.data, cw3.data);
    return loadWordsOnly(TheMostCommon3000, word, asobject);
  }

  function loadCommon10000_words(word, asobject) {
    let cw1 = loadJson('data/common-words-10000-a-c.json');
    let cw2 = loadJson('data/common-words-10000-d-h.json');
    let cw3 = loadJson('data/common-words-10000-i-o.json');
    let cw4 = loadJson('data/common-words-10000-p-r.json');
    let cw5 = loadJson('data/common-words-10000-s-z.json');
    let TheMostCommon10000 = Object.assign({}, cw1.data, cw2.data, cw3.data, cw4.data, cw5.data);
    return loadWordsOnly(TheMostCommon10000, word, asobject);
  }


  async function loadAll_words(word0, asobject, fromtime = 0) {
    let allwords0 = [];
    /*function onFile(strPath, stat) {
      let word = strPath.substring(TWELVE);
      allwords0.push(word);
    }
    await finder.findFiles(`${CACHE_DIR}/words`, fromtime, onFile);*/
    const totwords = loadCaggleFrequencies();

    allwords0.push.apply(allwords0, Object.keys(totwords));

    return loadWordsOnly(allwords0, word0, asobject);
  }


  function loadMyWords(word, letter, asobject) {
    let cw1 = loadJson('data/my-words-'+letter.toLowerCase()+'.json');
    return loadWordsOnly(cw1.data, word, asobject);
  }

  async function wordsByFrequency(word0, ffrom, fto = 1000000, asobject) {
    let files = [];
    const indpath = `cache/index/frequency`;

    let ijson = fs.readFileSync(resolvePath.abs(indpath));
    let find = JSON.parse(ijson);

    let words0 = [];
    let notf = 0, fit = 0;

    for (let df in find) {
      let a = find[df];
      if (ffrom <= df && df <= fto) {
        words0.push.apply(words0, a);
        fit += a.length;
      } else {
        notf += a.length;
      }
    }

    console.log(API, "Items fit:" + fit + " nonfit:" + notf + " tot:" + (fit + notf));

    return loadWordsOnly(words0, word0, asobject);
  }



  async function loadAllFromFileCache() {
    console.time('parse file cache');
    let files = [];
    async function onFile(strPath, stat) {
      let word = strPath.substring(TWELVE);
      files.push(word);
    }
    let nowords = await finder.findFiles(`${CACHE_DIR}/words`, 0, onFile);


    let cntf = 0;
    let byf = Object.create(null);
    let byword = Object.create(null);
    function entry(f) {
      let es = byf[f];
      if (!es) {
        byf[f] = es = [];
        cntf++;
      }
      return es;
    }
    let chkFile = async function (word) {
      let data = await loadSingleWord(word, true, CACHE_RAW);
      if (data) {
        let df = data.frequency ? data.frequency : 0;
        byword[word] = data;
        entry(df).push(word);
      }
    };

    let promises = [];
    for (let file of files) {
      promises.push(chkFile(file));
    }
    await Promise.all(promises);
    console.timeEnd('parse file cache');

    return { byf, byword, cntf, nowords };
  }

  function collectFileFrequencies() {
    let result = loadAllFromFileCache();

    return result;
  }

  let existingGoogleWords;
  function loadGoogleWords() {
    if (!existingGoogleWords) {
      existingGoogleWords = Object.create(null);
      function split(line, lineNumber) {
        return [line];
      }
      const gglwords = csvParse.load(
        resolvePath.abs("data/english_.csv"),
        { getColumns: split });
      for (let gglword of gglwords) {
        existingGoogleWords[gglword.word] = 1;
      }
    }
    return existingGoogleWords;
  }

  function doesGoogleWordExist(word) {
    loadGoogleWords();
    return existingGoogleWords[word];
  }

  let caggleFreqRecords;
  let caggleFrequencies;
  function loadCaggleFrequencies() {
    if (!caggleFreqRecords) {
      caggleFreqRecords = csvParse.load(
        resolvePath.abs("data/unigram_freq.csv"),
        {
          convert: {
            count: parseInt
          }
        });

      caggleFrequencies = Object.create(null);

      for (let frec of caggleFreqRecords) {
        if (doesGoogleWordExist(frec.word)) {
          caggleFrequencies[frec.word] = frec.count;
        }
      }
    }
    return caggleFrequencies;
  }

  function getWordCaggleFrequency(word) {
    loadCaggleFrequencies();
    return caggleFrequencies[word];
  }

  async function invertFrequencies() {
    try {

      loadCaggleFrequencies();

      //records.splice(0, 1);
      let nowords = 0;

      let cntf = 0;
      let byf = Object.create(null);
      function entry(f) {
        nowords++;
        let es = byf[f];
        if (!es) {
          byf[f] = es = [];
          cntf++;
        }
        return es;
      }
      for (let frec of caggleFreqRecords) {
        if (doesGoogleWordExist(frec.word)) {
          entry(frec.count).push(frec.word);
        }
      }

      return { byf, cntf, nowords };

    } catch (e) {
      console.error("csv error", e);
      process.exit(1);
    }
  }

  async function generateIndexes() {

    //wordsapi works
    //let {byf, cntf, nowords} = await collectFileFrequencies();
    let { byf, cntf, nowords } = await invertFrequencies();

    var fkeys = [].concat(Object.keys(byf));
    // descending order !!
    fkeys.sort((a, b) => Number(b) - Number(a));
    var byfs = Object.create(null);
    for (let f of fkeys) {
      let es = byf[f];
      byfs[f] = es;
      es.sort();
    }

    console.log(API, "Frequency indexes:" + cntf + "  of no.words:" + nowords);

    function quantilize(size) {
      let wcnt = 0;
      let fqcnt = 0;
      let buckets = ["Number.MAX_SAFE_INTEGER"];
      let pf = 100.005;
      let pfstr = "Number.MAX_SAFE_INTEGER";
      function buck(f, endstr) {
        console.log(API, "Frequency: " + f + ".." + endstr + "  words:" + wcnt + "  freqs:" + fqcnt);
        buckets.push(f);
        fqcnt = 0;
        wcnt = 0;
        pf = f;
        pfstr = (pf - 0.005).toFixed(3);
      }
      let len = fkeys.length;
      let i = 0;
      for (let f of fkeys) {
        ++i;
        f = Number(f);
        let es = byfs[f];
        fqcnt++;
        wcnt += es ? es.length : 0;

        if (i == len) {
          buck(0, pfstr);
        } else {
          if (wcnt >= size) {
            buck(f, pfstr);
          }
        }

      }

      console.log(API, "Frequency:..  cnt:" + wcnt);
      let result = "var frqntls" + size + "=[" + buckets.join(", ") + "];"
      console.log(API, result + "\n");
      return result;
    }
    let q1 = quantilize(800);
    let q2 = quantilize(3000);
    let q3 = quantilize(10000);

    const indpath = `cache/index/frequency`;
    const clindpath = `public/js/frequency.js`;
    const djson = JSON.stringify(byfs);

    console.log(API, "Saving cache file/index " + indpath);
    fs.writeFileSync(resolvePath.abs(indpath), djson);

    console.log(API, "Saving client index " + clindpath);
    let clfq = `

    ${q1}
    ${q2}
    ${q3}

    var frqntlses = {
      800:frqntls800, 3000:frqntls3000, 10000:frqntls10000
    };
      `
    fs.writeFileSync(resolvePath.abs(clindpath), clfq);

  }

  function write(filename, buffers) {
    var stream = fs.createWriteStream(filename, {flags:'w'});
    for (let buf of buffers) {
      stream.write(buf);
    }
    stream.end();
  }

  function writeStarDictOutput(filename, keys, byword) {
    let indexbuf = [];
    let dictbuf = [];
    let dictoffset = 0;
    for (let word of keys) {
      //let word = buf.toString('utf-8', beg, i)
      //let offset = buf.readUInt32BE(i)
      //let size = buf.readUInt32BE(i)
      let worddata = byword[word];

      let json = JSON.stringify(worddata);

      let dictbuf1 = Buffer.from(json, 'utf-8');
      let size = dictbuf1.byteLength;

      let indexbuf1 = Buffer.alloc(8);
      indexbuf1.writeInt32BE(dictoffset);
      indexbuf1.writeInt32BE(size, 4);

      dictoffset+= size;

      dictbuf.push(dictbuf1);
      indexbuf.push(indexbuf1);
    }

    console.log("Write stardict "+filename);
    write(filename+".dict", dictbuf);
    write(filename+".idx", indexbuf);
  }

  function loadStarDict(filename) {
    console.log("Read stardict "+filename);
    let noinput=0;
    if (!fs.existsSync(filename+".dict")) {
      console.log(filename+".dict doesn't exist ");
      noinput=1;
    }
    if (!fs.existsSync(filename+".idx")) {
      console.log(filename + ".idx doesn't exist ");
      noinput=1;
    }

    let keys=[], values=[], byword = Object.create(null);

    if (!noinput) {

      let dictbuf = fs.readFileSync(filename+".dict");
      let indexbuf = fs.readFileSync(filename+".idx");

      let i = 0;
      let index = 0;
    
      while (i < indexbuf.length) {
    
        let beg = i;
        i = indexbuf.indexOf('\x00', beg);
        if (i < 0) {
          throw new Error('Index file is corrupted.');
        }
    
        let word = indexbuf.toString('utf-8', beg, i);
        keys.push(word);
        i++;
        if (i + 8 > indexbuf.length) {
          throw new Error('Index file is corrupted.');
        }
    
        let offset = indexbuf.readUInt32BE(i);
        i += 4;
        let size = indexbuf.readUInt32BE(i);
        i += 4;

        let json = dictbuf.toString("utf-8", offset, offset+size);
        let worddata = JSON.parse(json);
        byword[word] = worddata;
        values.push(worddata);

        index++;
      }
    }

    return {keys, values, byword};
  }

  let stardict_words, stardict_defs, stardict_defs_by_ind, stardict_errors;
  function loadStarDictAll() {
    if (!stardict_words || !stardict_defs || !stardict_errors) {
      console.time("load StarDict datafiles");
      if (!stardict_words) stardict_words = loadStarDict(`${CACHE_DIR}/${API}-english-words`);
      if (!stardict_defs) stardict_defs = loadStarDict(`${CACHE_DIR}/${API}-english-definitions`);
      if (!stardict_errors) stardict_errors = loadStarDict(`${CACHE_DIR}/${API}-english-errors`);
      console.timeEnd("load StarDict datafiles");
    }
  }

  function convertFileCacheToIntermediate(byword) {
    let result = {
      word: {},
      meaning: {},
      error: {}
    };

    for (let word in byword) {
      let worddata = byword[word];

      if (worddata.error) {
        let worddata2 = Object.create(null);
        result.word[word] = worddata2;
        let e = result.error[worddata.error];
        if (!e) {
          result.error[worddata.error] = e = Object.create(null);
        }
        worddata2.errortmp = e;
      } else {
        result.word[word] = worddata;

        worddata.meaningstmp = [];
        for (let defidx in worddata.results) {
          let def = worddata.results[defidx];
          let olddef = result.meaning[def.definition];
          if (olddef) {
            olddef.synonymSet[word] = 1;
            def = olddef;
          } else {

            // definition, synonyms, ...
            result.meaning[def.definition] = def;
            if (!def.synonymSet) {
              def.synonymSet = Object.create(null);
              def.synonymSet[word] = 1;
              if (def.synonyms) {
                for (let s of def.synonyms) def.synonymSet[s] = 1;
              }
            }
          }
          delete def.definition;
          worddata.meaningstmp.push(def);
        }
        delete worddata.results;
      }
    }

    return result;
  }

  function mergeIntermediate(stage1) {
    for (let s in stardict_words.byword) stage1.word[s] = stardict_words.byword[s];
    for (let s in stardict_defs.byword) stage1.meaning[s] = stardict_defs.byword[s];
    for (let s in stardict_errors.byword) stage1.error[s] = stardict_errors.byword[s];
  }

  async function updateStarDict() {

    loadStarDictAll();

    let { byf, byword, cntf, nowords } = await loadAllFromFileCache();

    console.time('stage1');
    let stage1 = convertFileCacheToIntermediate(byword);
    mergeIntermediate(stage1);
    console.timeEnd('stage1');

    console.time('stage2');
    let stage2 = {

    };
    stage2.sortedwords = [].concat(Object.keys(stage1.word));
    stage2.sortedwords.sort();
    stage2.sorteddefs = [].concat(Object.keys(stage1.meaning));
    stage2.sorteddefs.sort();
    stage2.sortederrors = [].concat(Object.keys(stage1.error));
    stage2.sortederrors.sort();
    let i = 0;
    for (let def of stage2.sorteddefs) {
      stage1.meaning[def].synind = i++;
    }
    i = 0;
    for (let err of stage2.sortederrors) {
      stage1.error[err].errind = i++;
    }
    for (let word of stage2.sortedwords) {
      let worddata = stage1.word[word];
      if (worddata.errortmp) {
        worddata.errind = worddata.errortmp.errind;
        delete worddata.errortmp;
      } else {
        worddata.syninds = [];
        for (let defdata of worddata.meaningstmp) {
          worddata.syninds.push(defdata.synind);
        }
        delete worddata.meaningstmp;
      }
    }
    console.log("words:",stage2.sortedwords.length,
        "defs:",stage2.sorteddefs.length,
        "errors:",stage2.sortederrors.length);
    console.timeEnd('stage2');

    console.time('write stardict output');
    writeStarDictOutput(`${CACHE_DIR}/${API}-english-words`, stage2.sortedwords, stage1.word);
    writeStarDictOutput(`${CACHE_DIR}/${API}-english-definitions`, stage2.sorteddefs, stage1.meaning);
    writeStarDictOutput(`${CACHE_DIR}/${API}-english-errors`, stage2.sortederrors, stage1.error);
    console.timeEnd('write stardict output');

  }

  return {
    isApiLimitReached, initCrawler, loadJson,
    singleWordToDisplay, loadSingleWord, traverseCluster, loadCluster, loadCommonWords, loadCommonWordsLetter,
    loadCommonWords3000_a_e, loadCommonWords3000_f_p, loadCommonWords3000_q_z, loadCommonWords10000_a_c,
    loadCommonWords10000_d_h, loadCommonWords10000_i_o, loadCommonWords10000_p_r,
    loadCommonWords10000_s_z, loadCommonWords3000, loadCommonWords10000, loadCommon3000_words,
    loadCommon10000_words, loadAll_words, loadMyWords, loadMyWordCls, wordsByFrequency, generateIndexes,
    loadGoogleWords, loadCaggleFrequencies, doesGoogleWordExist, getWordCaggleFrequency, 
    loadAllFromFileCache, updateStarDict
  };
}
