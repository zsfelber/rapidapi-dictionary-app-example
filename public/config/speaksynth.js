let synth = window.speechSynthesis;
let speakers = {};
let voices = [];
let voices_bylang;
let voices_bytext;

function UtterSpeakAsync(utterThis) {
    return new Promise((a, r) => {
        utterThis.onend = function (event) {
            console.log(`SpeechSynthesisUtterance.onend`);
            a();
        }
        utterThis.onerror = function (event) {
            console.error(`SpeechSynthesisUtterance.onerror`);
            r();
        }
        synth.speak(utterThis);
    });

}
// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

function installSpeak(which) {
    let speech = `speech${which}`;
    //let inputForm = document.querySelector(`#${speech}`);
    //let inputTxt = document.querySelector(`.txt`);

    let voiceSelect = document.querySelector(`#${speech} select`);
    let pitch = document.querySelector(`#${speech} .pitch`);
    let pitchValue = document.querySelector(`#${speech} .pitch-value`);
    let rate = document.querySelector(`#${speech} .rate`);
    let rateValue = document.querySelector(`#${speech} .rate-value`);


    voiceSelect.onchange = function () {
        setCookie(`${speech}:voice`, $(voiceSelect).val());
    }

    pitch.onchange = function () {
        pitchValue.textContent = pitch.value;
        setCookie(`${speech}:pitch`, $(pitch).val());
    };

    rate.onchange = function () {
        rateValue.textContent = rate.value;
        setCookie(`${speech}:rate`, $(rate).val());
    }

    function populateVoiceList() {
        if (!voices.length) {
            voices = synth.getVoices().sort(function (a, b) {
                const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
                if (aname < bname) return -1;
                else if (aname == bname) return 0;
                else return +1;
            });
            voices_bylang = {};
            voices_bytext = {};
            for (let voice of voices) {

                let l = voice.lang;
                let _ = l.indexOf("-");
                if (_ != -1) l = l.substring(0, _);
                if (!voices_bylang[l]) {
                    voices_bylang[l] = [];
                }
                voices_bylang[l].push(voice);
                voices_bytext[voice.name] = voice;
            }
        }

        voiceSelect.innerHTML = ``;
        let option0 = document.createElement(`option`);
        option0.textContent = "";
        voiceSelect.appendChild(option0);

        for (let voice of voices) {
            let option = document.createElement(`option`);
            option.textContent = voice.name;
            option.setAttribute(`data-lang`, voice.lang);
            voiceSelect.appendChild(option);
        }

    }


    function utter(text) {
        if (text) {
            let voicetx = $(voiceSelect).val();
            voice = voices_bytext[voicetx];
            if (voice) {
                console.log("speak " + voicetx + " : " + text);

                let utterThis = new SpeechSynthesisUtterance(text);

                utterThis.voice = voice;
                utterThis.pitch = pitch.value;
                utterThis.rate = rate.value;

                return UtterSpeakAsync(utterThis);
            } else {
                return null;
            }
        }
    };

    //inputForm.onsubmit = function(event) {
    //event.preventDefault();

    //speak();

    //inputTxt.blur();
    //}
    function init() {
        populateVoiceList();

        $(voiceSelect).val(getCookie(`${speech}:voice`));
        $(pitch).val(getCookie(`${speech}:pitch`));
        $(rate).val(getCookie(`${speech}:rate`));

        setCookie(`${speech}:voice`, $(voiceSelect).val());
        setCookie(`${speech}:pitch`, $(pitch).val());
        setCookie(`${speech}:rate`, $(rate).val());
    }

    speakers[which] = { utter };
    init();
}

function selectAny(combo, lang, notthis, hint) {

    let voices1 = voices_bylang[lang];
    if (voices1) for (let voice of voices1) {
        let name = voice.name;
        if (name != notthis && (!hint || hint.test(name))) {
            combo.val(name);
            return name;
        }
    }
    return null;
}
function heurSelect(combo, lang, notthis, hints) {

    let oritx = combo.val(), oril;
    if (oritx) {
        let v = voices_bytext[oritx];
        oril = v.lang;
        let _ = oril.indexOf("-");
        if (_ != -1) oril = oril.substring(0, _);
    }

    if (oril !== lang) {
        for (let hint of hints) {
            let item = selectAny(combo, lang, notthis, hint);

            if (item) {
                return item;
            }
        }
    }
    return null;
}

function changeSpeak() {
    setCookie(`speech1:pitch`, "");
    setCookie(`speech1:rate`, "");
    setCookie(`speech1:voice`, "");
    setCookie(`speech2:pitch`, "");
    setCookie(`speech2:rate`, "");
    setCookie(`speech2:voice`, "");
    initSpeak();
}

function initSpeak() {
    let language = getLanguage(1);

    console.log("initSpeak", language);
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = initSpeak;
    }
    installSpeak(1);
    installSpeak(2);

    let first, second;
    switch (language.language) {
        case "en":
            first = heurSelect($("#speech1 select"), "en", null, [/\bus\b/i, /\bunited states\b/i, /\bu\.s\b/i, /./]);
            second = heurSelect($("#speech2 select"), "en", first, [/\buk\b/i, /\bunited kingdom\b/i, /\bu\.k\b/i, /./]);
            break; 0
        case "de":
            first = heurSelect($("#speech1 select"), "de", null, [/\bde\b/i, /\bgermany\b/i, /\bdeutschland\b/i, /./]);
            second = heurSelect($("#speech2 select"), "de", first, [/./]);
            break;
        default:
            alert("No speech synthetizer for : " + language.text);
            break;
    }
}

let doing = 0;
let curspeak;
async function speak(text, which) {
    while (doing) {
        if (curspeak == text + ":" + which) {
            return doing;
        }
        await doing;
    }
    doing = dospeak(text, which);
    return doing;
}
async function dospeak(text, which) {
    console.log("speak " + which + " : " + text);
    curspeak = text + ":" + which;
    await speakers[which].utter(text);
    curspeak = null;
    doing = 0;
}