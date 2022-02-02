
var lastresult;
var update_to;
var col=2,wordInfoTbl,wordInfoRow;

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
    update_to = setTimeout(update, 1000);
}

function ischeckedparam(param, ischeckeddef) {
    var v = $.urlParam(param);
    if (v === false) {
        return ischeckeddef;
    }
    return v == (""+ischeckeddef) ? ischeckeddef : !ischeckeddef;
}

function addCheckbox(cont, id, ischeckeddef, label) {
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedparam(id, ischeckeddef);

    var panel = $(` <div class='form-check'>
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
function createa(word0) {
    const a = document.createElement('a');
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");
    a.href = "?word="+word;
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

function update() {
    update_to = undefined;

    const data = lastresult;

    // clears the word container if it had
    // previous data
    $('#word-info').empty();

    // logs no results if word data is not found
    if (data.length < 1) {
        return wordInfoTbl.appendChild(document.createTextNode('No results matched.'));
    }

    col=2;
    wordInfoRow=null;

    data.map(val => {
        // creates parent li element
        const li = document.createElement('div');
        li.classList.add('my-4', 'p-4', 'list-item');

        // loops over the values for each definition
        val.map(property => {
            if (property.label === 'definition') {
                newrow();

                // creates new heading-3 element
                const def = document.createElement('div');

                var txt = property.value.toString();
                var words = txt.split(" ");
                createas(def, words, " ");

                // adds text to the element
                //def.innerText = property.value;

                // appends class value for styling
                def.classList.add(['definition']);

                // adds the element to our list item
                li.appendChild(def);
            } else if (property.isString) {
                const partOfSpeech = document.createElement('small');
                partOfSpeech.innerText = property.value;
                partOfSpeech.classList.add('lead','font-italic');
                li.appendChild(partOfSpeech);
            } else if (isch(property.label)) {
                const characteristic = document.createElement('dl');
                characteristic.className = 'row';
                const label = document.createElement('dt');
                label.innerText = property.label;
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
                li.appendChild(characteristic);
            }
        })

        // appends the list item fully formed to
        // the word data container
        wordInfoRow.appendChild(li);
    })
    
}

// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return false;
        }
        return decodeURI(results[1]) || false;
    }


    // creates a variable that represents our
    // word info container
    wordInfoTbl = document.querySelector('#word-info');


    let chbs1 = document.querySelector('.checkboxes1');
    let chbs2 = document.querySelector('.checkboxes2');
    let chbs3 = document.querySelector('.checkboxes3');
    addCheckbox(chbs1, "synonyms", true);
    addCheckbox(chbs1, "also", true);
    addCheckbox(chbs1, "attribute", false);
    addCheckbox(chbs1, "similar to", true);
    addCheckbox(chbs1, "antonyms", true);
    addCheckbox(chbs1, "derivation", false);
    addCheckbox(chbs1, "pertains to", false);
    addCheckbox(chbs2, "in category", false);
    addCheckbox(chbs2, "has categories", false);
    addCheckbox(chbs2, "type of", false);
    addCheckbox(chbs2, "has types", false);
    addCheckbox(chbs2, "substance of", false);
    addCheckbox(chbs2, "has substances", false);
    addCheckbox(chbs2, "part of speech", true);
    addCheckbox(chbs3, "part of", false);
    addCheckbox(chbs3, "has parts", false);
    addCheckbox(chbs3, "member of", false);
    addCheckbox(chbs3, "has members", false);
    addCheckbox(chbs3, "verb group", false);
    addCheckbox(chbs3, "examples", true);

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

            const data0 = await fetch(`/.netlify/functions/getWord?word=${word}`, { mode: 'cors'});
            // asynchronously calls our custome function
            const data = await data0.json();

            lastresult = data;

            update();

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