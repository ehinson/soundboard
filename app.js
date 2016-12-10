var keys = document.querySelectorAll('.key');
var sounds = document.getElementById('sounds');



window.addEventListener('keydown', function (e) {
  var attr = e.keyCode;
  var audio = document.querySelector(`audio[data-key="${attr}"]`);
  var key = document.querySelector(`div[data-key="${attr}"]`);

  if (!audio){
    return;
  }
  else{
    console.log(audio);
    key.classList.add('playing');
    audio.play();

  }
});

window.addEventListener('keyup', function (e) {

});
