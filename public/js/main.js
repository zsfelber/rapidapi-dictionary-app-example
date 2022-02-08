
var lastresult;
var lastmode;
var update_to;
var page,col=2,wordInfoTbl,wordInfoRow,wordInfoBox,info;

var letters=[String.fromCharCode(1)].concat(numbers()).concat([":"]).concat(ucases()).concat(lcases());
var frqntls=[0, ];

var checkboxdata = {
    "bucket1": {
        "synonyms": { defchecked: true },
        "also": { defchecked: true },
        "attribute": { defchecked: false },
        "similar to": { defchecked: true },
        "antonyms": { defchecked: true },
        "derivation": { defchecked: false },
        "cause": { defchecked: false },
    },
    "bucket2": {
        "in category": { defchecked: false },
        "has categories": { defchecked: false },
        "type of": { defchecked: false },
        "has types": { defchecked: false },
        "substance of": { defchecked: false },
        "has substances": { defchecked: false },
        "entails": { defchecked: false },
    },
    "bucket3": {
        "part of": { defchecked: false },
        "has parts": { defchecked: false },
        "member of": { defchecked: false },
        "has members": { defchecked: false },
        "usage of": { defchecked: false },
        "has usages": { defchecked: false },
    },
    "bucket4": {
        "instance of": { defchecked: false },
        "has instances": { defchecked: false },
        "in region": { defchecked: false },
        "pertains to": { defchecked: false },
        "definition": { defchecked: true },
        "examples": { defchecked: true },
        "verb group": { defchecked: false },
    },
    "bucket5": {
        "verb": { defchecked: true },
        "adjective": { defchecked: true },
        "noun": { defchecked: true },
        "adverb": { defchecked: true },
        "preposition": { defchecked: true },
        "participle": { defchecked: true },
        "conjunction": { defchecked: true },
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
        "all words": { defchecked: false },
    },
};

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

    var panel = $(` <div class='form-check form-check-1'>
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

    var panel = $(` <div class='form-check form-check-1'>
            <input class='form-check-input' type='radio' id='${id}' name='${groupid}' value='${id}' ${ischecked ? "checked" : ""} onchange="racha('${id}')"/>
            <label class='form-check-label' for='${id}'>
            ${label}
            ${extraelements}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
}

function newrow() {
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
    $(el).trigger("mouseup");
    //el.focus();
}

function createa(word0, masterword, extraarg="") {
    const a = document.createElement('a');
    a.onmouseover = selectElementContents.bind(a, a);
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");
    a.href = "?word="+word+extraarg+"&"+checkps();
    if (masterword==word) {
        a.classList.add('master');
    } else {
        a.classList.add('none');
    }
    a.innerText = word0;
    return a;
}
function createi(word) {
    const i = document.createElement('i');
    i.innerText = word;
    return i;
}
function createas(cont, words, masterword, sep, linksIdxFrom=0, linksIdxTo=999999999) {
    let index=0;
    if (words) words.forEach(word => {
        const a = (linksIdxFrom<=index&&index<linksIdxTo) ? createa(word, masterword) : createi(word);
        const sp = document.createTextNode(sep);

        cont.appendChild(a);
        cont.appendChild(sp);
        index++;
    });
}
function createaas(cont, sentences, sep) {
    sentences.forEach(txt => {
        var words = txt.split(" ");
        createas(cont, words, null, " ");
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

function proplabel(property, masterword, parselabel=false, linksIdxLabFrom=0, linksIdxValTo=9999999, prefix="") {
    const characteristic = document.createElement('dl');
    characteristic.className = 'row';
    const label = document.createElement('dt');
    label.className = 'col-sm-3';
    const value = document.createElement('dd');

    if (parselabel) {
        createas(label, property.label, masterword, ", ", linksIdxLabFrom);
    } else {
        label.innerText = prefix + property.label;
    }

    if (!parselabel && (property.label === 'examples'||property.kind === 'examples')) {
        createaas(value, property.value, ", ");
    } else {
        let normal = property.value.slice(0, linksIdxValTo);
        createas(value, normal, null, ", ");

        let remainder = property.value.slice(linksIdxValTo, property.value.length);
        createaas(value, remainder, ", ");
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
            prons.push(pron+":"+data.pronunciation[pron]);
        }
        const dlp1 = labelled("pronunciation ", prons.join(", "));
        info.appendChild(dlp1);
    }

}

function updateSingleWord() {

    const mode = lastmode;
    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();
    $("#title").html(data.word?data.word:"");

    // logs no results if word data is not found
    if (!data.results || data.results.length < 1) {
        return wordInfoTbl.appendChild(document.createTextNode('No results matched.'));
    }

    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    printLabel(data);

    data.results.map(val => {

        if (!val.partOfSpeech || isch(val.partOfSpeech)) {

            newrow();
            newbox();

            // loops over the values for each definition
            val.properties.map(property => {

                if (property.kind === 'definition') {
                    const def = proplabel(property);
                    wordInfoBox.appendChild(def);
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
                    italicLabel.classList.add('lead','font-italic');
                    wordInfoBox.appendChild(italicLabel);
                } else if (isch(property.label)) {
                    const characteristic = proplabel(property);

                    wordInfoBox.appendChild(characteristic);
                }
            });

        }

    });
    finishbox();
}

function clusterBody(withmainword) {

    const mode = lastmode;
    const data = lastresult;

    let itms=99;
    page=1;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    data.results.map(val => {
        if (itms++%100==99) {
            newrow();
            newbox("list-item-lg");
        }
        const prearray = val.level||val.partOfSpeech?["("+(val.level?val.level+" ":"")+val.partOfSpeech+")"]:[];
        const property = {
            label:prearray.concat(val.synonyms), 
            value:val.similar.concat([val.definition])
        };

        const def = proplabel(property, withmainword?data.word:val.word, true, prearray.length, val.similar.length);
        def.classList.add('definition');
        wordInfoBox.appendChild(def);

        if (val.examples && val.examples.length) {
            let b = document.createElement("b");
            b.innerText = "x:";
            def.children[1].appendChild(b);
            createaas(def.children[1], val.examples, ", ");
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

    clusterBody(false);

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

    newrow();
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

    clusterBody(true);
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
    case "words_by_frequency":
        if (firsttime) {
            updateWords();
        }
        break;

    case "synonym_cluster":
        if (firsttime) {
            updateCluster();
        }
        break;
    default:
        updateSingleWord();
        break;
    }
}

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
    let chbs6 = document.querySelector('.checkboxes6');
    let chbs7 = document.querySelector('.checkboxes7');
    var chbuckets = {bucket1:chbs1,bucket2:chbs2,bucket3:chbs3,bucket4:chbs4,bucket5:chbs5};

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
    let freqlabels = document.querySelector(".freqlabels");
    for (let i = -1; i<=24; i++) {
        let fr = (i*0.25);
        let t = (i*0.25+0.249);
        if (i==-1) {fr=0;t=0;}
        else if (i==0) {fr=0.001;}
        else if (i==24) t=100;
        let a = createa(i>=0?fr.toFixed(1):"?", null, "&mode=words_by_frequency&ffrom="+fr+"&fto="+t);
        let spc = document.createTextNode("  ");
        freqlabels.appendChild(a);
        freqlabels.appendChild(spc);
    }
    
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

            var qs=[`word=${word}`];
            var mode = $("input[type='radio'][name='mode']:checked").val();
            if (!mode) {
                if (urltop) {
                    mode = `top${urltop}`;
                    qs.push(`top=${urltop}`);
                    qs.push(`letter=${urlletter}`);
                } else {
                    mode = "dictionary";
                }
            }
            qs.push(`mode=${mode}`);
            qs.push(`ffrom=${urlffrom}`);
            qs.push(`fto=${urlfto}`);

            const data0 = await fetch(`/.netlify/functions/getWord?${qs.join("&")}`, { mode: 'cors'});
            // asynchronously calls our custome function
            const data = await data0.json();

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