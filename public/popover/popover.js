function initpop() {

// https://getbootstrap.com/docs/4.0/components/popovers/

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
        speak(this.word);

        let id = $(this).attr("id");
        $(`[data-toggle=popover]:not(#${id})`).popover("hide");

        if (this.loadedtmp) {
            let x = this.loadedtmp.html();
            this.loadedtmp = null;
            return x;
        } else         if (this.loaded) {
            let x = this.loaded.html();
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