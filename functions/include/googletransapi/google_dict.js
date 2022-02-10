const utils = require('./utils.js');
const errors = require('./errors.js');
const dictionary = require('./dictionary.js');

    // Versions
const V1 = 'v1';
const V2 = 'v2';

function transformToWordsApiLike(data) {
    if (Array.isArray(data)) {
        if (data.length>1) {
            console.log("google: dropped multiple results starting from : "+data[1].word+"..");
            data = data[0];
        }
    }
    let result = {
        word:data.word,
        results:[]
    };
    let i = 0;
    for (let meaning of data.meanings) {
        let meaningdef = meaning.definitions[0];
        if (meaning.definitions.length>1) {
            console.log("google: dropped multiple meaning["+i+"].definitions starting from : "+meaning.definitions[1].definition+"..");
        }
        let item = {
            definition:  meaningdef.definition,
            examples: meaningdef.examples?meaningdef.examples:
                    (meaningdef.example?[meaningdef.example]:[]),
            synonyms: meaningdef.synonyms
        };
        result.results.push(item);
        i++;
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