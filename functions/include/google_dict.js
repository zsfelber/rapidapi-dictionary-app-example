const utils = require('./googletransapi/utils.js');
const errors = require('./googletransapi/errors.js');
const dictionary = require('./googletransapi/dictionary.js');

    // Versions
const V1 = 'v1';
const V2 = 'v2';


exports.googleDictionary = async function(word, language="en", version="v2", include="") {

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

    if (version === V1) {
        definitions = dictionary.transformV2toV1(definitions);
    }

    return definitions;
};
