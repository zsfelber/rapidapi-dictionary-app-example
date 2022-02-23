
exports.initCrawler = function (langCache) {

    // https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#German
    langCache.NAME = "german";
    langCache.FREQ_CSV = `opensubtitles_frequencies.csv`;
    langCache.WORD_CSV = `opensubtitles_frequencies.csv`;
    langCache.COMMON_WORDS_5000 = "common-words-5000.txt";
};


function ending(base, exphead, form) {
    let rx = new RegExp(exphead + base + "(.*)").exec(form);
    let phrase;
    if (rx) {
        phrase = " -" + rx[1];
    } else {
        rx = new RegExp(exphead + "(.*)").exec(form);
        if (rx) {
            phrase = " " + rx[1];
        } else {
            phrase = "," + form;
        }
    }
    return phrase;
}
function middle(expend, form) {
    rx = new RegExp("(.*)"+expend).exec(form);
    if (rx) {
        return rx[1];
    } else {
        return form;
    }
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
                    shortform += ending(data.word, "die ", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data.word, "des ", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data.word, "den ", ris.DATIVE.PLURAL[0]);
                } else if (ris = noun.root.FEMININE) {
                    shortform += "e";
                    shortform += ending(data.word, "die ", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data.word, "der ", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data.word, "den ", ris.DATIVE.PLURAL[0]);
                } else if (ris = noun.root.MASCULINE) {
                    shortform += "r";
                    shortform += ending(data.word, "die ", ris.NOMINATIVE.PLURAL[0]);
                    shortform += ending(data.word, "des ", ris.GENITIVE.SINGULAR[0]);
                    shortform += ending(data.word, "den ", ris.DATIVE.PLURAL[0]);
                }
                noun.shortform = shortform;
            } else if (verb) {
                let ris = verb.root;
                let verbbase = middle(ris.PRESENT.SIMPLE.INDICATIVE.PLURAL.THIRD, "en");

                shortform += ending(verbbase, "", ris.PRESENT.SIMPLE.INDICATIVE.SINGULAR.THIRD);
                shortform += ending(verbbase, "", ris.PART.SIMPLE.INDICATIVE.PLURAL.THIRD);
                shortform += ending(verbbase, "", ris.PART.PERFECT.INDICATIVE.PLURAL.THIRD);
                verb.shortform = shortform;
            }
        }
    }
    return data;
};
