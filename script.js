// var audio = document.createElement("audio");
// audio.setAttribute("src", "sound.mp3");
// audio.setAttribute("autoplay", "");
// audio.loop = true;
let audio = new Audio("sound.mp3");
// audio.muted = true;
setTimeout(() => {
  audio.play();
}, 1000);
