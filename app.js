var keys = document.querySelectorAll('.key');
var sounds = document.getElementById('sounds');
var audio = '';

window.addEventListener('keydown', function () {
  for (let i = 0; i < keys.length; i++) {
    var attr = keys[i].dataset.key;
    audio = sounds.querySelector(`audio[data-key='65']`);


  }
  audio.play();
});
