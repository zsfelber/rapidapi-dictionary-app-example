
var lastresult;
var lastsyn;
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
        "create synonym cluster": { defchecked: false },
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

function ischeckedparam(param, ischeckeddef) {
    var v = $.urlParam(param);
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

function newrow() {
    if (col++%3==2) {
        wordInfoRow = document.createElement('div');
        wordInfoRow.classList.add(['list-row']);
        wordInfoTbl.appendChild(wordInfoRow);
    }
}

function newbox() {
    wordInfoBox = document.createElement('div');
    wordInfoBox.classList.add('my-4', 'p-4', 'list-item');
    wordInfoRow.appendChild(wordInfoBox);
}

function checkp(qs, id, buckcheck) {
    const ischeckeddef = buckcheck.defchecked;
    id = id.replace(/ /g, "_");
    if (id == "create_synonym_cluster") {

    } else {
        var ischecked = ischeckedparam(id, ischeckeddef);
        if (ischecked != ischeckeddef) {
            qs.push(id+"="+ischecked);
        }
    }
}
function checkps() {
    var qs=[];

    for (bucketid in checkboxdata) {
        var bucket = checkboxdata[bucketid];
        for (chid in bucket) {
            checkp(qs, chid, bucket[chid]);
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
function createas(cont, words, sep) {
    if (words) words.forEach(word => {
        const a = createa(word);
        const sp = document.createTextNode(sep);

        cont.appendChild(a);
        cont.appendChild(sp);
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

function proplabel(property, prefix="") {
    const characteristic = document.createElement('dl');
    characteristic.className = 'row';
    const label = document.createElement('dt');
    label.innerText = prefix + property.label;
    label.className = 'col-sm-3';
    const value = document.createElement('dd');

    if (property.label === 'examples') {
        createaas(value, property.value, ", ");
    } else {
        createas(value, property.value, ", ");
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

    // clears the word container if it had
    // previous data
    $('#word-info').empty();
    $('#info').empty();

    // logs no results if word data is not found
    if (data.length < 1) {
        return wordInfoTbl.appendChild(document.createTextNode('No results matched.'));
    }

    col=2;
    wordInfoBox=null;
    wordInfoRow=null;

    printLabel(data);

    data.results.map(val => {

        if (!val.partOfSpeech || isch(val.partOfSpeech)) {

            // loops over the values for each definition
            val.properties.map(property => {
                if (property.label === 'definition') {
                    newrow();
                    newbox();

                    // creates new heading-3 element
                    const def = document.createElement('div');

                    if (isch("definition")) {
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

function updateCluster() {
    const data = lastresult;

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

    data.results.map(val => {
        if (itms++%100==99) {
            newrow();
            newbox();
        }

        const characteristic = proplabel({label:val.words, value:val.definition});
        wordInfoBox.appendChild(characteristic);

    });
}

function update(firsttime) {
    update_to = undefined;

    const syn = lastsyn;

    if (syn) {
        if (firsttime) {
            updateCluster();
        }
    } else {
        updateSingleWord();
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
    var chbuckets = {bucket1:chbs1,bucket2:chbs2,bucket3:chbs3,bucket4:chbs4,bucket5:chbs5};

    for (bucketid in checkboxdata) {
        var bucket = checkboxdata[bucketid];
        for (chid in bucket) {
            addCheckbox(chbuckets[bucketid], chid, bucket[chid]);
        }
    }

    //$('.form-check-input').change(function(){
    //    $(this).text() 
    //});
    

    
    async function dosubmit(word) {

        $("#word-input").val(word);
        $("#title").html(word);

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Loading...');

        try {

            var syn = ischeckedparam("create_synonym_cluster", false);
            const data0 = await fetch(`/.netlify/functions/getWord?word=${word}&create_synonym_cluster=${syn}`, { mode: 'cors'});
            // asynchronously calls our custome function
            const data = await data0.json();

            lastsyn = syn;
            lastresult = data;

            update(true);

        } catch (e) {
            // logs the error if one exists
            console.log(e);

            // displays message to user if there is an error
            $('#word-info').html('There was an error fetching the word data');
        }
    }

    var word = $.urlParam('word');
    // adds a submit listened to our <form> element
    if (word) {
        dosubmit(word);
    }
});