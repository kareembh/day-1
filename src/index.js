import "./styles.css";

//adds an event listener to the current window
window.addEventListener('keydown',function(e){
    const track = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects sound associated with specified key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects key 
    if(!track) return; 
    track.currentTime = 0; // rewinds track to the start
    track.play(); //plays the track
    key.classList.add('playing');
});