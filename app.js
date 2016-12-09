var keys = document.querySelectorAll('.key');
var sounds = document.getElementById('sounds');
var audio = '';
var attr = '';
var pressed = '';


window.addEventListener('keydown', function (e) {
  if (e.shiftKey && e.keyCode){
    console.log(e.keyCode);
  }
  else {
    console.log(e.keyCode);
  }
  audio = sounds.querySelector(`audio[data-key='${e.keyCode}']`);

  audio.play();
  audio = '';
});

console.log(audio);
