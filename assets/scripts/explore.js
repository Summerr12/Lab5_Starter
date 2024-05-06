// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //populating voices
  //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event
  const selectVoice = document.getElementById("voice-select");
  
  window.speechSynthesis.onvoiceschanged= () => {
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectVoice.appendChild(option);
    }
  };

  //making button play audio
  //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  const pressButton = document.getElementsByTagName("button");
  const inputTxt = document.getElementById("text-to-speak");

  //make the image change while speaking
  let result = document.getElementsByTagName("img");

  pressButton[0].onclick = (event) =>{
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = selectVoice.selectedOptions[0].getAttribute("data-name");//get voice
    const voices = window.speechSynthesis.getVoices(); //list of all voices

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // utterThis.pitch = pitch.value;
    // utterThis.rate = rate.value;
    window.speechSynthesis.speak(utterThis);

    utterThis.onstart = () => {
      result[0].src = "assets/images/smiling-open.png";
      // console.log("one");
    };

    utterThis.onend = () => {
      result[0].src = "assets/images/smiling.png";
      // console.log("two");
    };

    // inputTxt.blur();
    
    }

  


}