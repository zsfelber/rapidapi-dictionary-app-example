function initpop() {

// https://getbootstrap.com/docs/4.0/components/popovers/

$("[data-toggle=popover]").popover({
    html : true,
    trigger: 'click',
    placement:"bottom",
    template:`<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,
    content: function() {
        if (this.loaded) {
            let x = this.loaded.html();
            return x;
        } else {
            //var content = $(this).attr("data-popover-content");
            let id = $(this).attr("id");

            console.log("show:"+id);
            showPopup(this.word).then((def)=>{
                //let q = `<div class="popover-body">
                //    content:${content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero ipsum, imperdiet
                //</div>`;
                let elem = $(def);
                this.loaded = elem;
                console.log("loaded:"+id);
                //console.log(this.loaded.html());
                $('#'+id).popover('show');
            });
            return "<div>Loading...</div>";
        }
    }});
    

}