
function init$() {

    $.urlParam = function(name, nothing=null){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return nothing;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || nothing;
    }

}

function isch(id) {
    id = id.replace(/ /g, "_");
    var chh = $("#"+id);
    if (chh.length) {
        return chh.val()=="true";
    } else {
        alert("unknown label : "+id);
    }
}

function ischeckedparam(param, ischeckeddef) {
    var v = $.urlParam(param);
    if (v === null) {
        return ischeckeddef;
    }
    return v == (""+ischeckeddef) ? ischeckeddef : !ischeckeddef;
}

function ischeckedradio(groupid, rid, ischeckeddef) {
    var v = $.urlParam(groupid)==rid;
    if (v === null) {
        return ischeckeddef;
    }
    return v;
}

function checha(id) {
    var ch = $("#_"+id);
    var chh = $("#"+id);
    chh.val(ch.is(':checked'));

    doLater(update, 1000, false);
}

function doLater(func, millis=1000, ...args) {

    if (func.update_to) {
        clearTimeout(func.update_to);
    }
    func.update_to = setTimeout(func, millis, ...args);
}

function addCheckbox(cont, id, buckcheck, label) {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedparam(id, ischeckeddef);

    var panel = $(` <div class='${buckcheck.classes?buckcheck.classes:''} form-check form-check-1'>
            <input type='hidden' id='${id}' name='${id}' value='${ischecked}'>
            <input class='form-check-input' type='checkbox' id='_${id}' ${ischecked ? "checked" : ""} onchange="checha('${id}')"/>
            <label class='form-check-label' for='_${id}'>
            ${label}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
}

function addRadio(cont, id, buckcheck, groupid, label, extraelements="") {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedradio(groupid, id, ischeckeddef);

    var panel = $(` <div class='${buckcheck.classes?buckcheck.classes:''} form-check form-check-1'>
            <input class='form-check-input' type='radio' id='${id}' name='${groupid}' value='${id}' ${ischecked ? "checked" : ""} onchange="racha('${id}')"/>
            <label class='form-check-label' for='${id}'>
            ${label}
            ${extraelements}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
}


function selectElementContents(el) {
    if (!el) el = this;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    curword = el.innerText;
    $(el).trigger("mouseup");
    //el.focus();
}


function createlink(word0, masterword, extraarg="", apostr="") {
    const a = document.createElement('a');
    const tmp = $("<div>"+word0+"</div>")[0];

    word0 = tmp.innerText;
    const word = word0.replace(/[^a-zA-Z0-9\- ]/g, "");

    if (masterword==word) {
        a.classList.add('master');
    } else {
        a.classList.add('none');
    }

    a.innerHTML = apostr+tmp.innerHTML+apostr;

    a.href = "?" + checkps() + "&word=" + word + extraarg;

    a.onmouseover = selectElementContents.bind(a, a);

    return a;
}

function createi(word) {
    const i = document.createElement('i');
    i.innerText = word;
    return i;
}

function labelled(label, value) {
    const dl = document.createElement('dl');
    //dl.className = 'row';
    const dt = document.createElement('dt');
    dt.innerText = label;
    //dt.className = 'col-sm-3';
    const dd = document.createElement('dd');
    dd.innerText = value;
    //dd.className = 'col-sm-9';
    dl.appendChild(dt);
    dl.appendChild(dd);
    return dl;
}

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
    poptrigger = function() {
        let pop = this.pop;
        if (pop) {
            pop.remove();
        }
        this.pop = pop = $("<div class='abs'></div>");
        this.poptrigger = poptrigger;

        let pos = getPos(this);
        let ui = $(options.template);

        let title = ui.find(".popover-header");
        let body = ui.find(".popover-body");

        title[0].innerHTML = options.title.apply(this);
        let contentelem = options.content.apply(this);
        body.append(contentelem);
        pop.append(ui);

        pop.css("left", pos.x+"px");
        pop.css("top", (15+pos.y)+"px");

        document.body.appendChild(pop[0]);
    };
    cmp[options.trigger](poptrigger);
}

function hidepopover(cmp) {
    cmp.each(function() {
        let pop = this.pop;
        if (pop) {
            pop.remove();
        }
    });
}

function showpopover(cmp) {
    cmp.each(function() {
        if (this.poptrigger) {
            this.poptrigger.apply(this);
        }
    });
}
