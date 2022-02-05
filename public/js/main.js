
var lastresult;
var lastmode;
var update_to;
var col=2,wordInfoTbl,wordInfoRow,wordInfoBox,info;

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
        "most common 3000": { defchecked: false },
        "most common 10000 a-c": { defchecked: false },
        "most common 10000 d-h": { defchecked: false },
        "most common 10000 i-o": { defchecked: false },
        "most common 10000 p-r": { defchecked: false },
        "most common 10000 s-z": { defchecked: false },
    }
};

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
}

function racha(id) {
    chkdict();
}

function ischeckedparam(param, ischeckeddef) {
    var v = $.urlParam(param);
    if (v === false) {
        return ischeckeddef;
    }
    return v == (""+ischeckeddef) ? ischeckeddef : !ischeckeddef;
}

function ischeckedradio(groupid, rid, ischeckeddef) {
    var v = $.urlParam(groupid)==rid;
    if (v === false) {
        return ischeckeddef;
    }
    return v == (""+ischeckeddef) ? ischeckeddef : !ischeckeddef;
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

function addRadio(cont, id, buckcheck, groupid, label) {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedradio(groupid, id, ischeckeddef);

    var panel = $(` <div class='form-check form-check-1'>
            <input class='form-check-input' type='radio' id='${id}' name='${groupid}' value='${id}' ${ischecked ? "checked" : ""} onchange="racha('${id}')"/>
            <label class='form-check-label' for='${id}'>
            ${label}
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

function newbox(listitm="list-item") {
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
            if (!/^most common/.test(chid)) {
                checkp(qs, chid, bucket[chid]);
            }
        }
    }

    return qs.join("&");
}
function createa(word0) {
    const a = document.createElement('a');
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");
    a.href = "?word="+word+"&"+checkps();
    a.classList.add(['none']);
    a.innerText = word0;
    return a;
}
function createas(cont, words, sep, linksIdxFrom=0, linksIdxTo=999999999) {
    let index=0;
    if (words) words.forEach(word => {
        const a = (linksIdxFrom<=index&&index<linksIdxTo) ? createa(word) : document.createTextNode(word);
        const sp = document.createTextNode(sep);

        cont.appendChild(a);
        cont.appendChild(sp);
        index++;
    });
}
function createaas(cont, sentences, sep) {
    sentences.forEach(txt => {
        var words = txt.split(" ");
        createas(cont, words, " ");
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

function proplabel(property, parselabel=false, linksIdxLabFrom=0, linksIdxValTo=9999999, prefix="") {
    const characteristic = document.createElement('dl');
    characteristic.className = 'row';
    const label = document.createElement('dt');
    label.className = 'col-sm-3';
    const value = document.createElement('dd');

    if (parselabel) {
        createas(label, property.label, ", ", linksIdxLabFrom);
    } else {
        label.innerText = prefix + property.label;
    }

    if (!parselabel && property.label === 'examples') {
        createaas(value, property.value, ", ");
    } else {
        let normal = property.value.slice(0, linksIdxValTo);
        createas(value, normal, ", ");

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

    const data = lastresult;
    $("#title").html(data.word);
    $("#word-input").val(data.word);

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();

    // logs no results if word data is not found
    if (!data.results || data.results.length < 1) {
        return wordInfoTbl.appendChild(document.createTextNode('No results matched.'));
    }

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
                        createas(def, words, " ");
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
    
}

function clusterBody() {

    const data = lastresult;

    let itms=99;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    data.results.map(val => {
        if (itms++%100==99) {
            newrow();
            newbox("list-item-lg");
        }
        const property = {
            label:["("+(val.level?val.level+" ":"")+val.partOfSpeech+")"].concat(val.synonyms), 
            value:val.similar.concat([val.definition])
        };

        const def = proplabel(property, true, 1, val.similar.length);
        wordInfoBox.appendChild(def);

    });
}

function updateMostCommon() {

    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();

    const dlclust = labelled("no. common words", data.noWords);
    info.appendChild(dlclust);
    const dlclust2 = labelled("definitions", data.noDefinitions);
    info.appendChild(dlclust2);

    clusterBody(data);

}

function updateCluster() {

    const data = lastresult;
    $("#title").html(data.word);
    $("#word-input").val(data.word);

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();

    let itms=99;
    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    const dlclust = labelled("word cluster entries", data.noClusterEntries);
    info.appendChild(dlclust);

    clusterBody(data);
}

function update(firsttime) {
    update_to = undefined;

    const mode = lastmode;

    switch (mode) {
    case "most_common_3000":
    case "most_common_10000_a-c":
    case "most_common_10000_d-h":
    case "most_common_10000_i-o":
    case "most_common_10000_p-r":
    case "most_common_10000_s-z":
        if (firsttime) {
            updateMostCommon();
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
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return false;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || false;
    }


    // creates a variable that represents our
    // word info container
    wordInfoTbl = document.querySelector('#word-info');
    info = document.querySelector("#info");



    let chbs1 = document.querySelector('.checkboxes1');
    let chbs2 = document.querySelector('.checkboxes2');
    let chbs3 = document.querySelector('.checkboxes3');
    let chbs4 = document.querySelector('.checkboxes4');
    let chbs5 = document.querySelector('.checkboxes5');
    let chbs6 = document.querySelector('.checkboxes6');
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
            qs.push(`mode=${mode}`);

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
    // adds a submit listened to our <form> element
    if ((urlmode && urlmode!="dictionary") || url_word) {
        dosubmit(url_word);
    }
});