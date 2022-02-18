var currentlink;
var currentpopword;
var currentmodal;
var popupcache;
var currentchecks;



// https://stackoverflow.com/questions/37975457/how-to-get-absolute-coordinates-of-element-with-absolute-position-javascript-b/40814766
function getPosr(el) {
    var rect=el.getBoundingClientRect();
    return {x:rect.left,y:rect.top};
}
function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}
function createpopover(cmp, options) {
    //cmp.popover(options);

    let poptrigger;
    poptrigger = function(keep) {
        if (!this.hide) this.hide = function() {
            if (this.pop) {
                this.pop.remove();
                delete this.pop;
            }
        };
        if (!this.hidePopup) {
            if (options.hidePopup) {
                this.hidePopup = options.hidePopup;
            } else {
                this.hidePopup = this.hide;
            }
            if (options.initPopup) {
                this.initPopup = options.initPopup;
            } else {
                this.initPopup = ()=>{};
            }
        }
        let isloading = this.contentelem && this.contentelem.pending;
        let pop = this.pop;
        let reopen = isloading || keep===true;
        if (pop && !reopen) {
            this.hidePopup();
        } else {
            if (pop) {
                this.hide();
            }
            if (!reopen) {
                this.initPopup();
            }

            this.pop = pop = $("<div class='abs'></div>");
            this.poptrigger = poptrigger;
    
            let pos = getPos(this);
            let ui = $(options.template);
    
            let title = ui.find(".popover-header-0");
            let body = ui.find(".popover-body");
    
            this.titleelem = options.title.apply(this);
            this.contentelem = options.content.apply(this);
            title[0].appendChild(this.titleelem);
            body.append(this.contentelem);
            pop.append(ui);
    
            pop.css("left", pos.x+"px");
            pop.css("top", (15+pos.y)+"px");
    
            document.body.appendChild(pop[0]);
        }
    };
    cmp[options.trigger](poptrigger);
}

function hidepopover(cmp) {
    cmp.each(function() {
        if (this.hide) {
            this.hide();
        }
    });
}

function showpopover(cmp) {
    cmp.each(function() {
        if (this.poptrigger) {
            this.poptrigger.call(this, true);
        }
    });
}




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
        initPopup,
        hidePopup,
        html: true,
        // !
        // https://stackoverflow.com/questions/20299246/bootstrap-popover-how-add-link-in-text-popover
        sanitize: false,
        trigger: 'click',
        placement: 'auto',
        template: `<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-header-0"></div><div class="popover-body"></div></div>`,
        title: function () {
            apply.apply(this);
            if (this.data) {
                let poptit = $(`<div></div>`);
                let dl = $(`<dl><dt></dt><dd></dd></dl>`);
                let popsf = $(`<textarea rows=1 cols=8 class='input-sm' id='popschf' value='' placeholder='${this.data.word}'/>`);
                let poppron = $(`<i class="pop-i">${itmstxt(this.data.pronunciation)}</i>`);
                poptit.append(dl);
                let ch0 = dl.children().eq(0);
                let ch1 = dl.children().eq(1);
                ch0.append(popsf);
                ch1.append(poppron);
                addCheckbox(ch1[0], "popchwords", {defchecked:true,classes:"input-sm pop-check"}, "in words", 0);
                addCheckbox(ch1[0], "popchdefs", {defchecked:false,classes:"input-sm pop-check"}, "in meanings", 0);
                addCheckbox(ch1[0], "popchxs", {defchecked:false,classes:"input-sm pop-check"}, "in examples", 0);
                addCheckbox(ch1[0], "popchwms", {defchecked:false,classes:"input-sm pop-check"}, "per word matching", 0);
                addCheckbox(ch1[0], "popchalws", {defchecked:false,classes:"input-sm pop-check"}, "all words", 0);
                let expalls = addCheckbox(ch1[0], "popexpall", {defchecked:false,classes:"input-sm pop-check"}, "expand all", 0);

                let popchwms = ch1.find("#_popchwms");
                let popchalws = ch1.find("#_popchalws");
                let popexpall = ch1.find("#_popexpall");
                popchalws.prop("disabled", true);
                popchwms.change(function(){
                    popchalws.prop("disabled", !this.checked);
                });
                popexpall.change(function(){
                    expalls.find("label").text(this.checked?"collapse all":"expand all");
                    if (this.checked) {
                        for (let check of currentchecks) {
                            if (/\[\+\]$/.test($(check).text())) {
                                $(check).click();
                            }
                        }
                    } else {
                        for (let check of currentchecks) {
                            if (/\[-\]$/.test($(check).text())) {
                                $(check).click();
                            }
                        }
                    }
                });

                return poptit[0];
            } else {
                return document.createElement("div");
            }
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

                console.log("initialize popup  link:" + id + " modal:" + currentmodal + " word:" + currentpopword);
                let _ = this;
                fetchPopup().then((def) => {
                    pm[currentpopword] = $(def);
                    this.data = def.data;
                    console.log("loaded (first):" + id);
                    //$(this).popover('show');
                    showpopover($(this));
                });
                let result = $("<div>Loading...</div>");
                result.pending = true;
                return result;
            }
        }
    });


    function itmstxt(obj) {
        if (!obj) return "";
        let arr = Object.values(obj);
        return arr.join(", ");
    }
}


