const utils = require('./utils.js');
const errors = require('./errors.js');
const dictionary = require('./dictionary.js');

    // Versions
const V1 = 'v1';
const V2 = 'v2';


function transformToWordsApiLike(definitions) {

    let result = {
        word:"",
        results:[],
        pronunciation : {},
    };
    let antipron = {};
    let idx=1;
    let pid = 'a'.charCodeAt(0);
    for (let data of definitions) {
        let word = data.word;
        if (!result.word) result.word = word;

        for (let meaning of data.meanings) {
            for (let meaningdef of meaning.definitions) {
                if (!antipron[data.phonetic]) {
                    antipron[data.phonetic] = [String.fromCharCode(pid++)];
                }
                antipron[data.phonetic].push(idx);
                let item = {
                    partOfSpeech : meaning.partOfSpeech,
                    pronunciation : data.phonetic,
                    definition:  meaningdef.definition,
                    examples: meaningdef.examples?meaningdef.examples:
                            (meaningdef.example?[meaningdef.example]:undefined),
                    synonyms: meaningdef.synonyms&&meaningdef.synonyms.length?meaningdef.synonyms:undefined,
                    antonyms: meaningdef.antonyms&&meaningdef.antonyms.length?meaningdef.antonyms:undefined,
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
}


export async function googleDictionary(word, language="en", version="v2", include="") {

    if (!word || !language || !version) {
        throw new errors.NoDefinitionsFound(); 
    }

    // @todo: Find better error.
    if (!utils.isVersionSupported(version)) { return handleError.call(res, new errors.NoDefinitionsFound()); }

    // Todo: Figure out better strategy.
    if (language === 'en_US' || language === 'en_GB') { language = 'en'; }

    // By default we are assuming person means American English
    // This is needed for backward compatibility.
    language = language.toLowerCase();

    // @todo: Find better error.
    if (!utils.isLanguageSupported(language)) { return handleError.call(res, new errors.NoDefinitionsFound()); }

    word = word.trim().toLocaleLowerCase(language);

    let definitions = await dictionary.findDefinitions(word, language, { include }) ;

    //if (version === V1) {
    //    definitions = dictionary.transformV2toV1(definitions);
    //}
    definitions = transformToWordsApiLike(definitions);

    return definitions;
};


//module.exports = {
//    googleDictionary
//} ;