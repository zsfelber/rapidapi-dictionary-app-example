const utils = require('./utils.js');
const errors = require('../../errors.js');
const dictionary = require('./dictionary.js');

    // Versions
const V1 = 'v1';
const V2 = 'v2';


function transformToWordsApiLike(definitions) {

    try {
    function lst(s,single,alternative) {
        return (s&&s.length)?s:(single?[single]:alternative);        
    }
    let result = {
        word:"",
        results:[],
        pronunciation : {}
    };
    let antipron = {};
    let idx=1;
    let pid = 'a'.charCodeAt(0);
    let groupId=0;
    for (let data of definitions) {
        let word = data.word;
        if (!result.word) result.word = word;

        for (let meaning of data.meanings) {
            let defitem;
            if ((data.synonymsGroup&&data.synonymsGroup.length) || 
                    data.origin || 
                    data.inflections || 
                    (data.originContents&&data.originContents.length)) {
                defitem = {
                    partOfSpeech : "common definitions",
                    synonymsGroup: lst(data.synonymsGroup),
                    origin: data.origin,
                    inflections: data.inflections,
                    originContents: data.originContents,
                    "groupId":++groupId 
                };
                result.results.push(defitem);
            }

            for (let meaningdef of meaning.definitions) {
                if (data.phonetic) { 
                    if (!antipron[data.phonetic]) {
                        antipron[data.phonetic] = [String.fromCharCode(pid++)];
                    }
                    antipron[data.phonetic].push(idx);
                }
                let item = {
                    partOfSpeech : meaning.partOfSpeech,
                    pronunciation : data.phonetic,
                    definition:  meaningdef.definition,
                    examples: lst(meaningdef.examples,meaningdef.example),
                    antonyms: lst(meaningdef.antonyms,meaningdef.antonym),
                    commonDefinitions: defitem?groupId:undefined,
                    word
                };
                result.results.push(item);
                idx++;
            }
        }
    }
    let aps = [];
    for (let a in antipron) {
        let p = antipron[a];
        aps.push({a,p});
    }

    for (let pair of aps) {
        result.pronunciation[pair.p.join(",")] = pair.a;
    }


    return result;
    } catch (e) {
        console.log(e);
		throw e;
    }
}


exports.googleDictionary = async function (word, language="en", version="v2", include="") {

    if (!word || !language || !version) {
        throw new errors.NoDefinitionsFound(); 
    }

    // @todo: Find better error.
    if (!utils.isVersionSupported(version)) { return handleError.call(res, new errors.NoDefinitionsFound()); }

    // Todo: Figure out better strategy.
    //if (language === 'en_US' || language === 'en_GB') { language = 'en'; }
    let _ = language.indexOf("_");
    if (_!=-1) {
        language = language.substring(0, _);
    }

    // By default we are assuming person means American English
    // This is needed for backward compatibility.
    language = language.toLowerCase();

    // @todo: Find better error.
    if (!utils.isLanguageSupported(language)) { return handleError.call(res, new errors.NoDefinitionsFound()); }

    word = word.trim().toLocaleLowerCase(language);

    let result1 = await dictionary.findDefinitions(word, language, { include }) ;

    //if (version === V1) {
    //    definitions = dictionary.transformV2toV1(definitions);
    //}
    let definitions = transformToWordsApiLike(result1);

    return definitions;
};


//module.exports = {
//    googleDictionary
//} ;