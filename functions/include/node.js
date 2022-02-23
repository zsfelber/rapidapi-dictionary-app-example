

exports.DefinitionNode = class {
    entry;
    val;
    partOfSpeech;
    definition;
    synonyms;
    similar;
    inflections;
    word;
    examples;
    examplesTmp;
    key;

    constructor(entry, val) {
        this.entry = entry;
        this.val = val;

        this.definition = val.definition;
        this.synonyms = [];
        this.similar = [];
        this.examplesTmp = Object.create(null);

        this.word = this.entry.word;
        this.partOfSpeech = this.val.partOfSpeech;
        this.synonyms.push.apply(this.synonyms, this.val.synonyms);
        if (!this.val.synonymSet || !this.val.synonymSet[this.word]) {
            this.synonyms.push(this.word);
        }
        this.synonyms.sort();

        this.similar.push.apply(this.similar, this.val.similarTo);
        this.similar.sort();

        this.inflections = this.val.inflections;

        this.addExamples(this.val.examples);

        this.key =
            this.word +
            ":::::::" +
            this.synonyms.length +
            ":::::::" +
            this.synonyms.join(", ") +
            "::::::" +
            this.definition;
    }

    addExamples(examples) {
        if (examples)
            for (let x of examples) {
                this.examplesTmp[x] = 1;
            }
    }

    compress() {
        delete this.entry;
        delete this.val;
        delete this.key;
        this.examples = [];
        for (let x of Object.keys(this.examplesTmp)) {
            this.examples.push(x);
        }
        this.examples.sort();
        delete this.examplesTmp;
    }
}

exports.ClusterDefinitionNode = class extends exports.DefinitionNode {
    level;
    defkey;
    words;

    constructor(by_def, entry, val, level, traverseAll) {
        super(entry, val);
        this.level = level;

        this.words = [];

        if (traverseAll) {
            appendTo(this.words, val.synonyms);
            appendTo(this.words, val.similarTo);
            appendTo(this.words, val.antonyms);
            appendTo(this.words, val.typeOf);
            appendTo(this.words, val.hasTypes);
            appendTo(this.words, val.partOf);
            appendTo(this.words, val.hasParts);
            appendTo(this.words, val.instanceOf);
            appendTo(this.words, val.hasInstances);
            appendTo(this.words, val.also);
            appendTo(this.words, val.entails);
            appendTo(this.words, val.memberOf);
            appendTo(this.words, val.hasMembers);
            appendTo(this.words, val.substanceOf);
            appendTo(this.words, val.hasSubstances);
            appendTo(this.words, val.inCategory);
            appendTo(this.words, val.hasCategories);
            appendTo(this.words, val.usageOf);
            appendTo(this.words, val.hasUsages);
            appendTo(this.words, val.inRegion);
            appendTo(this.words, val.regionOf);
            appendTo(this.words, val.pertainsTo);
        } else {
            appendTo(this.words, val.synonyms);
        }

        this.defkey =
            this.synonyms.length +
            "::::::" +
            this.synonyms.join(", ") +
            "::::::" +
            this.definition;
        this.key = this.level + ":::::::" + this.defkey;

        if (!by_def[this.defkey]) {
            by_def[this.defkey] = this;
        }
    }

    compress() {
        super.compress();
        delete this.words;
        delete this.defkey;
    }
}

function appendTo(array, itemOrArray) {
    if (Array.isArray(itemOrArray)) {
        array.push.apply(array, itemOrArray);
    } else if (itemOrArray) {
        array.push(itemOrArray);
    }
}
