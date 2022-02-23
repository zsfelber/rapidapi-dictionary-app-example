
exports.initCrawler = function (langCache) {

    // https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#German
    langCache.NAME = "german";
    langCache.FREQ_CSV = `opensubtitles_frequencies.csv`;
    langCache.WORD_CSV = `opensubtitles_frequencies.csv`;
    langCache.COMMON_WORDS_5000 = "common-words-5000.txt";
};


function ending(data, exphead, form) {
    let rx = new RegExp(exphead + " " + data.word + "(.*)").exec(form);
    let phrase;
    if (rx) {
        phrase = " -" + rx[1];
    } else {
        rx = new RegExp(exphead + " (.*)").exec(form);
        if (rx) {
            phrase = " " + rx[1];
        } else {
            phrase = "," + form;
        }
    }
    return phrase;
}

exports.transformSingle = function (data) {
    for (let result of data.results) {
        if (result.inflections) {
            let noun = result.inflections["noun_forms"];
            let verb = result.inflections["verb_forms"];
            let shortform = "";
            let ris;
            if (noun) {
                if (ris = noun.root.NEUTER) {
                    shortform += "s";
                    shortform += ending(data, "die", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data, "des", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data, "den", ris.DATIVE.PLURAL[0]);
                } else if (ris = noun.root.FEMININE) {
                    shortform += "e";
                    shortform += ending(data, "die", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data, "der", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data, "den", ris.DATIVE.PLURAL[0]);
                } else if (ris = noun.root.MASCULINE) {
                    shortform += "r";
                    shortform += ending(data, "die", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data, "des", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data, "den", ris.DATIVE.PLURAL[0]);
                }
                noun.shortform = shortform;
            } else if (verb) {
                let ris = verb.root;
                if (ris.partOfSpeech == "schwaches Verb") {
                } else if (ris.partOfSpeech == "starkes Verb") {
                }
            }
        }
    }
    return data;
};
