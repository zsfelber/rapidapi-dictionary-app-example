var currentpop;
var currentpopword;

function initpop() {

// https://getbootstrap.com/docs/4.0/components/popovers/

$("[data-toggle=popover]").click(function(){
        if (!this.which) this.which=1;
        speak(this.word, this.which);
        this.which = 3-this.which;
    
});

$("[data-toggle=popover]").popover({
    html : true,
    // !
    // https://stackoverflow.com/questions/20299246/bootstrap-popover-how-add-link-in-text-popover
    sanitize: false,
    trigger: 'click',
    placement:'auto',
    template:`<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,
    content: function() {
        if (altdown) return null;

        let id = $(this).attr("id");
        $(`[data-toggle=popover]:not(#${id})`).popover("hide");

        if (this.loadedtmp) {
            let x = this.loadedtmp.html();
            this.loadedtmp = null;
            return x;
        } else         if (this.loaded) {
            currentpop = this;
            currentpopword = this.word;

            let x = this.loaded[0].outerHTML;
            return x;
        } else {
            //var content = $(this).attr("data-popover-content");

            console.log("show:"+id);
            fetchPopup(this).then((def)=>{
                let elem = $(def);
                this.loaded = elem;
                console.log("loaded:"+id);
                //console.log(this.loaded.html());
                $(this).popover('show');
            });
            return "<div>Loading...</div>";
        }
    }});
    

}


function getSelectionBoundaryElement(isStart) {
    var range, sel, container;
    if (document.selection) {
        range = document.selection.createRange();
        range.collapse(isStart);
        return range.parentElement();
    } else {
        sel = window.getSelection();
        if (sel.getRangeAt) {
            if (sel.rangeCount > 0) {
                range = sel.getRangeAt(0);
            }
        } else {
            // Old WebKit
            range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);

            // Handle the case when the selection was selected backwards (from the end to the start in the document)
            if (range.collapsed !== sel.isCollapsed) {
                range.setStart(sel.focusNode, sel.focusOffset);
                range.setEnd(sel.anchorNode, sel.anchorOffset);
            }
       }

        if (range) {
           container = range[isStart ? "startContainer" : "endContainer"];

           // Check if the container is a text node and return its parent if so
           return container.nodeType === 3 ? container.parentNode : container;
        }   
    }
}