const audio = document.querySelector('#audio');
const audioButton = document.querySelector('#audioButton');

const audioUrls = [
"media/audio/quick-fart.mp3", 
"media/audio/girl-fart.mp3", 
"media/audio/person-farting.mp3", 
"media/audio/fart-reverb.mp3", 
"media/audio/rigid-fart.mp3"
];

const randomAudio = () => {
  const index = Math.floor(Math.random() * audioUrls.length);
  const audioUrl = audioUrls[index];
  
  return audioUrl;
}

window.addEventListener("click", () => {
  console.log("🔊");
  const audioUrl = randomAudio();
  audio.src = audioUrl;
  audio.play()

  /*audio.addEventListener("ended", () => {
    const audioUrl = randomAudio();
    
    const temp = new Audio();
    
    temp.addEventListener("loadeddata", () => {
      audio.src = audioUrl;
  });
    
    temp.src = audioUrl;
  })
  
  const audioUrl = randomAudio();
  
  audio.addEventListener("loadeddata", () => {
      audio.play();
  });
  
  audio.src = audioUrl;
  */
})