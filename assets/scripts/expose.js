// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const selectImg=document.getElementById("horn-select");
  const result = document.getElementsByTagName("img");
  const selectAudio = document.getElementsByClassName("hidden");

  const jsConfetti = new JSConfetti();
  var party = false;

  selectImg.addEventListener("change", (event) => {
    if(event.target.value == "party-horn") {
      party = true;
    }
    else {
      party = false;
    }
    result[0].src = "assets/images/" + event.target.value + ".svg";
    // result[0].mp3 = "assets/audio/" + event.target.value + ".mp3"; used to work
    selectAudio[0].src = "assets/audio/" + event.target.value + ".mp3";
  });

  const selectAudioImg=document.getElementById("volume-controls");

  selectAudioImg.addEventListener("change",(event) => {
    selectAudio[0].volume = event.target.value/100;
    // console.log(selectAudio[0].value);
    if(event.target.value==0){
      result[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(event.target.value>=1 && event.target.value<33){
      result[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(event.target.value>=33 && event.target.value < 67){
      result[1].src = "assets/icons/volume-level-2.svg";
    }
    else if(event.target.value >=67){
      result[1].src = "assets/icons/volume-level-3.svg";
    }
  });
  

  const playButton= document.getElementsByTagName("button");
  playButton[0].onclick = (event) => {
    if(party) {
      jsConfetti.addConfetti();
    }
    selectAudio[0].play();
  };

}


