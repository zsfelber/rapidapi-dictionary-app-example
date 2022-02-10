function initpop() {

$("[data-toggle=popover]").popover({
    html : true,
    trigger: 'focus',
    content: function() {
        if (!this.loaded) {
            var content = $(this).attr("data-popover-content");

            let q = `<div class="popover-body">
                content:${content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero ipsum, imperdiet
            </div>`;
            let elem = $(q);
            this.loaded = elem;
        }
        return this.loaded.html();
    }
});

}