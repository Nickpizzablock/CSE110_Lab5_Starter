// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select");
  const button = document.querySelector("#explore button");
  const picture = document.querySelector("#explore img");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  // inputForm.onsubmit = (event) => {
  button.addEventListener("click", () => {

    // event.preventDefault();
    const text = document.querySelector("#text-to-speak").value;
    console.log(text);
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    let timeout;
    utterThis.onstart = function(event) {
      picture.src = "assets/images/smiling-open.png";
      timeout = setInterval(myFunction, 100);

      function myFunction() {
          if (picture.alt === "Smiling Face") {
            picture.src = "assets/images/smiling.png";
            picture.alt = "Open Face";
          }
          else {
            picture.src = "assets/images/smiling-open.png";
            picture.alt = "Smiling Face";
          }
      };
    };
    
    utterThis.onend = function(event) {
      clearTimeout(timeout);
      picture.src = "assets/images/smiling.png";
    };
    synth.speak(utterThis);
  });
  
}