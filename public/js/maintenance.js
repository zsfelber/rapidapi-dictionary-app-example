

// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return false;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || false;
    }

    
    async function dosubmit() {

        // adds the text 'Loading...' to our word 
        // data container for UX purposes
        $('#word-info').html('Submitted.');

        try {

            const data0 = await fetch(`/.netlify/functions/generate-indexes-foreground`, { mode: 'cors'});
            // asynchronously calls our custome function
            const data = await data0.json();

            console.log("response:", data);
            update(true);

        } catch (e) {
            // logs the error if one exists
            console.log(e);

            // displays message to user if there is an error
            $('#word-info').html('There was an error fetching the word data');
        }
    }

    var url_started = $.urlParam('started');
    // adds a submit listened to our <form> element
    if (url_started) {
        dosubmit();
    }
});