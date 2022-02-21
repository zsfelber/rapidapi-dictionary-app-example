const fs = require("fs");
const finder = require("./finder.js");
const csvParse = require("csv-load-sync");
const stardict = require("./stardict");
const { result } = require("lodash");

const API_LIMIT_EXCEPTION = {
  apiLimitException: 1,
};
const noResolvePath = {
  rel: function (dirname, rel) {
    return "./" + rel;
  },
  abs: function (rel) {
    return rel;
  },
};

function poorsolutioncallbackToPromise(therawfun, ...args0) {
  return new Promise((a, r) => {
    let poorsolutioncallback = function (err, buffer) {
      if (err) {
        console.log(err);
        r(err);
      } else {
        a(buffer);
      }
    };
    let args = args0.concat([poorsolutioncallback]);
    therawfun.apply(this, args);
  });
}

function removearritm(arr, itm) {
  for (let i = 0; i < arr.length;) {
    if (arr[i] === itm) {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
}

let staticCache = { langs: {} };

function getLangCache(lang) {
  let langCache = staticCache.langs[lang];
  if (!langCache) staticCache.langs[lang] = langCache = { apis: {} };
  return langCache;
}

function getCacheFor(lang, api) {
  let langCache = getLangCache(lang);

  let c = langCache.apis[api];
  if (!c) langCache.apis[api] = c = {};
  return c;
}

exports.aCrawler = function (
  LANG, API,
  API_DAILY_LIMIT,
  MAX_WORDS,
  MAX_NODE_FREQUENCY,
  TRAVERSE_ALL,
  MAX_LEVEL = 100,
  resolvePath
) {


  const DATA_DIR = "data/" + LANG;
  const CACHE_DIR = "cache/" + LANG;
  const CACHE_DIR_API = CACHE_DIR + "/" + API;

  const langCache = getLangCache(LANG);
  const apiCache = getCacheFor(LANG, API);

  const TWELVE = (CACHE_DIR_API + "/words/").length;
  if (!resolvePath) resolvePath = noResolvePath;

  const TURNING_TIME_GMT = [20, 55];
  const MAX_PARALLEL = 1;

  let download, curtime, turntime;

  let cacheInitializerCommon;
  let cacheIsInitialized = false;
  let pendingParallelRequests = 0;
  let admittedParallelRequests = 0;
  let totalWordsLastDay = 0;
  let cacheInitIsError = false;

  let pendingObjects = {};

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
    return { f, json, data };
  }
  async function parallelBottleneck() {
    pendingParallelRequests++;
    if (!(pendingParallelRequests % 1000)) {
      console.log(
        API,
        "++pendingParallelRequests:" +
        pendingParallelRequests +
        " admittedParallelRequests:" +
        admittedParallelRequests
      );
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
        cacheInitializerCommon = finder.findFiles(
          `${CACHE_DIR_API}/words`,
          turntime
        );
        totalWordsLastDay = await cacheInitializerCommon;
        cacheIsInitialized = true;
        console.log(
          API,
          "remoteInitBottleneck  turntime:" +
          turntime.toUTCString() +
          "  totalWordsLastDay:" +
          totalWordsLastDay +
          " of API limit " +
          API_DAILY_LIMIT +
          " errors:" +
          finder.vars.errors +
          " pendingParallelRequests:" +
          pendingParallelRequests +
          " admittedParallelRequests:" +
          admittedParallelRequests
        );
      } else {
        await cacheInitializerCommon;
      }
    }

    if (isApiLimitReached()) {
      if (!cacheInitIsError) {
        console.error(
          API,
          "Could not proxy more request to API file/single  totalWordsLastDay+" +
          pendingParallelRequests +
          " >= API_DAILY_LIMIT :  " +
          (totalWordsLastDay + pendingParallelRequests) +
          " >= " +
          API_DAILY_LIMIT +
          "\n"
        );
      }
      cacheInitIsError = true;
      return false;
    } else {
      totalWordsLastDay++;
      if (!(totalWordsLastDay % 1000))
        console.log(
          API,
          totalWordsLastDay + " of API limit " + API_DAILY_LIMIT
        );
      return true;
    }
  }

  function isApiLimitReached(pendingBeforeRequest = 0) {
    if (cacheIsInitialized) {
      if (cacheInitializerCommon) {
        return (
          totalWordsLastDay + pendingParallelRequests + pendingBeforeRequest >=
          API_DAILY_LIMIT
        );
      } else {
        return false;
      }
    } else {
      return pendingParallelRequests + pendingBeforeRequest >= API_DAILY_LIMIT;
    }
  }

  function initCrawler() {

    switch (LANG) {
      case "en": {
        langCache.NAME = "english";
        langCache.COLLOC = "stardict-OxfordCollocationsDictionary-2.4.2";
        langCache.COLLOC_DIR = `../${DATA_DIR}/dict/${langCache.COLLOC}/res/`;
        // caggle freq records
        langCache.FREQ_CSV = `unigram_freq.csv`;
        langCache.WORD_LIST = "english_.csv";
        langCache.COMMON_WORDS_10000 = "common-words-10000.json";
        langCache.COMMON_WORDS_5000 = "common-words-5000.txt";

      }
        break;
      case "de": {
        // https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#German
        langCache.NAME = "german";
        langCache.FREQ_LIST = `german_wordlist_300k_most_frequent_from_web.txt`;
        langCache.WORD_LIST = `german_wordlist_300k_most_frequent_from_web.txt`;
        langCache.COMMON_WORDS_5000 = "common-words-5000.txt";

      }
        break;
    }

    switch (API) {
      case "google": {
        const googleDictionary =
          require("./googletransapi/google_dict").googleDictionary;
        download = function (word) {
          return googleDictionary(word, LANG);
        }
      }
        break;
      case "wordsapi":
        download = require("./wordsapi/wordapi_dict").wordsApiDictionary;
        break;
      default:
        throw "API is not supported : " + API;
    }

    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR_API}/words`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR_API}/words`), { recursive: true });
    }
    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR_API}/clusters`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR_API}/clusters`));
    }
    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR}/index`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR}/index`));
    }
    if (!fs.existsSync(resolvePath.abs(`${CACHE_DIR_API}/dict/${API}-${langCache.NAME}`))) {
      fs.mkdirSync(resolvePath.abs(`${CACHE_DIR_API}/dict/${API}-${langCache.NAME}`), { recursive: true });
    }

    curtime = new Date();
    turntime = Date.UTC(
      curtime.getUTCFullYear(),
      curtime.getUTCMonth(),
      curtime.getUTCDate(),
      TURNING_TIME_GMT[0],
      TURNING_TIME_GMT[1]
    );
    // 86400000 milliseconds (24 hours)
    if (curtime < turntime) {
      turntime = new Date(turntime - 86400000);
    } else {
      turntime = new Date(turntime);
    }

    initializeCache();

    console.log(
      API,
      "initCrawler  curtime:" +
      curtime.toUTCString() +
      "  turntime:" +
      turntime.toUTCString()
    );
  }

  function initializeCache() {
    loadExistingWordsAndFreqs();
    loadNativeStarDictAll();
    load3rdPartyStarDicts();
  }

  function singleWordToDisplay(data) {
    // create new array to push data to
    let results = [];
    let result = {
      word: data.word,
      results,
      etc: "",
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
      result.frequency = data.frequency + "(" + API + ")";
      result.dataFrequency = data.frequency;
    }

    if (data.results)
      data.results.map((def) => {
        let definitionArray = [];
        let definition = {
          partOfSpeech: def.partOfSpeech,
          properties: definitionArray,
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
        addif(skeys, "synonymsGroup");
        addif(skeys, "antonyms");

        delete therest["examples"];
        delete therest["synonymSet"];
        delete therest["defind"];

        const more = Object.keys(therest);
        more.sort();
        skeys.push.apply(skeys, more);

        const skeys2 = [];
        addif(skeys2, "examples");
        skeys.push.apply(skeys, skeys2);

        skeys.map((key) => {
          // builds regex that looks for capital letters
          // The response parameters are in camelCase, so we need to ID
          // the capital letters and add spaces instead so the
          // front end can easily display the parameter labels
          const regex = /(?=[A-Z])/;

          // creates presentable label
          const label = key.split(regex).join(" ").toLowerCase();

          // grabs the value for the parameter from the
          // definition object in response
          const value = def[key];

          // constructs new object to send to frontend
          let newObj = {
            label,
            value,
            isString: typeof value === "string" ? true : false,
          };

          definitionArray.push(newObj);
        });

        results.push(definition);
      });

    return result;
  }

  const CACHE_RAW = new Object({ cache: "raw" });
  async function loadSingleWord(word, asobject, cachedonly = false) {
    let fileword = word.replace(/[.,/']/g, "$").toLowerCase();
    const wfpath = `${CACHE_DIR_API}/words/${fileword}`;

    let data, djson;

    function convertResult(fromCache, encode) {
      if (encode) {
        djson = JSON.stringify(data); // original
      }
      if (asobject) {
        data.fromCache = fromCache;
        return data;
      } else {
        let result = singleWordToDisplay(data);
        const ojson = JSON.stringify(result); // modified
        return ojson;
      }
    }
    function finish() {
      pendingParallelRequests--;
      admittedParallelRequests--;
      if (pendingParallelRequests && !(pendingParallelRequests % 1000)) {
        console.log(
          API,
          "--pendingParallelRequests:" +
          pendingParallelRequests +
          " admittedParallelRequests:" +
          admittedParallelRequests
        );
      }
    }
    function convertError() {
      if (cachedonly === CACHE_RAW) {
        data = {
          error: data.error
            ? data.error.message
              ? data.error.message
              : data.error
            : "unknown error",
        };
        if (/no definitions for \{"/.test(data.error)) {
          data.error = "no definitions for word";
          console.log(
            "Convert error message : no definitions for word:" + word
          );
        }
      } else {
        data = null;
      }
      return data;
    }

    loadNativeStarDictAll();

    let itm;
    if ((itm = apiCache.stardict_words.find(word))) {
      data = Object.assign({}, itm.data);
      if (data.errind) {
        data.error = apiCache.stardict_errors.get(data.errind).word;
        console.warn(
          "StarDict data is of an error entry : " + word,
          " ",
          data.error
        );
        data = convertError();
        return data;
      } else {
        data.results = [];
        data.word = itm.word;
        if (data.definds)
          for (let meanind of data.definds) {
            let d0 = apiCache.stardict_defs.get(meanind);
            let def = Object.assign({}, d0.data);
            if (!def.synonyms && def.synonymSet) {
              delete def.synonymSet[itm.word];
              def.synonyms = [].concat(Object.keys(def.synonymSet));
              def.synonyms.sort();
            }
            if (!def.definition) {
              def.definition = d0.word;
            }
            data.results.push(def);
          }
        return convertResult(true);
      }
    }

    if (fs.existsSync(resolvePath.abs(wfpath))) {
      // debug check
      //data = { word, results: [{ definition: "ah snap!" }] };

      if (cachedonly !== CACHE_RAW)
        console.log(
          API,
          "From cache file/single " +
          wfpath +
          "  asobject:" +
          asobject +
          "...\n"
        );

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
        if (
          data.error ==
          "Sorry pal, you were just rate limited by the upstream server."
        ) {
          console.warn("Delete rate limit error ...  retry ...  " + wfpath);
          fs.unlinkSync(resolvePath.abs(wfpath));
          data = null;
        } else if (/^Cannot read properties/.test(data.error)) {
          console.warn(
            "Delete Cannot read properties error ...  retry ...  " + wfpath
          );
          fs.unlinkSync(resolvePath.abs(wfpath));
          data = null;
        } else {
          console.warn(
            "File is of an error entry : " + wfpath,
            " ",
            data.error
              ? data.error.message
                ? data.error.message
                : data.error
              : "unknown error"
          );
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
      console.warn(
        "Error (",
        API,
        '"' + word + '"',
        ") ",
        e && e.message ? e.message : "?"
      );
      return null;
    } finally {
      if (!sliding) finish();
    }

    try {
      console.info(
        `ENTER http download      ${API} "${word}"   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`
      );

      pendingObjects[word] = download(word);

      data = await pendingObjects[word];

      console.info(
        `DONE  http download      ${API} "${word}"   pending:${pendingParallelRequests} admitted:${admittedParallelRequests}`
      );

      // keep fromCache=false in this instance only
      data = Object.assign({}, data);

      return convertResult(false, true);
    } catch (e) {
      console.warn(
        "API error (",
        API,
        '"' + word + '"',
        ") ",
        e && e.message ? e.message : "?"
      );
      djson = JSON.stringify({ error: e.message });
      return null;
    } finally {
      fs.writeFile(resolvePath.abs(wfpath), djson, (err) => {
        if (err) {
          console.error(
            "Cache file/single " +
            wfpath +
            "  asobject:" +
            asobject +
            " pendingParallelRequests:" +
            pendingParallelRequests +
            " admittedParallelRequests:" +
            admittedParallelRequests +
            " write failure : " +
            err +
            "\n"
          );
        } else {
          console.log(
            "Cache file/single " +
            wfpath +
            "  asobject:" +
            asobject +
            " pendingParallelRequests:" +
            pendingParallelRequests +
            " admittedParallelRequests:" +
            admittedParallelRequests +
            " written successfully\n"
          );
        }
        delete pendingObjects[word];
      });

      finish();
    }
  }

  class DefinitionNode {
    entry;
    val;
    partOfSpeech;
    definition;
    synonyms;
    similar;
    word;
    examples;
    examplesTmp;
    key;

    constructor(entry, val) {
      this.entry = entry;
      this.val = val;

      this.definition = val.definition;
      this.synonyms = [];
      this.similar = [];
      this.examplesTmp = Object.create(null);

      this.word = this.entry.word;
      this.partOfSpeech = this.val.partOfSpeech;
      this.synonyms.push.apply(this.synonyms, this.val.synonyms);
      if (!this.val.synonymSet || !this.val.synonymSet[this.word]) {
        this.synonyms.push(this.word);
      }
      this.synonyms.sort();

      this.similar.push.apply(this.similar, this.val.similarTo);
      this.similar.sort();

      this.addExamples(this.val.examples);

      this.key =
        this.word +
        ":::::::" +
        this.synonyms.length +
        ":::::::" +
        this.synonyms.join(", ") +
        "::::::" +
        this.definition;
    }

    addExamples(examples) {
      if (examples)
        for (let x of examples) {
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
    level;
    defkey;
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

      this.defkey =
        this.synonyms.length +
        "::::::" +
        this.synonyms.join(", ") +
        "::::::" +
        this.definition;
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
  }

  function appendTo(array, itemOrArray) {
    if (Array.isArray(itemOrArray)) {
      array.push.apply(array, itemOrArray);
    } else if (itemOrArray) {
      array.push(itemOrArray);
    }
  }

  async function checkAPIlimitAndFinish(promises) {
    let remainingApiLimit =
      API_DAILY_LIMIT - (totalWordsLastDay + pendingParallelRequests);
    if (promises.length < remainingApiLimit) {
      return true;
    } else {
      await Promise.all(promises);
      remainingApiLimit =
        API_DAILY_LIMIT - (totalWordsLastDay + pendingParallelRequests);
      promises = [];
      return remainingApiLimit > 0;
    }
  }

  async function loadDictionaryAndChildren(
    tresult,
    word,
    traversion,
    parentNode,
    loadChildren
  ) {
    if (!parentNode && !loadChildren) {
      return true;
    }

    const by_def = tresult.by_def;
    const entry = await loadSingleWord(word, true);

    if (entry && !entry.fromCache) {
      tresult.newWords++;
    }
    if (
      !entry ||
      (traversion.level > 1 &&
        entry.frequency &&
        entry.frequency >= MAX_NODE_FREQUENCY)
    ) {
      return true;
    }

    for (let key in entry.results) {
      const val = entry.results[key];
      if (parentNode && val.definition == parentNode.definition) {
        parentNode.addExamples(val.examples);
        if (!loadChildren) break;
      }

      if (loadChildren) {
        let node = new ClusterDefinitionNode(
          by_def,
          entry,
          val,
          traversion.level
        );
        for (let word of node.words) {
          let pair = { parent: node, word };
          traversion.wordsbreadthfirst.push(pair);
        }
      }
    }

    return true;
  }

  async function traverseCluster(
    tresult,
    word,
    themainabstraction = true,
    stopwhenallloaded = false
  ) {
    let traversion = {
      level: 1,
      wordsbreadthfirst: [{ word }],
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

            if (!(tresult.noWords % 1000))
              console.log(API, tresult.noWords + "/" + MAX_WORDS);
          }

          if (traversion.level >= MAX_LEVEL) {
            console.log(
              API,
              word +
              " Level " +
              traversion.level +
              " >= " +
              MAX_LEVEL +
              ". Stop unfolding children."
            );
            loadChildren = false;
          }

          let nodepromise = loadDictionaryAndChildren(
            tresult,
            w,
            traversion,
            pair.parent,
            loadChildren
          );
          promises.push(nodepromise);

          if (stopwhenallloaded && !(await checkAPIlimitAndFinish(promises))) {
            console.log(
              API,
              word +
              " Level " +
              traversion.level +
              " finished. Stop searching. API Limit reached."
            );
            return false;
          }
          if (tresult.noWords >= MAX_WORDS) {
            await Promise.all(promises);
            if (themainabstraction)
              console.log(
                API,
                '"' +
                word +
                '"' +
                " Level " +
                traversion.level +
                " finished. Search limit reached."
              );
            return true;
          }
        }
      } catch (e) {
        if (e === API_LIMIT_EXCEPTION) {
          console.log(
            API,
            '"' +
            word +
            '"' +
            " Level " +
            traversion.level +
            " finished. API Limit reached (by exception)."
          );
          return false;
        } else {
          throw e;
        }
      }

      await Promise.all(promises);
      if (themainabstraction)
        console.log(
          API,
          '"' + word + '"' + " Level " + traversion.level + " finished."
        );

      traversion.level++;
    } while (traversion.wordsbreadthfirst.length);

    if (themainabstraction) {
      console.log(
        API,
        '"' +
        word +
        '"' +
        " Completed  Travesred:" +
        tresult.noWords +
        " written:" +
        tresult.newWords
      );
    }
    return true;
  }

  async function loadCluster(word, asobject) {
    const by_def = Object.create(null);
    const by_w = Object.create(null);
    const by_key = [];
    let tresult = {
      by_def,
      by_w,
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
      results: by_key,
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

  async function loadCommonWordCluster(result, word, noWords) {
    const entry = await loadSingleWord(word, true);

    if (entry) {
      if (!entry.fromCache) {
        result.newWords++;
      }

      result.noWords++;
      if (!(result.noWords % 1000))
        console.log(API, result.noWords + "/" + noWords);

      for (let key in entry.results) {
        const val = entry.results[key];

        const definitionNode = new DefinitionNode(entry, val);

        let promises = [];
        try {
          for (let syn of val.synonyms ? val.synonyms : []) {
            let nodepromise = loadDictionaryAndChildren(
              result,
              syn,
              { level: 0 },
              definitionNode,
              false
            );
            promises.push(nodepromise);
          }
          await Promise.all(promises);
        } catch (e) {
          if (e === API_LIMIT_EXCEPTION) {
            console.log(
              API,
              '"' +
              word +
              '"' +
              " Level " +
              traversion.level +
              " finished. API Limit reached (by exception)."
            );
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

  async function loadCommonWordClusters(words, word, asobject) {
    // create new array to push data to
    let results = [];
    let result = {
      word,
      noWords: 0,
      newWords: 0,
      noDefinitions: 0,
      results,
    };

    let promises = [];
    let noWords = Object.keys(words).length;
    for (let commonWord in words) {
      let cwpromise = loadCommonWordCluster(result, commonWord, noWords);
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

    console.log(
      API,
      " Common words query processed  Travesred:" +
      result.noWords +
      " written:" +
      result.newWords
    );

    let cjson;
    if (asobject) {
      return result;
    } else {
      cjson = JSON.stringify(result);
      return cjson;
    }
  }

  function loadCommonWordClustersLetter(words, word, letter, asobject) {
    let ofLetter = Object.create(null);
    let lc = letter.toLowerCase();
    for (let w of Object.keys(words)) {
      if (w[0].toLowerCase() == lc) {
        ofLetter[w] = 1;
      }
    }
    return loadCommonWordClusters(ofLetter, word, asobject);
  }

  function loadWordsOnly(words0, word, asobject) {
    let words;
    if (Array.isArray(words0)) {
      words = words0;
    } else {
      words = [].concat(Object.keys(words0));
    }
    words.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase(), LANG));

    let result = {
      word,
      noWords: words.length,
      results: words,
    };
    let cjson;
    if (asobject) {
      return result;
    } else {
      cjson = JSON.stringify(result);
      return cjson;
    }
  }

  function loadCommonWordsFrom(file, howmany) {
    let cw1;
    if (!file) {
      return null;
    }
    if (/\.json$/.test(file)) {
      cw1 = loadJson(DATA_DIR + "/" + file);
    } else if (/\.txt$/.test(file)) {
      let cw0 = loadHeadless1ColCsv(DATA_DIR + "/" + file);
      if (cw0.length > howmany + 100) {
        cw0 = cw0.slice(0, howmany + 100);
      }
      cw1 = {};
      for (let w of cw0) {
        cw1[w] = 1;
      }
    }
    delete cw1[""];
    return cw1;
  }
  function loadCommonWords(howmany) {
    let r;
    if (howmany > 5000 && langCache.COMMON_WORDS_10000) {
      r = loadCommonWordsFrom(langCache.COMMON_WORDS_10000, howmany);
    }
    if (!r && langCache.COMMON_WORDS_5000) {
      r = loadCommonWordsFrom(langCache.COMMON_WORDS_5000, howmany);
    }
    if (!r) r = {}
    return r;
  }

  function loadCommon3000_words(word, asobject) {
    let cw1 = loadCommonWords(3000);
    return loadWordsOnly(cw1, word, asobject);
  }

  function loadCommon5000_words(word, asobject) {
    let cw1 = loadCommonWords(5000);
    return loadWordsOnly(cw1, word, asobject);
  }

  function loadCommon10000_words(word, asobject) {
    let cw1 = loadCommonWords(10000);
    return loadWordsOnly(cw1, word, asobject);
  }


  function getAllWords() {
    let allwords0 = [];
    const totwords = loadExistingWordsAndFreqs();

    allwords0.push.apply(allwords0, Object.keys(totwords));
    return allwords0;
  }


  async function getAllDefinitions() {

    loadNativeStarDictAll();
    let sd_defs_data = apiCache.stardict_defs.readall();

    let defs1 = [];
    for (let value of sd_defs_data) {
      if (value.data && value.word) {
        //removearritm(value.data.similar, null);
        defs1.push({ synonymSet: value.data.synonymSet, similar: value.data.similar, examples: value.data.examples, definition: value.word });
      }
    }

    let { byf, byword, cntf, nowords } = await loadAllFromFileCache();
    let stage2_1 = convertFileCacheToIntermediate(byword);

    let defs2 = [];
    for (let definition in stage2_1.meaning) {
      let data = stage2_1.meaning[definition];
      if (definition && data) {
        //removearritm(data.similar, null);
        defs2.push({ synonymSet: data.synonymSet, similar: data.similar, examples: data.examples, definition });
      }
    }

    let alldefs0 = defs1.concat(defs2);


    return alldefs0;
  }

  async function findPhrases(word, options) {
    let { in_words, in_meanings, in_examples,
      per_word, lstar, rstar, all_words } = options;
    let matcher;

    function matchword(cycletext, matcherword) {
      if (!cycletext) {
        console.log("!cycletext");
        return false;
      }
      if (!matcherword) {
        console.log("!matcherword");
        return false;
      }
      cycletext = cycletext.toLowerCase();
      matcherword = matcherword.toLowerCase();
      let i = cycletext.indexOf(matcherword);
      if (i == -1 && !per_word) {
        if (matcherword[0] == " ") {
          let matcherword2 = matcherword.trimLeft();
          let i2 = cycletext.indexOf(matcherword2);
          if (i2 == 0) {
            return true;
          }
        }
        if (matcherword[matcherword.length - 1] == " ") {
          let matcherword2 = matcherword.trimRight();
          let rev2 = cycletext.length - matcherword2.length;
          let i2 = cycletext.indexOf(matcherword2);
          if (i2 != -1) {
            if (i2 == rev2) return true;
            let nextchar = cycletext[i2 + matcherword2.length];
            if (/[^a-zA-Z0-9]/.test(nextchar)) {
              return true;
            }
          }
        }
      }
      let rev = cycletext.length - matcherword.length;
      if (i != 0 && !lstar) return false;
      if (i != rev && !rstar) return false;


      if (i == -1) {
        return false;
      } else {
        return true;
      }
    }

    if (per_word) {
      function findone(cycletext, expected) {
        let wordsofmatchsentence = word.split(/\s+/);
        for (let matcherword of wordsofmatchsentence) {
          let a = matchword(cycletext, matcherword);
          if (a == expected) {
            return true;
          }
        }
        return false;
      };
      if (all_words) {
        matcher = function (cycletext) {
          let findfalse = findone(cycletext, false);
          return !findfalse;
        };
      } else {
        matcher = function (cycletext) {
          let findtrue = findone(cycletext, true);
          return findtrue;
        };
      }

    } else {
      matcher = function (cycletext) {
        return matchword(cycletext, word);
      };
    }

    let allmeanings;
    if (in_meanings || in_examples) {
      allmeanings = await getAllDefinitions();
    }

    let result = { words: {}, meanings: [], examples: [] };

    if (in_words) {
      let result1 = {};
      let allwords = getAllWords();
      for (let cycleword of allwords) {
        if (matcher(cycleword)) {
          result1[cycleword] = { word: cycleword };
        }
      }
      result.words = result1;
    }

    if (in_meanings) {
      let result2 = [];
      for (let cyclemeaning of allmeanings) {
        if (matcher(cyclemeaning.definition)) {
          result2.push({
            definition: cyclemeaning.definition,
            synonyms: [].concat(Object.keys(cyclemeaning.synonymSet)),
            similar: [].concat(cyclemeaning.similar ? cyclemeaning.similar : []),
            examples: (cyclemeaning.examples && cyclemeaning.examples.length ? ["..."] : [])
          });
        }
      }
      result.meanings = result2;
    }

    if (in_examples) {
      let result3 = [];
      for (let cyclemeaning of allmeanings) {
        if (cyclemeaning.examples) {
          for (let cycleexample of cyclemeaning.examples) {
            if (matcher(cycleexample)) {
              result3.push(
                {
                  definition: cyclemeaning.definition,
                  synonyms: [].concat(Object.keys(cyclemeaning.synonymSet)),
                  similar: [].concat(cyclemeaning.similar ? cyclemeaning.similar : []),
                  examples: [cycleexample],
                  example: cycleexample
                });
            }
          }
        }
      }
      result.examples = result3;
    }

    return result;
  }

  function loadAll_words(word0, asobject, fromtime = 0) {
    let allwords0 = getAllWords();

    return loadWordsOnly(allwords0, word0, asobject);
  }

  function loadMyWords(word, letter, asobject) {
    let cw1 = loadJson(DATA_DIR + "/my-words-" + letter.toLowerCase() + ".json");
    return loadWordsOnly(cw1.data, word, asobject);
  }

  async function wordsByFrequency(word0, ffrom, fto = 1000000, asobject) {
    let files = [];
    const indpath = `${CACHE_DIR}/index/frequency`;

    let ijson = fs.readFileSync(resolvePath.abs(indpath));
    let find = JSON.parse(ijson);

    let words0 = [];
    let notf = 0,
      fit = 0;

    for (let df in find) {
      let a = find[df];
      if (ffrom <= df && df <= fto) {
        words0.push.apply(words0, a);
        fit += a.length;
      } else {
        notf += a.length;
      }
    }

    console.log(
      API,
      "Items fit:" + fit + " nonfit:" + notf + " tot:" + (fit + notf)
    );

    return loadWordsOnly(words0, word0, asobject);
  }

  async function loadAllFromFileCache() {
    console.time("parse file cache");
    let files = [];
    async function onFile(strPath, stat) {
      let word = strPath.substring(TWELVE);
      files.push(word);
    }
    let nowords = await finder.findFiles(`${CACHE_DIR_API}/words`, 0, onFile);

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
    console.timeEnd("parse file cache");

    return { byf, byword, cntf, nowords };
  }

  function collectFileFrequencies() {
    let result = loadAllFromFileCache();

    return result;
  }

  function loadExistingWords() {
    if (!langCache.existingRealWords) {
      langCache.existingRealWords = Object.create(null);

      let words;
      if (langCache.existingRealWordsArray) {
        words = langCache.existingRealWordsArray;
      } else {
        words = langCache.existingRealWordsArray =
          loadHeadless1ColCsv(resolvePath.abs(DATA_DIR + "/" + langCache.WORD_LIST));
      }

      for (let word of words) {
        langCache.existingRealWords[word] = 1;
      }
    }
    return langCache.existingRealWords;
  }

  function doesGoogleWordExist(word) {
    loadExistingWords();
    return langCache.existingRealWords[word];
  }

  function loadHeadless1ColCsv(fnm) {
    let result = [];
    let allFileContents = fs.readFileSync(fnm, 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line => {
      result.push(line);
    });
    return result;
  }

  function loadExistingWordsAndFreqs() {

    loadExistingWords();

    if (!langCache.frequencyRecords) {
      if (langCache.FREQ_CSV && fs.existsSync(resolvePath.abs(DATA_DIR + "/" + langCache.FREQ_CSV))) {
        langCache.frequencyRecords = csvParse.load(
          resolvePath.abs(DATA_DIR + "/" + langCache.FREQ_CSV),
          {
            convert: {
              count: parseInt,
            },
          }
        );
      } else if (langCache.FREQ_LIST && fs.existsSync(resolvePath.abs(DATA_DIR + "/" + langCache.FREQ_LIST))) {
        langCache.frequencyRecords = [];
        let words;
        if (langCache.WORD_LIST == langCache.FREQ_LIST) {
          words = langCache.existingRealWordsArray;
        } else {
          words = loadHeadless1ColCsv(resolvePath.abs(DATA_DIR + "/" + langCache.FREQ_LIST));
        }
        let cnt = words.length;
        for (let word of words) {
          langCache.frequencyRecords.push({ word, count: cnt-- });
        }
      }


      langCache.frequencies = Object.create(null);

      for (let frec of langCache.frequencyRecords) {
        if (doesGoogleWordExist(frec.word)) {
          langCache.frequencies[frec.word] = frec.count;
        }
      }
    }
    return langCache.frequencies;
  }

  function getWordCaggleFrequency(word) {
    loadExistingWordsAndFreqs();
    return langCache.frequencies[word];
  }

  async function invertFrequencies() {
    try {
      loadExistingWordsAndFreqs();

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
      for (let frec of langCache.frequencyRecords) {
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
        console.log(
          API,
          "Frequency: " +
          f +
          ".." +
          endstr +
          "  words:" +
          wcnt +
          "  freqs:" +
          fqcnt
        );
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
      let result = "var frqntls" + size + "=[" + buckets.join(", ") + "];";
      console.log(API, result + "\n");
      return result;
    }
    let q1 = quantilize(800);
    let q2 = quantilize(3000);
    let q3 = quantilize(10000);

    const indpath = `${CACHE_DIR}/index/frequency`;
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
      `;
    fs.writeFileSync(resolvePath.abs(clindpath), clfq);
  }


  function loadNativeStarDictAll() {
    if (
      !apiCache.stardict_words ||
      !apiCache.stardict_defs ||
      !apiCache.stardict_errors
    ) {
      console.time("load native StarDict datafiles");
      const f0 = `${CACHE_DIR_API}/dict/${API}-${langCache.NAME}/${API}-${langCache.NAME}`;
      if (!apiCache.stardict_words)
        apiCache.stardict_words = stardict.loadStarDict(`${f0}-words`);
      if (!apiCache.stardict_defs)
        apiCache.stardict_defs = stardict.loadStarDict(`${f0}-definitions`);
      if (!apiCache.stardict_errors)
        apiCache.stardict_errors = stardict.loadStarDict(`${f0}-errors`);
      console.timeEnd("load native StarDict datafiles");
    }
  }

  function saveNativeStarDictAll(stage1, stage2) {
    console.time("save native StarDict datafiles");
    const f0 = `${CACHE_DIR_API}/dict/${API}-${langCache.NAME}/${API}-${langCache.NAME}`;
    stardict.saveStarDict(`${f0}-words`, stage2.sortedwords, stage1.word);
    stardict.saveStarDict(`${f0}-definitions`, stage2.sorteddefs, stage1.meaning);
    stardict.saveStarDict(`${f0}-errors`, stage2.sortederrors, stage1.error);
    console.timeEnd("save native StarDict datafiles");
  }


  function load3rdPartyStarDicts() {
    if (
      !langCache.collocationStardict ||
      !langCache.enghunStardict ||
      !langCache.hunengStardict

    ) {
      console.time("load 3rd party StarDict datafiles");
      switch (LANG) {
        case "en": {

          const colf0 = `${DATA_DIR}/dict/${langCache.COLLOC}/OxfordCollocationsDictionary`;
          langCache.collocationStardict = stardict.loadStarDict(`${colf0}`, false);
          const eh0 = `${DATA_DIR}/dict/stardict-jdict-EngHun-2.4.2/jdict-EngHun`;
          langCache.enghunStardict = stardict.loadStarDict(`${eh0}`, false);
          const he0 = `${DATA_DIR}/dict/stardict-hungarian-english-2.4.2/hungarian-english`;
          langCache.hunengStardict = stardict.loadStarDict(`${he0}`, false);
        }
          break;
        case "de": {
          const eh0 = `${DATA_DIR}/dict/stardict-ger_hung-2.4.2/ger_hung`;
          langCache.gerhunStardict = stardict.loadStarDict(`${eh0}`, false);
        }
          break;
      }

      console.timeEnd("load 3rd party StarDict datafiles");
    }
  }


  function convertFileCacheToIntermediate(byword) {
    let result = {
      word: {},
      meaning: {},
      error: {},
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
            // worddata.word !  to exclude  jumps, jumping, to jump etc
            olddef.synonymSet[worddata.word] = 1;
            def = olddef;
          } else {
            // definition, synonyms, ...
            result.meaning[def.definition] = def;
            if (!def.synonymSet) {
              def.synonymSet = Object.create(null);
              // worddata.word !  to exclude  jumps, jumping, to jump etc
              def.synonymSet[worddata.word] = 1;
              if (def.synonyms) {
                for (let s of def.synonyms) def.synonymSet[s] = 1;
              }
            }
          }
          delete def.definition;
          delete def.synonyms;
          worddata.meaningstmp.push(def);
        }
        delete worddata.results;
        delete worddata.word;
      }
    }

    return result;
  }

  function mergeIntermediate(stage1) {
    for (let i in apiCache.stardict_defs.indexes()) {
      let itm = apiCache.stardict_defs.get(i);
      stage1.meaning[itm.word] = itm.data;
    }
    for (let i in apiCache.stardict_errors.indexes()) {
      let itm = apiCache.stardict_errors.get(i);
      stage1.error[itm.word] = itm.data;
    }
    for (let i in apiCache.stardict_words.indexes()) {
      let itm = apiCache.stardict_words.get(i);
      stage1.word[itm.word] = itm.data;
    }
  }

  function decodeSdIndexes(stage1) {
    for (let s in stage1.word) {
      let worddata = stage1.word[s];
      if (worddata.errind) {
        worddata.errortmp = apiCache.stardict_errors.get(worddata.errind).data;
        delete worddata.errind;
      } else if (worddata.definds) {
        worddata.meaningstmp = [];
        for (let meanind of worddata.definds) {
          worddata.meaningstmp.push(apiCache.stardict_defs.get(meanind).data);
        }
        delete worddata.definds;
      }
    }
  }

  function encodeSdIndexes(stage1) {
    for (let s in stage1.word) {
      let worddata = stage1.word[s];
      if (worddata.errortmp) {
        worddata.errind = worddata.errortmp.errind;
        delete worddata.errortmp;
      } else if (worddata.meaningstmp) {
        worddata.definds = [];
        for (let defdata of worddata.meaningstmp) {
          worddata.definds.push(defdata.defind);
        }
        delete worddata.meaningstmp;
      }
    }
  }

  async function updateStarDict() {
    loadNativeStarDictAll();

    let { byf, byword, cntf, nowords } = await loadAllFromFileCache();

    console.time("stage1");
    let stage1 = convertFileCacheToIntermediate(byword);

    mergeIntermediate(stage1);

    console.timeEnd("stage1");

    console.time("stage2");
    let stage2 = {};

    decodeSdIndexes(stage1);

    stage2.sortedwords = [].concat(Object.keys(stage1.word));
    stage2.sortedwords.sort();
    stage2.sorteddefs = [].concat(Object.keys(stage1.meaning));
    stage2.sorteddefs.sort();
    stage2.sortederrors = [].concat(Object.keys(stage1.error));
    stage2.sortederrors.sort();
    let i = 0;
    for (let def of stage2.sorteddefs) {
      stage1.meaning[def].defind = i++;
    }
    i = 0;
    for (let err of stage2.sortederrors) {
      stage1.error[err].errind = i++;
    }

    encodeSdIndexes(stage1);

    console.log(
      "words:",
      stage2.sortedwords.length,
      "defs:",
      stage2.sorteddefs.length,
      "errors:",
      stage2.sortederrors.length
    );
    console.timeEnd("stage2");

    saveNativeStarDictAll(stage1, stage2);
  }

  function findCollocation(word) {
    let itm, src;
    
    if (langCache.collocationStardict) {

      itm = langCache.collocationStardict.find(word);
      if (itm) {
        src = itm.data;

        let root = langCache.COLLOC_DIR;
        src = src.replace(/\x1E/g, root);
        src = src.replace(/\x1F/g, "");
      }
    }

    return src;
  }

  function getForLang(lang, word) {
    let result;
    switch (lang) {
      case "en":
        result = langCache.enghunStardict.find(word);
        if (result) result = result.data;
        break;
      case "de":
        result = langCache.gerhunStardict.find(word);
        if (result) result = result.data;
        break;
      case "hu":
        result = langCache.hunengStardict.find(word);
        if (result) result = result.data;
        break;
    }
    return result;
  }

  initCrawler();

  return {
    LANG, API,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL,
    MAX_LEVEL,
    resolvePath,
    DATA_DIR,
    CACHE_DIR,
    CACHE_DIR_API,
    COLLOC_DIR: langCache.COLLOC_DIR,
    TWELVE,
    isApiLimitReached,
    loadJson,
    singleWordToDisplay,
    loadSingleWord,
    traverseCluster,
    loadCluster,
    loadCommon3000_words,
    loadCommon5000_words,
    loadCommon10000_words,
    loadAll_words,
    loadMyWords,
    wordsByFrequency,
    generateIndexes,
    loadExistingWords,
    loadExistingWordsAndFreqs,
    doesGoogleWordExist,
    getWordCaggleFrequency,
    loadAllFromFileCache,
    updateStarDict,
    initializeCache,
    findCollocation, getForLang, findPhrases
  };
};
