
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

async function serve(target, qs=[], isjson=true) {

    let e = isElectron(),data;

    console.log("fetch "+fetch+" isElectron:"+e);

    if (e) {

        data = window.api.service({id:target, qs});
        console.log("data:", data);

    } else {

        const data0 = await fetch(`/.netlify/functions/${target}?${qs.join("&")}`, { mode: 'cors'});

        if (isjson) {
            data = await data0.json();
        } else {
            data = await data0.text();
        }
    }

    return data;
}
