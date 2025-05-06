// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const talkButton = document.querySelector("button");
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const faceImage = document.querySelector("img");

  let voices = [];
  function populateVoiceList() {
    voices = speechSynthesis.getVoices();
 

    voices.forEach((voice, index) =>{
      const option = document.createElement("option");
      option.value = index;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  //got help on this one
  if (speechSynthesis.onvoiceschanged!== undefined) {
    speechSynthesis.onvoiceschanged =populateVoiceList;
  } else {
    populateVoiceList();
  }


  function pressToTalk() {
    const text = textToSpeak.value;
    const selectedVoice = voices[voiceSelect.value];

    if (text !== '') {
      const speech = new SpeechSynthesisUtterance(text);
      speech.voice = selectedVoice;

      speech.onstart =() => {
        faceImage.src = "assets/images/smiling-open.png"; 
      };

      speech.onend = ()=> {
        faceImage.src = "assets/images/smiling.png"; 
      };

      // Speak the text
      speechSynthesis.speak(speech);
    }
  }

  talkButton.addEventListener("click",pressToTalk);



  



}