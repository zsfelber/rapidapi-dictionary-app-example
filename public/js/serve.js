
function isElectron() {
    // https://stackoverflow.com/questions/61725325/detect-an-electron-instance-via-javascript

    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

async function serve(target, qs=[]) {

    let e = isElectron(),data;
    let language1 = getLanguage(1);

    qs.push("language=" + language1.language);
    console.log("fetch target:"+target+" isElectron:"+e, " qs:", qs);

    if (e) {

        data = window.api.service({id:target, qs});
        console.log("data:", data);

    } else {

        const data0 = await fetch(`/.netlify/functions/${target}?${qs.join("&")}`, { mode: 'cors'});

        data = await data0.json();
    }

    return data;
}
