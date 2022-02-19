let synth = window.speechSynthesis;
let speakers = {};
let voices = [];

// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

function install(which) {
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
        }

        voiceSelect.innerHTML = ``;
        for (i = 0; i < voices.length; i++) {
            let option = document.createElement(`option`);
            option.textContent = voices[i].name;

            option.setAttribute(`data-lang`, voices[i].lang);
            option.setAttribute(`data-name`, voices[i].name);
            voiceSelect.appendChild(option);
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

function selectAnyEnglish(combo, notthis, hint) {
    for (i = 0; i < voices.length; i++) {
        let name = voices[i].name;
        if (name!=notthis && /english/i.test(name) && (!hint||hint.test(name))) {
            combo.val(name);
            return name;
        }
    }
    return null;
}
function heurSelectEnglish(combo, notthis, hints) {
    for (let hint of hints) {
        let item = selectAnyEnglish(combo, notthis, hint);

        if (item) {
            return item;
        }
    }
    return null;
}

function initSpeak() {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = initSpeak;
    }
    install(1);
    install(2);

    let first = heurSelectEnglish($("#speech1 select"), null, [/\bus\b/i,/\bunited states\b/i,/\bu\.s\b/i,/./]);
    heurSelectEnglish($("#speech2 select"), first, [/\buk\b/i,/\bunited kingdom\b/i,/\bu\.k\b/i,/./]);
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