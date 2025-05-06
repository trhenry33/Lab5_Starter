// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornImg = document.querySelector('img[alt="No image selected"]');
  let hornAudio = document.querySelector('audio');
  let confetti = false;
  let buttons = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  let volumeSlider = document.getElementById("volume");
  let volumeIcon = document.getElementById("volume-icon");





  
  let hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener("change", (event) => {
    let hornValue = event.target.value;
    if(hornValue == "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
      confetti = false;
      
    }
    else if(hornValue == "car-horn"){
      hornImg.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
      confetti = false;
    }
    else{
      hornImg.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
      confetti = true;
    }

  });

  buttons.addEventListener("click", (event) => {
    hornAudio.play();
    if(confetti){
      jsConfetti.addConfetti();
    }

});


  function updateVolume() {
    let volume = volumeSlider.value;


    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume > 0 && volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else if (volume >= 67) {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  volumeSlider.addEventListener("input", updateVolume);
  updateVolume();




}