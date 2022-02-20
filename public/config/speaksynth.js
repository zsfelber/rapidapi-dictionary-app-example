let synth = window.speechSynthesis;
let speakers = {};
let voices = [];
let voices_bykey = {};

// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

function installSpeak(which) {
    let speech = `#speech${which}`;
    let inputForm = document.querySelector(`${speech}`);
    //let inputTxt = document.querySelector(`.txt`);
    let voiceSelect = document.querySelector(`${speech} select`);

    let pitch = document.querySelector(`${speech} .pitch`);
    let pitchValue = document.querySelector(`${speech} .pitch-value`);
    let rate = document.querySelector(`${speech} .rate`);
    let rateValue = document.querySelector(`${speech} .rate-value`);

    function populateVoiceList() {
        if (!voices.length) {
            voices = synth.getVoices().sort(function (a, b) {
                const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
                if (aname < bname) return -1;
                else if (aname == bname) return 0;
                else return +1;
            });

            voices_bykey = {};
            voiceSelect.innerHTML = ``;
            let i = 0;
            for (let voice of voices) {
                let option = document.createElement(`option`);
                option.textContent = voice.name;

                option.setAttribute(`data-lang`, voice.lang);
                option.setAttribute(`data-name`, voice.name);
                option.setAttribute(`value`, voice.lang+"_"+i);
                voiceSelect.appendChild(option);

                let l = voice.lang;
                let _ = l.indexOf("_");
                if (_!=-1) l = l.substring(0, _);
                if (!voices_bykey[l]) {
                    voices_bykey[l] = [];
                }
                voices_bykey[l].push(voice);
                i++;
            }

        }

    }


    function speak(text) {
        if (synth.speaking) {
            console.error(`speechSynthesis.speaking`);
            return;
        }
        if (text) {
            let voice = $(voiceSelect).val();
            console.log("speak "+voice+" : "+text);
            return new Promise((a,r)=>{
                let utterThis = new SpeechSynthesisUtterance(text);
                utterThis.onend = function (event) {
                    console.log(`SpeechSynthesisUtterance.onend`);
                    a();
                }
                utterThis.onerror = function (event) {
                    console.error(`SpeechSynthesisUtterance.onerror`);
                    r();
                }
                for (i = 0; i < voices.length; i++) {
                    if (voices[i].name === voice) {
                        console.log(`Found voice ${voice} : `, voices[i]);
                        utterThis.voice = voices[i];
                        break;
                    }
                }
                utterThis.pitch = pitch.value;
                utterThis.rate = rate.value;
                synth.speak(utterThis);
            });
        }
    };

    //inputForm.onsubmit = function(event) {
    //event.preventDefault();

    //speak();

    //inputTxt.blur();
    //}
    function init() {
        populateVoiceList();

        pitch.onchange = function () {
            pitchValue.textContent = pitch.value;
        }

        rate.onchange = function () {
            rateValue.textContent = rate.value;
        }

        //voiceSelect.onchange = function(){
        //  speak();
        //}
    }

    speakers[which] = {speak};
    init();
}

function selectAny(combo, lang, notthis, hint) {
    let voices = voices_bykey[lang];
    for (let voice of voices) {
        let name = voice.name;
        if (name!=notthis && (!hint||hint.test(name))) {
            combo.val(name);
            return name;
        }
    }
    return null;
}
function heurSelect(combo, lang, notthis, hints) {

    if (!Array.isArray(lang)) lang = [lang];

    let oril = combo.val();
    if (oril) {
        let _ = oril.indexOf("_");
        if (_!=-1) oril = oril.substring(0, _);
    }
 
    if (oril!==lang) {
        for (let hint of hints) {
            let item = selectAny(combo, lang, notthis, hint);
    
            if (item) {
                return item;
            }
        }
    }
    return null;
}

function initSpeak() {
    let language = getLanguage(1);

    console.log("initSpeak", language);
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = initSpeak;
    }
    installSpeak(1);
    installSpeak(2);

    let first,second;
    switch (language.language) {
        case "en":
            first = heurSelect($("#speech1 select"), "en", null, [/\bus\b/i,/\bunited states\b/i,/\bu\.s\b/i,/./]);
            second = heurSelect($("#speech2 select"), "en", first, [/\buk\b/i,/\bunited kingdom\b/i,/\bu\.k\b/i,/./]);
            break;0
        case "de":
            first = heurSelect($("#speech1 select"), "de", null, [/\bde\b/i,/\bgermany\b/i,/\bdeutschland\b/i,/./]);
            second = heurSelect($("#speech2 select"), "de", first, [/./]);
            break;
        default:
            alert("No speech synthetizer for : "+language.text);
            break;
    }
    if (first && !second) {
        $("#speech2 select").val(first);
    }
}

let doing=0;
let curspeak;
async function speak(text, which) {
    while (doing) {
        if (curspeak == text+":"+which) {
            return doing;
        }
        await doing;
    }
    doing = dospeak(text, which);
    return doing;
}
async function dospeak(text, which) {
    console.log("speak "+which+" : "+text);
    curspeak = text+":"+which;
    await speakers[which].speak(text);
    curspeak = null;
    doing = 0;
}