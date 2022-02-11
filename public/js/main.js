
var lastresult;
var lastmode;
var update_to;
var page,col=2,wordInfoTbl,wordInfoRow,wordInfoBox,info;

var letters=[String.fromCharCode(1)].concat(numbers()).concat([":"]).concat(ucases()).concat(lcases());

var frqntls800=[0, 1.605, 1.735, 1.745, 1.825, 1.905, 1.975, 2.025, 2.035, 2.125, 2.195, 2.245, 2.305, 2.365, 2.405, 2.475, 2.525, 2.575, 2.635, 2.695, 2.755, 2.815, 2.875, 2.935, 2.995, 3.055, 3.125, 3.195, 3.265, 3.345, 3.425, 3.515, 3.615, 3.705, 3.815, 3.925, 4.045, 4.175, 4.355, 4.565, 4.865, 5.525,100];
var frqntls3000=[0, 1.735, 1.825, 2.035, 2.245, 2.435, 2.625, 2.815, 3.035, 3.275, 3.575, 3.955, 4.555,100];
var frqntls10000=[0, 2.035, 2.665, 3.415,100];
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
        "my words": { defchecked: false, classes: "inblock" },
    },
};

function isElectron() {
    // https://stackoverflow.com/questions/61725325/detect-an-electron-instance-via-javascript

    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

async function fetchWord(word, mode, qs=[]) {
    let apis=[];
    if (isch("WORDSAPI")) apis.push("wordsapi");
    if (isch("GOOGLE")) apis.push("google");
    qs.push(`word=${word}`);
    qs.push(`mode=${mode}`);
    qs.push(`apis=${apis.join("-")}`);

    let e = isElectron(),data;
    console.log("isElectron:"+e);
    if (e) {
        // nodeIntegration: true
        const { ipcRenderer } = window["require"]('electron');
        //const { app, BrowserWindow, ipcMain, Notification } = window["require"]("electron");

        data = await ipcRenderer.invoke('service', {id:"goWord", qs});

    } else {

        const data0 = await fetch(`/.netlify/functions/getWord?${qs.join("&")}`, { mode: 'cors'});
        // asynchronously calls our custome function
        data = await data0.json();
    }

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

function isch(id) {
    id = id.replace(/ /g, "_");
    var chh = $("#"+id);
    if (chh.length) {
        return chh.val()=="true";
    } else {
        alert("unknown label : "+id);
    }
}

function checha(id) {
    var ch = $("#_"+id);
    var chh = $("#"+id);
    chh.val(ch.is(':checked'));

    if (update_to) {
        clearTimeout(update_to);
    }
    update_to = setTimeout(update, 1000, false);
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

function ischeckedparam(param, ischeckeddef) {
    var v = $.urlParam(param);
    if (v === null) {
        return ischeckeddef;
    }
    return v == (""+ischeckeddef) ? ischeckeddef : !ischeckeddef;
}

function ischeckedradio(groupid, rid, ischeckeddef) {
    var v = $.urlParam(groupid)==rid;
    if (v === null) {
        return ischeckeddef;
    }
    return v;
}

function addCheckbox(cont, id, buckcheck, label) {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedparam(id, ischeckeddef);

    var panel = $(` <div class='${buckcheck.classes?buckcheck.classes:''} form-check form-check-1'>
            <input type='hidden' id='${id}' name='${id}' value='${ischecked}'>
            <input class='form-check-input' type='checkbox' id='_${id}' ${ischecked ? "checked" : ""} onchange="checha('${id}')"/>
            <label class='form-check-label' for='_${id}'>
            ${label}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
}

function addRadio(cont, id, buckcheck, groupid, label, extraelements="") {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedradio(groupid, id, ischeckeddef);

    var panel = $(` <div class='${buckcheck.classes?buckcheck.classes:''} form-check form-check-1'>
            <input class='form-check-input' type='radio' id='${id}' name='${groupid}' value='${id}' ${ischecked ? "checked" : ""} onchange="racha('${id}')"/>
            <label class='form-check-label' for='${id}'>
            ${label}
            ${extraelements}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
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

function selectElementContents(el) {
    if (!el) el = this;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    curword = el.innerText;
    $(el).trigger("mouseup");
    //el.focus();
}

let poidx=0;
function createa(word0, masterword, extraarg="", origin) {

    const a = document.createElement('a');
    const tmp = $("<div>"+word0+"</div>")[0];
    a.onmouseover = selectElementContents.bind(a, a);
    word0 = tmp.innerText;
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");
    a.id =     'popoveritm'+poidx++;
    a.modalMode = 'examples';
    a.classList.add('popoveritm');
    if (masterword==word) {
        a.classList.add('master');
    } else {
        a.classList.add('none');
    }
    if (origin) {
        a.href = "javascript:replacePopup('"+word+extraarg+"','#"+origin+"','#"+a.id+"')"
    }

    // it does the trick
    a.setAttribute("tabindex","0");
    a.setAttribute("type","button");

    a.setAttribute("data-toggle","popover");
    a.setAttribute("data-placement","bottom");
    a.setAttribute("data-popover-content",word+extraarg);
    a.word = word+extraarg;

    a.innerHTML = tmp.innerHTML;
    return a;
}
function createi(word) {
    const i = document.createElement('i');
    i.innerText = word;
    return i;
}
function createas(cont, words, masterword, sep, linksIdxFrom=0, linksIdxTo=999999999, origin) {
    let index=0;
    if (words) words.forEach(word => {
        const a = (linksIdxFrom<=index&&index<linksIdxTo) ? createa(word, masterword, "", origin) : createi(word);
        const sp = document.createTextNode(sep);

        cont.appendChild(a);
        cont.appendChild(sp);
        index++;
    });
}
function createaas(cont, sentences, sep, origin) {
    sentences.forEach(txt => {
        var words = txt.split(" ");
        createas(cont, words, null, " ", 0, 10000, origin);
        const sp = document.createTextNode(sep);
        cont.appendChild(sp);
    });
}

function labelled(label, value) {
    const dl = document.createElement('dl');
    //dl.className = 'row';
    const dt = document.createElement('dt');
    dt.innerText = label;
    //dt.className = 'col-sm-3';
    const dd = document.createElement('dd');
    dd.innerText = value;
    //dd.className = 'col-sm-9';
    dl.appendChild(dt);
    dl.appendChild(dd);
    return dl;
}

function proplabel(property, masterword, parselabel=false, linksIdxLabFrom=0, linksIdxValTo=9999999, prefix="",comma=", ", origin) {
    if (!property.value || (Array.isArray(property.value)&&!property.value.length)) {
        return null;
    }
    const characteristic = document.createElement('dl');
    characteristic.className = 'row';
    const label = document.createElement('dt');
    label.className = 'col-sm-3';
    const value = document.createElement('dd');

    if (parselabel) {
        createas(label, property.label, masterword, comma, linksIdxLabFrom, 100000, origin);
    } else {
        label.innerText = prefix + property.label;
    }

    if (!parselabel && (property.label === 'examples'||property.kind === 'examples')) {
        createaas(value, property.value, ", ", origin);
    } else {
        let normal = property.value.slice(0, linksIdxValTo);
        createas(value, normal, null, ", ", 0, 100000, origin);

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

async function go(id, x) {
    let q=$(id);
    window.open("?word="+q[0].word, "_blank");
}

async function showPopup(id, x) {
    let q=$(id);
    q[0].modalMode=x;
    q[0].loaded=null;
    q.popover('show');
}
async function replacePopup(word, origin, id) {
    let q=$(id);
    let oq=$(origin);

    fetchPopup(q[0], false, oq[0].modalMode, origin).then((def)=>{
        let elem = $(def);
        oq[0].loadedtmp = elem;
        console.log("navigated in:"+origin+" to:"+id);
        //console.log(this.loaded.html());
        oq.popover('show');
    });

}

async function fetchPopup(a0, fully=1, modal, origin) {
    let id = $(a0).attr("id");
    let word = a0.word;
    if (!modal) modal = a0.modalMode;
    const mode = "minimal_cluster";
    const data = await fetchWord(word, mode);

    let q=$('<div class="popover-body"></div>');
    let def = q[0];

    appendPopupCluster(data, def, modal, id);

    if (fully) {

        let a = document.createElement("a");
        if (modal === "examples") {
            a.href = `javascript:showPopup('#${id}','light')`;
            a.innerText = "--More--";
        } else {
            a.href = `javascript:showPopup('#${id}','examples')`;
            a.innerText = "--Less--";
        }
        def.appendChild(a);

        def.appendChild(document.createTextNode("\u00A0\u00A0\u00A0"));

        let a2 = document.createElement("a");
        a2.href = `javascript:go('#${id}')`;
        a2.innerText = "--Nav--";
        def.appendChild(a2);

        def.appendChild(document.createTextNode("\u00A0\u00A0\u00A0"));

        let a3 = document.createElement("a");
        a3.href = `javascript:$('#${id}').popover('hide')`;
        a3.innerText = "--Hide--";
        def.appendChild(a3);
    } else {
        let a4 = document.createElement("a");
        a4.href = `javascript:showPopup('${origin}','${modal}')`;
        a4.innerText = "--Back--";
        def.appendChild(a4);

    }

    return def;

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
            }
        } else {
            let  cmp,comma;
            if (modalMode === "light") {

                cmp = $("<div class='smallf'></div>")[0];
                wordInfoTbl.appendChild(cmp);
                comma=":";
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
    
            const def = proplabel(property, withmainword?data.word:val.word, true, prearray.length, val.similar.length, "", comma, origin);
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

function appendPopupCluster(data, wordInfoTbl, modalMode, origin) {

    let itms=99;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;


    clusterBody(data, wordInfoTbl, true, modalMode, origin);
}

function update(firsttime) {
    update_to = undefined;

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

let curword, collected = {};
$(document).keypress(async function(e){
    console.log(` code:${e.code} curword:${curword}`);
    if (e.code==='KeyA' && curword) {
        console.log(` curword:${curword} added`);
        collected[curword] = 1;
        let s = JSON.stringify(collected, null, 2)
        console.log(s);
        await navigator.clipboard.writeText(s);
    }
});

// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    $.urlParam = function(name, nothing=null){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return nothing;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || nothing;
    }


    // creates a variable that represents our
    // word info container
    wordInfoTbl = document.querySelector('#word-info');
    info = document.querySelector("#info");

    var urltop = $.urlParam('top');
    var urlletter = $.urlParam('letter');
    var urlffrom = $.urlParam('ffrom');
    var urlfto = $.urlParam('fto');


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
    <input class='form-check-input input-sm' size=1 type='input' id='ffrom' name='ffrom' value='${urlffrom}' placeholder='0'/>..
    <input class='form-check-input input-sm' size=1 type='input' id='fto' name='fto' value='${urlfto}' placeholder='100'/>`;

    addRadio(chbs7, "words by frequency", {defchecked:false}, "mode", null, ffromtoinputs);

    let A = 'A'.charCodeAt(0);
    let Z = 'Z'.charCodeAt(0);
    let top3000 = document.querySelector(".top3000");
    for (let i = A; i<=Z; i++) {
        let letter = String.fromCharCode(i);
        let a = createa(letter, null, "&top=3000&letter="+letter);
        let spc = document.createTextNode("  ");
        top3000.appendChild(a);
        top3000.appendChild(spc);
    }
    let top10000 = document.querySelector(".top10000");
    for (let i = A; i<=Z; i++) {
        let letter = String.fromCharCode(i);
        let a = createa(letter, null, "&top=10000&letter="+letter);
        let spc = document.createTextNode("  ");
        top10000.appendChild(a);
        top10000.appendChild(spc);
    }
    function createfrlabs(frqntls, freqlabels) {
        for (let i=0, fr, pfr=0;  i<frqntls.length;  i++, pfr=fr+0.005) {
            fr = frqntls[i];
            let a = createa(""+i, null, "&mode=words_by_frequency&ffrom="+pfr+"&fto="+fr);
            let spc = document.createTextNode("  ");
            freqlabels.appendChild(a);
            freqlabels.appendChild(spc);
        }
    }
    let freqlabels800 = document.querySelector(".freqlabels800");
    let freqlabels3000 = document.querySelector(".freqlabels3000");
    let freqlabels10000 = document.querySelector(".freqlabels10000");
    createfrlabs(frqntls800, freqlabels800);
    createfrlabs(frqntls3000, freqlabels3000);
    createfrlabs(frqntls10000, freqlabels10000);
    
    if (urltop) {
        $("input[type='radio'][name='mode']:checked").removeAttr('checked');
    }

    chkdict();

      //$('.form-check-input').change(function(){
    //    $(this).text() 
    //});
    

    
    async function dosubmit(word) {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Loading...');

        try {
            var mode = $("input[type='radio'][name='mode']:checked").val();
            if (!mode) {
                if (urltop) {
                    mode = `top${urltop}`;
                    qs.push(`top=${urltop}`);
                    qs.push(`letter=${urlletter}`);
                } else {
                    var urlmode = $.urlParam('mode');
                    if (urlmode) {
                        mode = urlmode;
                    } else {
                        mode = "dictionary";
                    }
                }
            }
        
            const qs = [];
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

    var url_word = $.urlParam('word');
    var urlmode = $.urlParam('mode');
    var urltop = $.urlParam('top');
    // adds a submit listened to our <form> element
    if ((urlmode && urlmode!="dictionary") || urltop || url_word) {
        dosubmit(url_word);
    }
});