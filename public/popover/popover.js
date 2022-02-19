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
            currentlink = null;
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
                let popsf = $(`<textarea rows=1 cols=8 class='input-sm' id='pop_search' value='${this.data.word}' placeholder='${this.data.word}'>${this.data.word}</textarea>`);
                let popx = $(`<a href="javascript:hidePopup()"><img class="pop-x" src="x.svg" width=24 height=24></img></a>`);
                let poppron = $(`<i class="pop-i">${itmstxt(this.data.pronunciation)}</i>`);
                poptit.append(dl);
                let ch0 = dl.children().eq(0);
                let ch1 = dl.children().eq(1);
                ch0.append(popsf);
                ch0.append(popx);
                ch1.append(poppron);
                addCheckbox(ch1[0], "pop_in_words", {defchecked:true,classes:"input-sm pop-check"}, "in words", 0);
                addCheckbox(ch1[0], "pop_in_meanings", {defchecked:true,classes:"input-sm pop-check"}, "in meanings", 0);
                addCheckbox(ch1[0], "pop_in_examples", {defchecked:true,classes:"input-sm pop-check"}, "in examples", 0);
                addCheckbox(ch1[0], "pop_per_word", {defchecked:false,classes:"input-sm pop-check"}, "per word", 0);
                addCheckbox(ch1[0], "pop_lstar", {defchecked:true,classes:"input-sm pop-check"}, "* left", 0);
                addCheckbox(ch1[0], "pop_rstar", {defchecked:true,classes:"input-sm pop-check"}, "right *", 0);
                addCheckbox(ch1[0], "pop_all_words", {defchecked:true,classes:"input-sm pop-check"}, "all words", 0);
                let expalls = addCheckbox(ch1[0], "popexpall", {defchecked:false,classes:"input-sm pop-check"}, "expand all", 0);

                let popexpall = ch1.find("#_popexpall");

                let pop_search = ch0.find("#pop_search");
                let pop_per_word = ch1.find("#_pop_per_word");
                let pop_all_words = ch1.find("#_pop_all_words");
                pop_all_words.prop("disabled", true);
                function updpop_per_word() {
                    let phrase = pop_search.val();
                    let spc = phrase.indexOf(" ")!=-1;
                    console.log(`"${phrase}"`);
                    pop_all_words.prop("disabled", !spc || !pop_per_word[0].checked);
                }
                pop_per_word.change(function(){
                    updpop_per_word();
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
                let _ = this;
                async function findPhrasesAgain() {
                    let phrase = pop_search.val();
                    currentmodal = "light";
                    let datapromise = fetchPhrasesLookup(phrase);
                    datapromise.then((result) => {
                        console.log("loaded (phrase search):" + phrase);
                        let data = {
                            word:"search_result", 
                            phrase,
                            results: result.words.concat(result.meanings).concat(result.examples)
                        };
                        def = createPopup(data);

                        _.contentelem.empty();
                        _.contentelem.append($(def));
                    });
                }

                pop_search.keyup(function(event) {

                    if (event.keyCode == 13) {
                        event.preventDefault();
                        findPhrasesAgain();
                    } else {
                        setTimeout(updpop_per_word,0);
                    }
                });
                pop_search.keypress(function(event) {

                    if (event.keyCode == 13) {
                        event.preventDefault();
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
                let datapromise = fetchWordLookup();
                datapromise.then((data) => {
                    def = createPopup(data);
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


