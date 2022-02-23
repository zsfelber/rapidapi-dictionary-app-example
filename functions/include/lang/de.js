
exports.initCrawler=function(langCache) {

    // https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#German
    langCache.NAME = "german";
    langCache.FREQ_CSV = `opensubtitles_frequencies.csv`;
    langCache.WORD_CSV = `opensubtitles_frequencies.csv`;
    langCache.COMMON_WORDS_5000 = "common-words-5000.txt";
};


exports.transformSingle=function(data) {
    return data;
};
