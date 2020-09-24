import "./styles.css";

function playSound(e){
    const track = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects sound associated with key using template strings
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects key 
    if(!track) return; 
    track.currentTime = 0; // rewinds track to the start
    track.play(); //plays the track
    key.classList.add('playing'); //add playing class 
}
   

function removeTransition(e){
    this.classList.remove('playing'); //removes playing class 
}

const keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('animationend', removeTransition)); //adds an event listener to every key associated with a sound


window.addEventListener('keydown',playSound); //adds an event listener to the window to listen for key down event.


