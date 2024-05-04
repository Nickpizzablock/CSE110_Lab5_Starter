// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.querySelector("#horn-select");
  const imageSelector = document.querySelector("#expose img");
  const audioSelect = document.querySelector("#expose audio");
  const playButton = document.querySelector("button");
  const volumeControl = document.querySelector("#volume-controls");
  const volumeImage = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();

  // Changes src for each pull down option
  selectHorn.addEventListener("change", (event) => {
    if (event.target.value === "air-horn") {
      imageSelector.src = "assets/images/air-horn.svg";
      audioSelect.src = "assets/audio/air-horn.mp3";
    } else if (event.target.value === "car-horn") {
      imageSelector.src = "assets/images/car-horn.svg";
      audioSelect.src = "assets/audio/car-horn.mp3";
    } else {
      imageSelector.src = "assets/images/party-horn.svg";
      audioSelect.src = "assets/audio/party-horn.mp3";
    }
  });

  // When play button clicked
  playButton.addEventListener("click", () => {
    audioSelect.play();
    if (selectHorn.value === "air-horn") {
      jsConfetti.addConfetti();
    }
  });

  // Volume control and animation
  volumeControl.addEventListener("input", (event) => {
    audioSelect.volume = event.target.value / 100;
    if (event.target.value < 1) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (event.target.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (event.target.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });
}