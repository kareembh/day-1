import "./styles.css";


window.addEventListener('keydown',function(e){
    const track = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!track) return;
    track.play();
    console.log(track);
});