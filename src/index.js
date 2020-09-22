import "./styles.css";

function playSound(e){
    const track = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects sound associated with specified key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects key 
    if(!track) return; 
    track.currentTime = 0; // rewinds track to the start
    track.play(); //plays the track
    key.classList.add('playing');
}
   

function removeTransition(e){
    this.classList.remove('playing'); //removes playing class 
}

const keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('animationend', removeTransition));


window.addEventListener('keydown',playSound);


