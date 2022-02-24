const stardict = require("./stardict");

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
    const CACHE_DIR_API = wordprovider.CACHE_DIR_API;

    const langCache = wordprovider.getLangCache(LANG);
    const apiCache = wordprovider.getCacheFor(LANG, API);

    function convertFileCacheToIntermediate(byword) {
        let result = {
            word: {},
            common: {},
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
                worddata.commonstmp = [];
                for (let defidx in worddata.results) {
                    let def = worddata.results[defidx];

                    if (def.definition) {
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
                                    for (let s of def.synonyms) {
                                        def.synonymSet[s] = 1;
                                    }
                                }
                            }
                        }
                        worddata.meaningstmp.push(def);
                    } else if (def.partOfSpeech == "common definitions") {
                        let commonid = worddata.word + ":" + def.groupId;
                        result.common[commonid] = def;
                        worddata.commonstmp.push(def);
                    } else {
                        console.log("unknown results.item type, ", def);
                    }
                    delete def.definition;
                    delete def.synonyms;
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
        for (let i in apiCache.stardict_coms.indexes()) {
            let itm = apiCache.stardict_coms.get(i);
            stage1.common[itm.word] = itm.data;
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
            } else {
                if (worddata.definds) {
                    worddata.meaningstmp = [];
                    for (let meanind of worddata.definds) {
                        worddata.meaningstmp.push(apiCache.stardict_defs.get(meanind).data);
                    }
                    delete worddata.definds;
                }
                if (worddata.cominds) {
                    worddata.commonstmp = [];
                    for (let comind of worddata.cominds) {
                        worddata.commonstmp.push(apiCache.stardict_coms.get(comind).data);
                    }
                    delete worddata.cominds;
                }
            }
        }
    }

    function encodeSdIndexes(stage1) {
        for (let s in stage1.word) {
            let worddata = stage1.word[s];
            if (worddata.errortmp) {
                worddata.errind = worddata.errortmp.errind;
                delete worddata.errortmp;
            } else {
                if (worddata.meaningstmp) {
                    worddata.definds = [];
                    for (let defdata of worddata.meaningstmp) {
                        worddata.definds.push(defdata.defind);
                    }
                    delete worddata.meaningstmp;
                }
                if (worddata.commonstmp) {
                    worddata.cominds = [];
                    for (let comdata of worddata.commonstmp) {
                        worddata.cominds.push(comdata.comind);
                    }
                    delete worddata.commonstmp;
                }
            }
        }
    }

    function sortSdAll(stage1,stage2) {
        stage2.sortedwords = [].concat(Object.keys(stage1.word));
        stage2.sortedwords.sort();
        stage2.sorteddefs = [].concat(Object.keys(stage1.meaning));
        stage2.sorteddefs.sort();
        stage2.sortedcoms = [].concat(Object.keys(stage1.common));
        stage2.sortedcoms.sort();
        stage2.sortederrors = [].concat(Object.keys(stage1.error));
        stage2.sortederrors.sort();
        let i = 0;
        for (let def of stage2.sorteddefs) {
            stage1.meaning[def].defind = i++;
        }
        i = 0;
        for (let com of stage2.sortedcoms) {
            stage1.common[com].comind = i++;
        }
        i = 0;
        for (let err of stage2.sortederrors) {
            stage1.error[err].errind = i++;
        }
    }

    function convertSdDataIndexes(data) {

        if (!data.results && !data.error) {
            data.results = [];

            if (data.errind) {
                data.error = apiCache.stardict_errors.get(data.errind).word;
            }
        
            if (data.cominds) for (let comind of data.cominds) {
                let d0 = apiCache.stardict_coms.get(comind);
                let com = Object.assign({}, d0.data);
                data.results.push(com);
            }

            if (data.definds) for (let meanind of data.definds) {
                let d0 = apiCache.stardict_defs.get(meanind);
                let def = Object.assign({}, d0.data);
                if (!def.synonyms && def.synonymSet) {
                    delete def.synonymSet[data.word];
                    def.synonyms = [].concat(Object.keys(def.synonymSet));
                    def.synonyms.sort();
                }
                if (!def.definition) {
                    def.definition = d0.word;
                }
                data.results.push(def);
            }
        }
    }





    function loadNativeStarDictAll() {
        if (
            !apiCache.stardict_words ||
            !apiCache.stardict_defs ||
            !apiCache.stardict_coms ||
            !apiCache.stardict_errors
        ) {
            console.time("load native StarDict datafiles");
            const f0 = `${CACHE_DIR_API}/dict/${API}-${langCache.NAME}/${API}-${langCache.NAME}`;
            if (!apiCache.stardict_words)
                apiCache.stardict_words = stardict.loadStarDict(`${f0}-words`);
            if (!apiCache.stardict_defs)
                apiCache.stardict_defs = stardict.loadStarDict(`${f0}-definitions`);
            if (!apiCache.stardict_coms)
                apiCache.stardict_coms = stardict.loadStarDict(`${f0}-commons`);
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
        stardict.saveStarDict(`${f0}-commons`, stage2.sortedcoms, stage1.common);
        stardict.saveStarDict(`${f0}-errors`, stage2.sortederrors, stage1.error);
        console.timeEnd("save native StarDict datafiles");
    }



    async function updateStarDict() {
        loadNativeStarDictAll();

        let { byf, byword, cntf, nowords } = await wordprovider.loadAllFromFileCache();

        console.time("stage1");
        let stage1 = convertFileCacheToIntermediate(byword);

        mergeIntermediate(stage1);

        console.timeEnd("stage1");

        console.time("stage2");
        let stage2 = {};

        decodeSdIndexes(stage1);

        sortSdAll(stage1,stage2);

        encodeSdIndexes(stage1);

        console.log(
            "words:",
            stage2.sortedwords.length,
            "defs:",
            stage2.sorteddefs.length,
            "coms:",
            stage2.sortedcoms.length,
            "errors:",
            stage2.sortederrors.length
        );
        console.timeEnd("stage2");

        saveNativeStarDictAll(stage1, stage2);
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

    return {
        convertFileCacheToIntermediate,
        mergeIntermediate, encodeSdIndexes, decodeSdIndexes, convertSdDataIndexes,
        loadNativeStarDictAll, saveNativeStarDictAll, updateStarDict, 
        load3rdPartyStarDicts
    };
};
