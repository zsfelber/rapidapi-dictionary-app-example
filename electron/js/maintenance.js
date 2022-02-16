var checkboxdata = {
    "bucket2": {
        "generate indexes": { defchecked: false },
        "update stardict": { defchecked: false },
        "WORDSAPI": { defchecked: true },
        "GOOGLE": { defchecked: true },
    },
};

// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    init$();

    async function fetchMain(word, qs=[]) {
    
        let apis=[];
        if (isch("WORDSAPI")) apis.push("wordsapi");
        if (isch("GOOGLE")) apis.push("google");
        qs.push(`apis=${apis.join("-")}`);
        qs.push(`word=${word}`);
        qs.push(`indexes=${isch('generate indexes')}`);
        qs.push(`stardict=${isch('update stardict')}`);

        let data = await serve("crawl-generate-indexes", qs);
    
        return data;
    }

    async function dosubmit() {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Submitted.');

        try {

            const data = await fetchMain($.urlParam('word'));

            console.log("response:", data);
 
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