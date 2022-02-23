const fs = require("fs");
const finder = require("./finder.js");
const csvParse = require("csv-load-sync");
const stardict = require("./stardict");
const nodecl = require("./node");
const { result, lastIndexOf } = require("lodash");



exports.getRunner = function (wordprovider) {
    let options = wordprovider.options;
    const { LANG, API,
        API_DAILY_LIMIT,
        MAX_WORDS,
        MAX_NODE_FREQUENCY,
        TRAVERSE_ALL,
        MAX_LEVEL = 100,
        resolvePath } = options;

    const CACHE_DIR = wordprovider.CACHE_DIR;
    const DATA_DIR = wordprovider.DATA_DIR;

    const langCache = wordprovider.getLangCache(LANG);
    const apiCache = wordprovider.getCacheFor(LANG, API);

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
        let f1 = wordprovider.getWordCaggleFrequency(data.word);
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
                addif(skeys, "inflections");
                addif(skeys, "definition");
                addif(skeys, "synonyms");
                addif(skeys, "similarTo");
                addif(skeys, "synonymsGroup");
                addif(skeys, "antonyms");

                delete therest["inflections"];
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
                        isNumber: typeof value === "number" ? true : false,
                    };

                    definitionArray.push(newObj);
                });

                results.push(definition);
            });

        return result;
    }

    async function loadSingleWord(word, asobject, cachedonly = false) {
        let data = wordprovider.loadSingleWord(word, cachedonly);
        if (!asobject) {
            let result = singleWordToDisplay(data);
            const ojson = JSON.stringify(result); // modified
            return ojson;
        } else {
            return data;
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
        const entry = await wordprovider.loadSingleWord(word);

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
                let node = new nodecl.ClusterDefinitionNode(
                    by_def,
                    entry,
                    val,
                    traversion.level,
                    TRAVERSE_ALL
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

        tresult.master = await wordprovider.loadSingleWord(word);
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

                    if (stopwhenallloaded && !(await wordprovider.checkAPIlimitAndFinish(promises))) {
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
        const entry = await wordprovider.loadSingleWord(word);

        if (entry) {
            if (!entry.fromCache) {
                result.newWords++;
            }

            result.noWords++;
            if (!(result.noWords % 1000))
                console.log(API, result.noWords + "/" + noWords);

            for (let key in entry.results) {
                const val = entry.results[key];

                const definitionNode = new nodecl.DefinitionNode(entry, val);

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
        words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), LANG));

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



    async function generateIndexes() {
        //wordsapi works
        //let {byf, cntf, nowords} = await collectFileFrequencies();
        let { byf, cntf, nowords } = await wordprovider.invertFrequencies();

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
        const clindpath = `public/js/${LANG}/frequency.js`;
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

    asyncInit();
    `;
        fs.writeFileSync(resolvePath.abs(clindpath), clfq);
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
            allmeanings = await wordprovider.getAllDefinitions();
        }

        let result = { words: {}, meanings: [], examples: [] };

        if (in_words) {
            let result1 = {};
            let allwords = wordprovider.getAllWords();
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
        let allwords0 = wordprovider.getAllWords();

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

    function collectFileFrequencies() {
        let result = wordprovider.loadAllFromFileCache();

        return result;
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
        wordprovider.loadNativeStarDictAll();

        let { byf, byword, cntf, nowords } = await wordprovider.loadAllFromFileCache();

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



    return {
        singleWordToDisplay, loadSingleWord,
        collectFileFrequencies, loadCommonWordClustersLetter,
        traverseCluster,
        loadCluster,
        loadCommon3000_words,
        loadCommon5000_words,
        loadCommon10000_words,
        loadAll_words,
        loadMyWords,
        wordsByFrequency,
        generateIndexes,
        updateStarDict,
        getForLang,
        findCollocation, findPhrases
    };
};
