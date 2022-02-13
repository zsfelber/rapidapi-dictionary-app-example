
async function serve(target, qs=[]) {

    let e = isElectron(),data;

    console.log("fetch "+fetch+" isElectron:"+e);

    if (e) {

        data = window.api.service({id:target, qs});
        console.log("data:", data);

    } else {

        const data0 = await fetch(`/.netlify/functions/${target}?${qs.join("&")}`, { mode: 'cors'});

        data = await data0.json();
    }

    return data;
}
