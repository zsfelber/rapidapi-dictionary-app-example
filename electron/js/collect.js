var checkboxdata = {
    "bucket2": {
        "fix errors": { defchecked: false },
        "fill missing": { defchecked: false },
        "WORDSAPI": { defchecked: true },
        "GOOGLE": { defchecked: true },
    },
};


// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    init$();
    if (!isElectron()) {
        console.log("It is not electron, hiding restricted pages.");
    } else {
        console.log("It is electron, showing restricted pages.");
        $(".restricted-electron").show();
    }

    async function fetchCollect(word, lang, qs=[]) {
        let apis=[];
        if (isch("WORDSAPI")) apis.push("wordsapi");
        if (isch("GOOGLE")) apis.push("google");
        qs.push(`lang=${lang}`);
        qs.push(`apis=${apis.join("-")}`);
        qs.push(`word=${word}`);
        qs.push(`deep=${$.urlParam('how-deep')}`);
        qs.push(`fix=${isch('fix errors')}`);
        qs.push(`fill=${isch('fill missing')}`);
    
        let data = await serve("crawl-collect.all", qs);
    
        return data;
    }
        
    async function dosubmit() {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Submitted.');

        try {

            const data = await fetchCollect($.urlParam('word'),$.urlParam('lang'));

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