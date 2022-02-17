
var lastresult;
var lastmode;
var page,col=2,wordInfoTbl,wordInfoRow,wordInfoBox,info;

var letters=[String.fromCharCode(1)].concat(numbers()).concat([":"]).concat(ucases()).concat(lcases());


init$();

var url_word = $.urlParam('word');
var urlmode = $.urlParam('mode');
var urltop = $.urlParam('top');
var urlletter = $.urlParam('letter');
var urlffrom = $.urlParam('ffrom');
var urlfto = $.urlParam('fto');
let urllen = $.urlParam('len');
let urli = $.urlParam('i');
let urlN = $.urlParam('N');

var checkboxdata = {
    "bucket1": {
        "also": { defchecked: true },
        "antonyms": { defchecked: true },
        "attribute": { defchecked: false },
        "cause": { defchecked: false },
        "definition": { defchecked: true },
        "derivation": { defchecked: false },
        "entails": { defchecked: false },
    },
    "bucket2": {
        "examples": { defchecked: true },
        "pertains to": { defchecked: false },
        "similar to": { defchecked: true },
        "synonyms": { defchecked: true },
        "verb group": { defchecked: false },
        "WORDSAPI": { defchecked: true },
        "GOOGLE": { defchecked: true },
    },
    "bucket3": {
        "in category": { defchecked: false },
        "instance of": { defchecked: false },
        "member of": { defchecked: false },
        "part of": { defchecked: false },
        "region of": { defchecked: false },
        "substance of": { defchecked: false },
        "type of": { defchecked: false },
    },
    "bucket4": {
        "has categories": { defchecked: false },
        "has instances": { defchecked: false },
        "has members": { defchecked: false },
        "has parts": { defchecked: false },
        "in region": { defchecked: false },
        "has substances": { defchecked: false },
        "has types": { defchecked: false },
    },
    "bucket5": {
        "usage of": { defchecked: false },
        "abbreviation": { defchecked: true },
        "adjective": { defchecked: true },
        "adverb": { defchecked: true },
        "conjunction": { defchecked: true },
        "determiner": { defchecked: true },
        "exclamation": { defchecked: true },
    },
    "bucket55": {
        "has usages": { defchecked: false },
        "noun": { defchecked: true },
        "participle": { defchecked: true },
        "prefix": { defchecked: true },
        "preposition": { defchecked: true },
        "pronoun": { defchecked: true },
        "suffix": { defchecked: true },
    },
    "bucket56": {
        "symbol": { defchecked: true },
        "verb": { defchecked: true },
        "definite_article": { defchecked: true },
    },
    "bucket6": {
        "dictionary": { defchecked: true },
        "synonym cluster": { defchecked: false },
        "most common 3000 a-e": { defchecked: false },
        "most common 3000 f-p": { defchecked: false },
        "most common 3000 q-z": { defchecked: false },
        "most common 10000 a-c": { defchecked: false },
        "most common 10000 d-h": { defchecked: false },
    },
    "bucket7": {
        "most common 10000 i-o": { defchecked: false },
        "most common 10000 p-r": { defchecked: false },
        "most common 10000 s-z": { defchecked: false },
        "most common 3000 words": { defchecked: false },
        "most common 10000 words": { defchecked: false },
        "all words": { defchecked: false, classes: "inblock" },
    },
};

async function fetchWord(word, mode, qs=[]) {
    let apis=[];
    if (isch("WORDSAPI")) apis.push("wordsapi");
    if (isch("GOOGLE")) apis.push("google");
    qs.push(`word=${word}`);
    qs.push(`mode=${mode}`);
    qs.push(`apis=${apis.join("-")}`);

    let data = await serve("getWord", qs);

    return data;
}

async function saveGroups(qs=[]) {
    qs.push(`groups=${btoa(JSON.stringify(groups))}`);
    qs.push(`curmywordsltr=${urlletter}`);

    let data = await serve("saveGroups", qs);

    groups = {};

    return data;
}


function numbers() {
    let a = '0'.charCodeAt(0);
    let z = '9'.charCodeAt(0);
    let result=[];
    for (var i=a; i<=z; i++) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

function ucases() {
    let a = 'A'.charCodeAt(0);
    let z = 'Z'.charCodeAt(0);
    let result=[];
    for (var i=a; i<=z; i++) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

function lcases() {
    let a = 'a'.charCodeAt(0);
    let z = 'z'.charCodeAt(0);
    let result=[];
    for (var i=a; i<=z; i++) {
        result.push(String.fromCharCode(i));
    }
    return result;
}


function chkdict() {
    let chk = $("#dictionary").is(':checked');
    console.log("dictionary is checked:"+chk);
    $('.checkboxes1 input').prop("disabled", !chk);
    $('.checkboxes2 input').prop("disabled", !chk);
    $('.checkboxes3 input').prop("disabled", !chk);
    $('.checkboxes4 input').prop("disabled", !chk);
    $('.checkboxes5 input').prop("disabled", !chk);
    $('.checkboxes55 input').prop("disabled", !chk);
    $('.checkboxes56 input').prop("disabled", !chk);

    $('#_WORDSAPI').prop("disabled", false);
    $('#_GOOGLE').prop("disabled", false);

    let wbf = $("#words_by_frequency").is(':checked');
    $('#ffrom').prop("disabled", !wbf);
    $('#fto').prop("disabled", !wbf);
    
}

function racha(id) {
    chkdict();
}


function newrow(wordInfoTbl) {
    if (col++%3==2) {
        wordInfoRow = document.createElement('div');
        wordInfoRow.classList.add(['list-row']);
        wordInfoTbl.appendChild(wordInfoRow);
    }
}

function finishbox(pagenum='') {
    if (wordInfoBox) {
        let pg = document.createElement('center');
        pg.innerText = pagenum ? pagenum : page++;
        wordInfoBox.appendChild(pg);
    }
}

function newbox(listitm="list-item") {
    finishbox();
    wordInfoBox = document.createElement('div');
    wordInfoBox.classList.add('my-4', 'p-4', listitm);
    wordInfoRow.appendChild(wordInfoBox);
}

function checkp(qs, id, buckcheck) {
    const ischeckeddef = buckcheck.defchecked;
    id = id.replace(/ /g, "_");

    var ischecked = ischeckedparam(id, ischeckeddef);
    if (ischecked != ischeckeddef) {
        qs.push(id+"="+ischecked);
    }
    return ischecked;
}
function checkps() {
    var qs=[];

    for (bucketid in checkboxdata) {
        var bucket = checkboxdata[bucketid];
        for (chid in bucket) {
            if (!/^most common/.test(chid) && chid!="all words") {
                checkp(qs, chid, bucket[chid]);
            }
        }
    }

    return qs.join("&");
}



function createFreqLetterLink(i, N) {
    let frqntls = frqntlses[N];
    let len = frqntls.length;
    let result;
    if (i==1) {
        result = {ffrom:frqntls[1], fto:Number.MAX_SAFE_INTEGER, lab:"1"};
    } else {
        result = {ffrom:frqntls[i], fto:frqntls[i-1]-0.005, lab:""+i};
    }
    let a = createlink(i,null,`&mode=words_by_frequency&N=${N}&i=${i}&len=${frqntls.length}&ffrom=${result.ffrom}&fto=${result.fto}`);
    a.innerText = result.lab;
    result.a = a;
    return result;
}


function createMywLetterLink(letter, mode="my_words") {
    let result;
    let a = createlink(letter,null,`&mode=${mode}&letter=`+letter);
    a.innerText = letter;
    result = {letter,a};
    return result;
}

let poidx=0;
function createpopoverlink(word0, masterword, extraarg="", apostr="", origin) {

    const a = document.createElement('a');
    const tmp = $("<div>"+word0+"</div>")[0];
    a.onmouseover = selectElementContents.bind(a, a);
    word0 = tmp.innerText;
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");
    a.id =     'popoveritm'+poidx++;
    a.classList.add('popoveritm');
    if (masterword==word) {
        a.classList.add('master');
    } else {
        a.classList.add('none');
    }

    // it does the trick
    a.setAttribute("id",a.id);
    a.setAttribute("tabindex","0");
    a.setAttribute("type","button");

    a.setAttribute("data-toggle","popover");
    a.setAttribute("data-placement","bottom");
    a.setAttribute("data-popover-content",word+extraarg);
    a.setAttribute("word",a.word = word+extraarg);

    if (origin) {
        a.href = "javascript:showPopup('"+a.word+"')";
    }

    a.onfocus=()=>{
        console.log("focus:"+word);
        curword = word;
    };

    a.innerHTML = apostr+tmp.innerHTML+apostr;
    return a;
}

function createas(cont, words, masterword, sep, apostr="", linksIdxFrom=0, linksIdxTo=999999999, origin) {
    let index=0;
    if (words) words.forEach(word => {
        const a = (linksIdxFrom<=index&&index<linksIdxTo) ? createpopoverlink(word, masterword, "", apostr, origin) : createi(word);
        const sp = document.createTextNode(sep);

        cont.appendChild(a);
        cont.appendChild(sp);
        index++;
    });
}
function createaas(cont, sentences, sep, origin) {
    sentences.forEach(txt => {
        var words = txt.split(" ");
        createas(cont, words, null, " ", "", 0, 10000, origin);
        const sp = document.createTextNode(sep);
        cont.appendChild(sp);
    });
}

function proplabel(property, masterword, parselabel=false, linksIdxLabFrom=0, linksIdxValTo=9999999, prefix="",comma=", ",apostr="", origin) {
    if (!property.value || (Array.isArray(property.value)&&!property.value.length)) {
        return null;
    }
    const characteristic = document.createElement('dl');
    characteristic.className = 'row';
    const label = document.createElement('dt');
    label.className = 'col-sm-3';
    const value = document.createElement('dd');

    if (parselabel) {
        createas(label, property.label, masterword, comma, apostr, linksIdxLabFrom, 100000, origin);
    } else {
        label.innerText = prefix + property.label;
    }

    if (!parselabel && (property.label === 'examples'||property.kind === 'examples')) {
        createaas(value, property.value, ", ", origin);
    } else {
        let normal = property.value.slice(0, linksIdxValTo);
        createas(value, normal, null, ", ", "", 0, 100000, origin);

        let remainder = property.value.slice(linksIdxValTo, property.value.length);
        createaas(value, remainder, ", ", origin);
    }

    value.className = 'col-sm-9';
    characteristic.appendChild(label);
    characteristic.appendChild(value);
    return characteristic;
}

function printLabel(data) {
    if (data.frequency) {
        const dlfreq = labelled("frequency", data.frequency);
        info.appendChild(dlfreq);
    }

    if (data.pronunciation) {
        // loops over the values for each definition
        var prons = [];
        for (pron in data.pronunciation) {
            let p = data.pronunciation[pron];
            if (p && p!=="undefined") {
                prons.push(pron+":"+p);
            }
        }
        const dlp1 = labelled("pronunciation ", prons.join(", "));
        info.appendChild(dlp1);
    }

}

async function gocur() {
    let e = isElectron();

    if (e) {
        window.api.loadWindow({uri:"index.html?word="+currentpopword,width:800,height:600});
    } else {
        window.open("?word="+currentpopword, "_blank");
    }
}


function hidePopup() {
    currentlink=null;
    currentpopword=null;
    currentmodal=null;
    popupcache=null;
    //$("[data-toggle=popover]").popover("hide");
    hidepopover($("[data-toggle=popover]"));
}

function showPopup(word, modal) {

    if (word) currentpopword = word;
    if (modal) currentmodal = modal;

    //$(currentlink).popover('show');
    showpopover($(currentlink));

}

function speakIt(which) {
    var sel = window.getSelection();
    let txt;
    let lpg=$(`#livepop .pg`);
    let e = getSelectionBoundaryElement(true);
    if (lpg[0].contains(e)) {
        console.log("contains");
        for (let i=0; i<sel.rangeCount; i++) {
            let r = sel.getRangeAt(i);
            txt = r.toString();
            if (txt) break;
        }
    }
    if (!txt) txt = currentpopword;
    speak(txt, which);
}
function selectPopupAll() {
    let lpg=$(`#livepop .pg`);

    var range = document.createRange();
    range.selectNodeContents(lpg[0]);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    lpg.trigger("mouseup");
}

async function fetchPopup() {

    if (!currentlink) return;
    const word = currentpopword;
    const mode = "minimal_cluster";
    const data = await fetchWord(word, mode);

    let div=document.createElement("div");
    div.classList.add("popover-body");
    div.id = "livepop";
    let def=document.createElement("div");
    def.classList.add("pg");
    div.appendChild(def);

    appendPopupCluster(data, def);

    function aha(fun,label) {
        let a2 = document.createElement("a");
        a2.href = `javascript:${fun}`;
        a2.innerText = label;
        div.appendChild(a2);
        div.appendChild(document.createTextNode("\u00A0\u00A0\u00A0"));
    }

    if (currentpopword!=currentlink.word) {
        aha(`showPopup(currentlink.word)`,"--Back--");
    }
    if (currentmodal === "examples") {
        aha(`showPopup(null,'light')`,"--More--");
    } else {
        aha(`showPopup(null,'examples')`,"--Less--");
    }
    aha(`gocur()`,"--Nav--");
    aha(`speakIt(1)`,"voice 1");
    aha(`speakIt(2)`,"voice 2");
    aha(`selectPopupAll()`,"--select all--");
    aha(`hidePopup()`,"--Hide--");


    return div;

}

function updateSingleWord() {

    const mode = lastmode;
    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();
    $("#title").html(data.word?data.word:"");

    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    printLabel(data);

    // logs no results if word data is not found
    if (!data.results || data.results.length < 1) {
        return wordInfoTbl.appendChild(document.createTextNode('No results matched.'));
    }

    data.results.map(val => {

        if (!val.partOfSpeech || isch(val.partOfSpeech)) {

            newrow(wordInfoTbl);
            newbox();

            // loops over the values for each definition
            val.properties.map(property => {

                if (property.kind === 'definition') {
                    const def = proplabel(property);
                    if (def) wordInfoBox.appendChild(def);
                } else if (property.label === 'definition') {
                    // creates new heading-3 element
                    const def = document.createElement('div');

                    if (property.kind === 'definition' || isch("definition")) {
                        var txt = property.value.toString();
                        var words = txt.split(" ");
                        createas(def, words, null, " ");
                    }

                    // adds text to the element
                    //def.innerText = property.value;

                    // appends class value for styling
                    def.classList.add(['definition']);

                    // adds the element to our list item
                    wordInfoBox.appendChild(def);
                } else if (property.isString || property.label === 'part of speech') {
                    const italicLabel = document.createElement('small');
                    italicLabel.innerText = property.value ? property.value : property.label+"?";
                    italicLabel.classList.add('lead');
                    if (property.label === 'part of speech') {
                        italicLabel.classList.add('font-italic');
                    } else if (property.label === 'pronunciation') {
                        italicLabel.classList.add('semismall');
                    }
                    wordInfoBox.appendChild(italicLabel);
                } else if (property.value && isch(property.label)) {
                    const characteristic = proplabel(property);

                    if (characteristic) wordInfoBox.appendChild(characteristic);
                }
            });

        }

    });
    finishbox();
}

function clusterBody(data, wordInfoTbl, withmainword, modalMode, origin) {

    let itms=99;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    data.results.map(val => {
        if (modalMode === "examples") {

            if (val.examples && val.examples.length) {
                createaas(wordInfoTbl, val.examples, ", ", origin);
            } else {
                createaas(wordInfoTbl, ["("+val.definition+")"], ", ", origin);
            }
        } else {
            let  cmp,comma,apostr;
            if (modalMode === "light") {

                cmp = document.createElement("div");
                cmp.classList.add('smallf');
                wordInfoTbl.appendChild(cmp);
                comma="";
                apostr="'";
            } else {
                if (itms++%100==99) {
                    newrow(wordInfoTbl);
                    newbox("list-item-lg");
                }
                cmp = wordInfoBox;

            }

            const prearray = val.level||val.partOfSpeech?["("+(val.level?val.level+" ":"")+val.partOfSpeech+")"]:[];
            const property = {
                label:prearray.concat(val.synonyms), 
                value:val.similar.concat([val.definition])
            };
    
            const def = proplabel(property, withmainword?data.word:val.word, true, prearray.length, val.similar.length, "", comma, apostr, origin);
            if (def) {
                def.classList.add('definition');
                cmp.appendChild(def);
            }
    
            let b = document.createElement("b");
            b.innerText = "x:";
            def.children[1].appendChild(b);

            if (val.examples && val.examples.length) {
                createaas(def.children[1], val.examples, ", ", origin);
            }
        }


    });
    finishbox();
}

function updateMostCommon() {

    const mode = lastmode;
    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();
    $("#title").html(mode?mode:"");

    const dlclust = labelled("no. common words", data.noWords);
    info.appendChild(dlclust);
    const dlclust2 = labelled("definitions", data.noDefinitions);
    info.appendChild(dlclust2);

    clusterBody(lastresult, wordInfoTbl, false);

}

function updateWords() {

    const mode = lastmode;
    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();
    $("#title").html(mode?mode:"");


    const dlclust = labelled("no. words", data.noWords);
    info.appendChild(dlclust);
    const dllet = labelled("group id", urlletter);
    info.appendChild(dllet);

    if (urllen) {

        const dlq0 = labelled("quantiles of", urlN);
        info.appendChild(dlq0);

        urllen = Number(urllen);
        urli = Number(urli);
        const dlpag = labelled("Page "+(urli)+" of "+(urllen-1), "Go to ");

        function addnav(i, lab0) {
            let iv = createFreqLetterLink(i, urlN);
            iv.a.innerText = `${lab0}(${iv.lab})`;
            dlpag.children[1].appendChild(iv.a);
            let spc = document.createTextNode("  ");
            dlpag.children[1].appendChild(spc);
        }
        if (urli>1) {
            if (urli != 2) {
                addnav(1, "first")
            }
            addnav(urli-1, "prev")
        }
        if (urli<urllen-1) {
            addnav(urli+1, "next")
            if (urli != urllen-2) {
                addnav(urllen-1, "last")
            }
        }
        info.appendChild(dlpag);
    }

    let itms=999;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    newrow(wordInfoTbl);
    newbox("list-item-lg");

    wordInfoBox.classList.add('definition');
    let i = 0, ln = data.results.length;
    let group = [];
    for (let wi=0; wi<ln; wi++) {
        let w = data.results[wi];
        let let0 = w[0].charCodeAt(0);
        let cc = letters[i].charCodeAt(0);
        if (let0 > cc) {
            finishbox(i?letters[i]:"~");
            do {
                i++;
                if (i==letters.length) {
                    break;
                }
                cc = letters[i].charCodeAt(0);
            } while (let0 >= cc);
            i--;

            if (group.length) {
                createas(wordInfoBox, group, null, ", ");
            }
            group = [w];
        } else {
            group.push(w);
        }
    }

    if (group.length) {
        finishbox(letters[i]);
        createas(wordInfoBox, group, null, ", ");
    }
    finishbox("1");

}

function updateCluster() {

    const mode = lastmode;
    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();
    $("#title").html(data.word?data.word:"");

    let itms=99;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    const dlclust = labelled("word cluster entries", data.noClusterEntries);
    info.appendChild(dlclust);

    clusterBody(lastresult, wordInfoTbl, true);
}

function appendPopupCluster(data, wordInfoTbl) {

    let itms=99;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;


    clusterBody(data, wordInfoTbl, true, currentmodal, true);
}

function update(firsttime) {
    //update_to = undefined;

    const mode = lastmode;
    const data = lastresult;

    $("#word-input").val(data.word?data.word:"");

    switch (mode) {
    case "most_common_3000_a-e":
    case "most_common_3000_f-p":
    case "most_common_3000_q-z":
    case "most_common_10000_a-c":
    case "most_common_10000_d-h":
    case "most_common_10000_i-o":
    case "most_common_10000_p-r":
    case "most_common_10000_s-z":
    case "top3000":
    case "top10000":
    case "my_word_cls":
        if (firsttime) {
            updateMostCommon();
        }
        break;
    
    case "most_common_3000_words":
    case "most_common_10000_words":
    case "all_words":
    case "my_words":
    case "words_by_frequency":
        if (firsttime) {
            updateWords();
        }
        break;

    case "synonym_cluster":
    case "minimal_cluster":
        if (firsttime) {
            updateCluster();
        }
        break;
    default:
        updateSingleWord();
        break;
    }

/*
    $(".popoveritm").hover(function(){
        if (!this.popped) {
            this.popped=1;
            PopoverComponent.init({
                ele: "#"+$(this).attr("id"),
                showOnHover: true
              });
        }
    });
*/
    initpop();
}

let curword, groups = {};
var altdown;

function addToGroup(group, word) {
    if (!groups[group]) {
        groups[group] = {};
    }
    groups[group][word] = 1;
    doLater(saveGroups, 2500);
}
$(document).keydown(function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    altdown = !!evt.altKey;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        hidePopup();
    }
});
$(document).keyup(function(evt) {
    altdown = 0;
});
$(document).keypress(async function(e){
    console.log(` code:${e.code} curword:${curword}`);
    if (/Key[A-F]/.test(e.code) && curword) {
        console.log(` ${e.code}  curword:${curword} added`);
        addToGroup(e.code[3], curword);
        //await navigator.clipboard.writeText(s);
    }
    if (e.code==='Space') {
        if (currentpopword) {
            speak(currentpopword, currentlink.which);
            e.preventDefault();
        }
    }
});

    
// wait on voices to be loaded before fetching list
window.speechSynthesis.onvoiceschanged = function() {
    console.log("speechSynthesis voices:", window.speechSynthesis.getVoices());
};

// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){

    console.log("speechSynthesis voices(document ready):", window.speechSynthesis.getVoices());

    // creates a variable that represents our
    // word info container
    wordInfoTbl = document.querySelector('#word-info');
    info = document.querySelector("#info");


    let chbs1 = document.querySelector('.checkboxes1');
    let chbs2 = document.querySelector('.checkboxes2');
    let chbs3 = document.querySelector('.checkboxes3');
    let chbs4 = document.querySelector('.checkboxes4');
    let chbs5 = document.querySelector('.checkboxes5');
    let chbs55 = document.querySelector('.checkboxes55');
    let chbs56 = document.querySelector('.checkboxes56');
    let chbs6 = document.querySelector('.checkboxes6');
    let chbs7 = document.querySelector('.checkboxes7');
    var chbuckets = {bucket1:chbs1,bucket2:chbs2,bucket3:chbs3,bucket4:chbs4,bucket5:chbs5,bucket55:chbs55,bucket56:chbs56};

    for (bucketid in chbuckets) {
        var chbuck = chbuckets[bucketid];
        var bucket = checkboxdata[bucketid];
        for (chid in bucket) {
            addCheckbox(chbuck, chid, bucket[chid]);
        }
    }
    var bucket6 = checkboxdata["bucket6"];
    for (rid in bucket6) {
        addRadio(chbs6, rid, bucket6[rid], "mode");
    }
    var bucket7 = checkboxdata["bucket7"];
    for (rid in bucket7) {
        addRadio(chbs7, rid, bucket7[rid], "mode");
    }

    if (!urlffrom) urlffrom = 5;
    if (!urlfto) urlfto = 100;
    let ffromtoinputs=`
    <input class='form-check-input input-sm' size=8 type='input' id='ffrom' name='ffrom' value='${urlffrom}' placeholder='0'/>..
    <input class='form-check-input input-sm' size=8 type='input' id='fto' name='fto' value='${urlfto}' placeholder='100'/>`;

    addRadio(chbs7, "words by frequency", {defchecked:false}, "mode", null, ffromtoinputs);

    let A = 'A'.charCodeAt(0);
    let Z = 'Z'.charCodeAt(0);
    let top3000 = document.querySelector(".top3000");
    for (let i = A; i<=Z; i++) {
        let letter = String.fromCharCode(i);
        let a = createlink(letter, null, "&top=3000&letter="+letter);
        let spc = document.createTextNode("  ");
        top3000.appendChild(a);
        top3000.appendChild(spc);
    }
    let top10000 = document.querySelector(".top10000");
    for (let i = A; i<=Z; i++) {
        let letter = String.fromCharCode(i);
        let a = createlink(letter, null, "&top=10000&letter="+letter);
        let spc = document.createTextNode("  ");
        top10000.appendChild(a);
        top10000.appendChild(spc);
    }
    function createfrlabs(N) {
        let freqlabels = document.querySelector(".freqlabels"+N);
        if (window["frqntlses"]) {
            let frqntls = window["frqntlses"][N];
            for (let i=1; i<frqntls.length; i++) {
                let iv = createFreqLetterLink(i, N);
                freqlabels.appendChild(iv.a);
                let spc = document.createTextNode("  ");
                freqlabels.appendChild(spc);
            }
        }
    }
    function createmyworss(cl=".mywords", mode="my_words") {
        let letters=['A','B','C','D','E','F'];
        let mywlabels = document.querySelector(cl);
        for (let letter of letters) {
            let iv = createMywLetterLink(letter, mode);
            mywlabels.appendChild(iv.a);
            let spc = document.createTextNode("  ");
            mywlabels.appendChild(spc);
        }
    }
    createfrlabs(800);
    createfrlabs(3000);
    createfrlabs(10000);
    createmyworss();
    createmyworss(".mywordscl", "my_word_cls")

    if (urltop) {
        $("input[type='radio'][name='mode']:checked").removeAttr('checked');
    } else if (!urlmode) {
        $("#dictionary").attr('checked', 'checked');
    }
    chkdict();

      //$('.form-check-input').change(function(){
    //    $(this).text() 
    //});

    initSpeak();

    if (!isElectron()) {
        console.log("It is not electron, hiding restricted pages.");
    } else {
        console.log("It is electron, showing restricted pages.");
        $(".restricted-electron").show();
    }
    
    async function dosubmit(word) {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Loading...');

        try {
            var mode = $("input[type='radio'][name='mode']:checked").val();
            const qs = [];
            qs.push(`letter=${urlletter}`);
            if (!mode) {
                if (urltop) {
                    mode = `top${urltop}`;
                    qs.push(`top=${urltop}`);
                } else {
                    if (urlmode) {
                        mode = urlmode;
                    } else {
                        mode = "dictionary";
                    }
                }
            }
        
            qs.push(`ffrom=${urlffrom}`);
            qs.push(`fto=${urlfto}`);
        
            const data = await fetchWord(word, mode, qs);

            lastmode = mode;
            lastresult = data;
            
            update(true);

        } catch (e) {
            // logs the error if one exists
            console.log(e);

            // displays message to user if there is an error
            $('#word-info').html('There was an error fetching the word data');
        }
    }

    // adds a submit listened to our <form> element
    if ((urlmode && urlmode!="dictionary") || urltop || url_word) {
        dosubmit(url_word);
    }
});