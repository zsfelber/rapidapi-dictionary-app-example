const fs = require("fs");
const finder = require("./finder.js");
const csvParse = require("csv-load-sync");
const stardict = require("./stardict");
const { result, lastIndexOf } = require("lodash");

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

exports.anInstance = function (options) {

  const { LANG, API,
    API_DAILY_LIMIT,
    MAX_WORDS,
    MAX_NODE_FREQUENCY,
    TRAVERSE_ALL,
    MAX_LEVEL = 100,
    resolvePath = noResolvePath } = options;


  const DATA_DIR = "data/" + LANG;
  const CACHE_DIR = "cache/" + LANG;
  const CACHE_DIR_API = CACHE_DIR + "/" + API;

  let lang;
  const langCache = getLangCache(LANG);
  const apiCache = getCacheFor(LANG, API);

  const TWELVE = (CACHE_DIR_API + "/words/").length;
  //if (!resolvePath) resolvePath = noResolvePath;

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

  function loadFrequenyCsv(file) {
    let raw = csvParse.load(
      resolvePath.abs(file),
      {
        convert: {
          count: parseInt,
        },
      }
    );
    let result = [];
    let dropped = [];
    let tot = BigInt(0), totresult = BigInt(0), totdropped = BigInt(0);
    for (let rec of raw) {
      if (!rec.count) {
        console.log("Bad", rec);
        continue;
      }
      let rc = BigInt(rec.count);
      tot += rc;
      if (rec.count < 10) {
        totdropped += rc;
        dropped.push(rec);
      } else {
        totresult += rc;
        result.push(rec);
      }
    }
    console.log(`Frequency CSV processed:${file}   words freq   total:${raw.length} ${tot}   kept:${result.length} ${totresult}   dropped(where fr<10):${dropped.length} ${totdropped}`)

    return result;
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

    lang = require(`./lang/${LANG}`);

    lang.initCrawler(langCache);

    if (langCache.COLLOC_REL) {
      langCache.COLLOC_DIR = `../${DATA_DIR}/${langCache.COLLOC_REL}`;
    }


    switch (API) {
      case "google": {
        const googleDictionary =
          require("./api/googletransapi/google_dict").googleDictionary;
        download = function (word) {
          return googleDictionary(word, LANG);
        }
      }
        break;
      case "wordsapi":
        download = require("./api/wordsapi/wordapi_dict").wordsApiDictionary;
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



  const CACHE_RAW = new Object({ cache: "raw" });
  async function loadSingleWord(word, cachedonly = false) {
    let fileword = word.replace(/[.,/']/g, "$").toLowerCase();
    const wfpath = `${CACHE_DIR_API}/words/${fileword}`;

    let data, djson;

    function convertResult(fromCache, encode) {
      if (lang && lang.transformSingle) {
        data = lang.transformSingle(data);
      }
      if (encode) {
        djson = JSON.stringify(data); // original
      }

      data.fromCache = fromCache;
      return data;
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

  function getAllWords() {
    let allwords0 = [];
    const totwords = loadExistingWordsAndFreqs();

    allwords0.push.apply(allwords0, Object.keys(totwords));
    return allwords0;
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
      let data = await wordprovider.loadSingleWord(word, CACHE_RAW);
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


  function loadExistingWords() {
    if (!langCache.existingRealWords) {
      langCache.existingRealWords = Object.create(null);

      if (langCache.WORD_CSV) {
        langCache.existingRealWordsCsv = loadFrequenyCsv(DATA_DIR + "/" + langCache.WORD_CSV);
        for (let rec of langCache.existingRealWordsCsv) {
          langCache.existingRealWords[rec.word] = 1;
        }
      } else if (langCache.WORD_LIST) {
        words = langCache.existingRealWordsArray =
          loadHeadless1ColCsv(resolvePath.abs(DATA_DIR + "/" + langCache.WORD_LIST));
        for (let word of words) {
          langCache.existingRealWords[word] = 1;
        }
      }

    }
    return langCache.existingRealWords;
  }

  function doesRealWordExist(word) {
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
        if (langCache.WORD_CSV == langCache.FREQ_CSV) {
          langCache.frequencyRecords = langCache.existingRealWordsCsv;
        } else {
          langCache.frequencyRecords = loadFrequenyCsv(DATA_DIR + "/" + langCache.FREQ_CSV);
        }
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
        if (doesRealWordExist(frec.word)) {
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
        if (doesRealWordExist(frec.word)) {
          entry(frec.count).push(frec.word);
        }
      }

      return { byf, cntf, nowords };
    } catch (e) {
      console.error("csv error", e);
      process.exit(1);
    }
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

  initCrawler();

  return {
    getLangCache, getCacheFor,
    options,
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
    loadAllFromFileCache,
    isApiLimitReached,
    loadJson,
    loadSingleWord,
    loadExistingWords,
    loadExistingWordsAndFreqs,
    doesRealWordExist,
    getWordCaggleFrequency,
    initializeCache,
    checkAPIlimitAndFinish, getAllWords, getAllDefinitions, invertFrequencies, loadNativeStarDictAll, saveNativeStarDictAll
  };
};
