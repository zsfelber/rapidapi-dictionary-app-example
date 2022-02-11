let synth = window.speechSynthesis;
let speakers = {};

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

    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices().sort(function (a, b) {
            const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
            if (aname < bname) return -1;
            else if (aname == bname) return 0;
            else return +1;
        });
        let selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
        voiceSelect.innerHTML = ``;
        for (i = 0; i < voices.length; i++) {
            let option = document.createElement(`option`);
            option.textContent = voices[i].name + ` (` + voices[i].lang + `)`;

            if (voices[i].default) {
                option.textContent += ` -- DEFAULT`;
            }

            option.setAttribute(`data-lang`, voices[i].lang);
            option.setAttribute(`data-name`, voices[i].name);
            voiceSelect.appendChild(option);
        }
        //voiceSelect.selectedIndex = selectedIndex;


    }


    function speak(text) {
        if (synth.speaking) {
            console.error(`speechSynthesis.speaking`);
            return;
        }
        if (text) {
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
                let selectedOption = voiceSelect.selectedOptions[0].getAttribute(`data-name`);
                for (i = 0; i < voices.length; i++) {
                    if (voices[i].name === selectedOption) {
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
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }

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


function initSpeak() {
    install(1);
    install(2);
    $("#speech1 select").val("Google US English (en-US)");
    $("#speech2 select").val("Google UK English Male (en-GB)");
}

let doing=0;
async function speak(text, which) {
    if (doing) return;
    doing = 1;
    await speakers[which].speak(text);
    doing = 0;
}