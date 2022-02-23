
exports.initCrawler = function (langCache) {

    // https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#German
    langCache.NAME = "german";
    langCache.FREQ_CSV = `opensubtitles_frequencies.csv`;
    langCache.WORD_CSV = `opensubtitles_frequencies.csv`;
    langCache.COMMON_WORDS_5000 = "common-words-5000.txt";
};


function ending0(base, exphead, form, addregexp=0) {
    let rx = new RegExp("^"+exphead + base + "(.*)", "i").exec(form);
    let items;
    if (rx) {
        items = [" "];
        for (let i=1; i<=addregexp; i++) items.push(rx[i]);
        items.push("-" + rx[addregexp+1]);
    } else {
        rx = new RegExp("^"+exphead + "(.*)", "i").exec(form);
        if (rx) {
            items = [" "];
            addregexp++;
            for (let i=1; i<=addregexp; i++) items.push(rx[i]);
        } else {
            items = [",", form];
        }
    }
    return items;
}
function ending(base, exphead, form, addregexp=0) {
    let r = ending0(base, exphead, form, addregexp);
    return r.join("");
}
function middle(form, exphead, expend) {
    rx = new RegExp("^"+exphead+"(.*)"+expend+"$", "i").exec(form);
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
            let adj = result.inflections["adjective_forms"];

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
                let verbbase = middle(ris.PRESENT.SIMPLE.INDICATIVE.PLURAL.THIRD, "Sie ", "en");
                let r;

                r = ending0(verbbase+"t", "Er/Sie/Es ", ris.PRESENT.SIMPLE.INDICATIVE.SINGULAR.THIRD);
                if (r[1] != "-") {
                    shortform += r.join("");
                }

                r = ending0(verbbase, "Ich ", ris.PAST.SIMPLE.INDICATIVE.SINGULAR.FIRST);
                let past1base1 = r[1];

                r = ending0(verbbase, "Er/Sie/Es ", ris.PAST.SIMPLE.INDICATIVE.SINGULAR.THIRD);
                let past1base3 = r[1];

                if (past1base1 != past1base3) {
                    shortform += " "+past1base1+"("+r.join("")+")";
                } else {
                    shortform += r.join("");
                }

                r = ending0(verbbase, "Sie (haben|sind) ge", ris.PAST.PERFECT.INDICATIVE.PLURAL.THIRD, 1);
                r[1] = r[1].replace("haben","h ge").replace("sind","i ge");
                shortform += r.join("");

                verb.shortform = shortform;

            } else if (adj) {

                let leaf = adj.root.ZERO[undefined][undefined][undefined];
                let shortform="";
                shortform += ending(data.word, "", leaf.COMPARATIVE[0]);
                shortform += ending(data.word, "", leaf.SUPERLATIVE[0]);

                adj.shortform = shortform;

            }
        }
    }
    return data;
};
