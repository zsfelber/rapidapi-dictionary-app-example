
function init$() {

    $.urlParam = function(name, nothing=null){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null) {
           return nothing;
        }
        return decodeURI(results[1]).replace(/\+/g," ") || nothing;
    }

    $.fn.enterKey = function (fnc) {
        return this.each(function () {
            $(this).keypress(function (ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }
}

function isch(id) {
    id = id.replace(/ /g, "_");
    var chh = $("#"+id);
    if (chh.length) {
        let dis = $("#_"+id).prop('disabled');
        return !dis && chh.val()=="true";
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
/*
let to_ids={};
function doLaterPromise(id, millis=1000, ...args) {
    let rec = to_ids[id];
    if (!rec) {
        rec = {};
        rec.promise = new Promise((a,r)=>{
            if (rec.toid) {
                clearTimeout(rec.toid);
                rec.toid = 0;
            }
            let wrap = ()=>{
                delete to_ids[id];
                a(args);
            };
            rec.toid = setTimeout(wrap, millis, ...args);
        });
    }
    return rec.promise;
}*/

function addCheckbox(cont, id, buckcheck, label, inform=1) {
    const ischeckeddef = buckcheck.defchecked;
    if (!label) label = id;
    id = id.replace(/ /g, "_");
    var ischecked = ischeckedparam(id, ischeckeddef);

    var panel = $(` <div class='${buckcheck.classes?buckcheck.classes:''}${inform?" form-check form-check-1":""}'>
            <input type='hidden' id='${id}' name='${id}' value='${ischecked}'>
            <input class='form-check-input' type='checkbox' id='_${id}' ${ischecked ? "checked" : ""} onchange="checha('${id}')"/>
            <label class='form-check-label' for='_${id}'>
            ${label}
            </label>
        </div>`);
    cont.appendChild(panel[0]);
    return panel;
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


function createlink(word0, masterword, extraarg="", apostr="") {
    const a = document.createElement('a');
    const tmp = $("<div>"+word0+"</div>")[0];

    word0 = tmp.innerText;
    const word = word0.replace(/[^a-zA-Z0-9\- öóőúùûüáàâäíéÖÓŐÚÙÛÜÁÀÂÄÍÉß]/g, "");

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


function selectElementContents(el) {
    if (!el) el = this;
    if (altdown) return null;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    curword = el.innerText;
    $(el).trigger("mouseup");
    //el.focus();
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

function loadJavaScript(uri) {
    let s = document.createElement("script");
    s.setAttribute("src", uri);
    document.body.appendChild(s);
}

let mob_checked = false;
let mob_checkingresult = false;

function mobileAndTabletCheck() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    

    if (!mob_checked) {
        mob_checkingresult = toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });

        console.log("mobileAndTabletCheck:"+mob_checkingresult);
        mob_checked = true;
    }

    return mob_checkingresult;
}
