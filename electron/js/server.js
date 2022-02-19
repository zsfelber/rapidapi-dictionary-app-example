
// Specifies a function to execute when the DOM is fully loaded.
$(document).ready(function(){
    init$();

    if (!isElectron()) {
        console.log("It is not electron, hiding restricted pages.");
    } else {
        console.log("It is electron, showing restricted pages.");
        $(".restricted-electron").show();
    }

});
