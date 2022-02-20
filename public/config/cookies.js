
function readCookies() {
    //document.cookie = "username=John Doe";
    let result = {};
    let pairs = document.cookie.split(/;\s*/);
    for (let pair of pairs) {
        let keyval = pair.split("=");
        let k0 = keyval[0].toLowerCase();
        if (k0!="expires" && k0!="path") {
            result[k0] = keyval[1];
        }
    }
    return result;
}

function writeCookies(cookies) {
    let tags = [];
    for (let id in cookies) {
        let val = cookies[id];
        tags.push(id+"="+val);
    }
    let enc = tags.join("; ");
    document.cookie = enc;
    return tags;
}

function getCookie(id) {
    let cookies = readCookies();
    return cookies[id];
}


function setCookie(id, value) {
    let cookies = readCookies();
    cookies[id] = value;
    return writeCookies(cookies);
}
