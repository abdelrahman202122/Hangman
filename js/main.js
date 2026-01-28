var playBtn = document.getElementById('play-btn');
var highScore = document.querySelector('.high-score__number');

playBtn.addEventListener('click', function () {
  location.replace('../pages/play.html');
});

highScore.textContent = Number(localStorage.getItem('hangman-max-score')) || 0;
