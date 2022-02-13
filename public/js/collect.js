var checkboxdata = {
    "bucket2": {
        "WORDSAPI": { defchecked: true },
        "GOOGLE": { defchecked: true },
    },
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


// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return false;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || false;
    }

    async function fetchCollect(word, qs=[]) {
        let apis=[];
        if (isch("WORDSAPI")) apis.push("wordsapi");
        if (isch("GOOGLE")) apis.push("google");
        qs.push(`apis=${apis.join("-")}`);
        qs.push(`word=${word}`);
    
        let data = await serve("crawl-collect.all", qs);
    
        return data;
    }
        
    async function dosubmit() {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Submitted.');

        try {

            const data = await fetchCollect($.urlParam('word'));

            console.log("response:", data);
            update(true);

        } catch (e) {
            // logs the error if one exists
            console.log(e);

            // displays message to user if there is an error
            $('#word-info').html('There was an error fetching the word data');
        }
    }

    let chbs2 = document.querySelector('.checkboxes2');
    var chbuckets = {bucket2:chbs2};

    for (bucketid in chbuckets) {
        var chbuck = chbuckets[bucketid];
        var bucket = checkboxdata[bucketid];
        for (chid in bucket) {
            addCheckbox(chbuck, chid, bucket[chid]);
        }
    }

    var url_started = $.urlParam('started');
    // adds a submit listened to our <form> element
    if (url_started) {
        dosubmit();
    }
});