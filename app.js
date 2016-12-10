var keys = document.querySelectorAll('.key');
var sounds = document.getElementById('sounds');

var playSound = function (e) {
  var attr = e.keyCode;
  var audio = document.querySelector(`audio[data-key="${attr}"]`);
  var key = document.querySelector(`div[data-key="${attr}"]`);

  if (!audio){
    return;
  }
  else{
    console.log(audio);
    key.classList.add('playing');
    audio.currentTime = 0;

    audio.play();

  }
};

window.addEventListener('keydown', playSound );
window.addEventListener('click', playSound );

window.addEventListener('keyup', function (e) {
  var attr = e.keyCode;
  var key = document.querySelector(`div[data-key="${attr}"]`);
  key.classList.remove('playing');

});
