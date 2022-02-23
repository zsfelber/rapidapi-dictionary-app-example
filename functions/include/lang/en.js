

exports.initCrawler=function(langCache) {

    langCache.NAME = "english";
    langCache.COLLOC = "stardict-OxfordCollocationsDictionary-2.4.2";
    langCache.COLLOC_DIR = `../${DATA_DIR}/dict/${langCache.COLLOC}/res/`;
    // caggle freq records
    langCache.FREQ_CSV = `unigram_freq.csv`;
    langCache.WORD_LIST = "english_.csv";
    langCache.COMMON_WORDS_10000 = "common-words-10000.json";
    langCache.COMMON_WORDS_5000 = "common-words-5000.txt";
};

exports.transformSingle=function(data) {
    return data;
};
