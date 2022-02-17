var currentlink;
var currentpopword;
var currentmodal;
var popupcache;

function initpop() {

    // https://getbootstrap.com/docs/4.0/components/popovers/

    $("[data-toggle=popover]").click(function () {
        if (!this.which) this.which = 1;
        speak(this.word, this.which);
        this.which = 3 - this.which;

    });
    function apply() {

        currentlink = this;

        if (!currentmodal) {
            currentmodal = "examples";
        }
        if (!currentpopword) {
            currentpopword = this.word;
        }
        if (!popupcache) {
            popupcache = {"examples":{}, "light":{}};
        }
        let pm = popupcache[currentmodal];
        return pm;
    }

    //$("[data-toggle=popover]").popover({
    createpopover($("[data-toggle=popover]"), {
        html: true,
        // !
        // https://stackoverflow.com/questions/20299246/bootstrap-popover-how-add-link-in-text-popover
        sanitize: false,
        trigger: 'click',
        placement: 'auto',
        template: `<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,
        title: function () {
            apply.apply(this);
            return currentpopword;
        },
        content: function () {
            if (altdown) return null;

            let id = $(this).attr("id");
            // !!  $(`[data-toggle=popover]:not(#${id})`).popover("hide");
            hidepopover($(`[data-toggle=popover]:not(#${id})`));

            let pm = apply.apply(this);

            if (pm[currentpopword]) {
                let x = pm[currentpopword];
                return x;
            } else {
                //var content = $(this).attr("data-popover-content");

                currentlink = this;

                console.log("initialize popup  link:" + id + " modal:" + currentmodal + " word:" + currentpopword);

                fetchPopup().then((def) => {
                    pm[currentpopword] = $(def);
                    console.log("loaded (first):" + id);
                    //$(this).popover('show');
                    showpopover($(this));
                });
                return $("<div>Loading...</div>");
            }
        }
    });


}


