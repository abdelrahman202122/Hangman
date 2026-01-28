var HANGMAN_WORDS = [
  // Food
  {
    word: 'pizza',
    hint: 'A popular Italian dish with cheese',
    category: 'Food',
  },
  { word: 'burger', hint: 'A sandwich with a meat patty', category: 'Food' },
  { word: 'pasta', hint: 'Italian noodles', category: 'Food' },
  { word: 'salad', hint: 'A healthy mix of vegetables', category: 'Food' },
  { word: 'apple', hint: 'A red or green fruit', category: 'Food' },
  { word: 'banana', hint: 'A yellow fruit', category: 'Food' },
  { word: 'cheese', hint: 'A dairy product', category: 'Food' },
  { word: 'chicken', hint: 'A common poultry meat', category: 'Food' },
  { word: 'bread', hint: 'Baked food made from flour', category: 'Food' },
  { word: 'honey', hint: 'Sweet food made by bees', category: 'Food' },

  // Animals
  { word: 'lion', hint: 'The king of the jungle', category: 'Animals' },
  { word: 'tiger', hint: 'A striped big cat', category: 'Animals' },
  { word: 'elephant', hint: 'The largest land animal', category: 'Animals' },
  { word: 'giraffe', hint: 'An animal with a long neck', category: 'Animals' },
  {
    word: 'zebra',
    hint: 'A black and white striped animal',
    category: 'Animals',
  },
  { word: 'monkey', hint: 'A playful primate', category: 'Animals' },
  {
    word: 'rabbit',
    hint: 'A small animal with long ears',
    category: 'Animals',
  },
  { word: 'horse', hint: 'An animal used for riding', category: 'Animals' },
  { word: 'sheep', hint: 'An animal that gives wool', category: 'Animals' },
  {
    word: 'camel',
    hint: 'An animal that lives in the desert',
    category: 'Animals',
  },

  // Clothes
  {
    word: 'shirt',
    hint: 'A piece of clothing for the upper body',
    category: 'Clothes',
  },
  { word: 'jacket', hint: 'A warm outer garment', category: 'Clothes' },
  { word: 'pants', hint: 'Clothing worn on the legs', category: 'Clothes' },
  { word: 'dress', hint: 'A one-piece garment for women', category: 'Clothes' },
  {
    word: 'skirt',
    hint: 'A garment worn below the waist',
    category: 'Clothes',
  },
  { word: 'socks', hint: 'Worn on the feet', category: 'Clothes' },
  { word: 'shoes', hint: 'Footwear', category: 'Clothes' },
  { word: 'scarf', hint: 'Worn around the neck', category: 'Clothes' },
  { word: 'hat', hint: 'Worn on the head', category: 'Clothes' },
  { word: 'belt', hint: 'Holds pants at the waist', category: 'Clothes' },

  // Countries
  { word: 'egypt', hint: 'Home of the pyramids', category: 'Countries' },
  {
    word: 'france',
    hint: 'Country famous for the Eiffel Tower',
    category: 'Countries',
  },
  { word: 'italy', hint: 'Country shaped like a boot', category: 'Countries' },
  { word: 'spain', hint: 'Country known for flamenco', category: 'Countries' },
  { word: 'china', hint: 'The Great Wall is here', category: 'Countries' },
  {
    word: 'india',
    hint: 'Second most populated country',
    category: 'Countries',
  },
  { word: 'brazil', hint: 'Famous for carnival', category: 'Countries' },
  { word: 'canada', hint: 'Has a maple leaf flag', category: 'Countries' },
  { word: 'japan', hint: 'Land of the rising sun', category: 'Countries' },
  { word: 'mexico', hint: 'Famous for tacos', category: 'Countries' },

  // Sports
  { word: 'football', hint: 'Played with a round ball', category: 'Sports' },
  { word: 'tennis', hint: 'Played with rackets', category: 'Sports' },
  { word: 'boxing', hint: 'A fighting sport', category: 'Sports' },
  { word: 'cricket', hint: 'Popular bat-and-ball game', category: 'Sports' },
  {
    word: 'golf',
    hint: 'Played by hitting a small ball into holes',
    category: 'Sports',
  },
  { word: 'basketball', hint: 'Played with hoops', category: 'Sports' },
  { word: 'swimming', hint: 'Sport in water', category: 'Sports' },
  { word: 'cycling', hint: 'Riding a bicycle', category: 'Sports' },
  { word: 'volleyball', hint: 'Played over a net', category: 'Sports' },
  { word: 'karate', hint: 'A martial art', category: 'Sports' },

  // Jobs
  { word: 'doctor', hint: 'Treats sick people', category: 'Jobs' },
  { word: 'teacher', hint: 'Works in a school', category: 'Jobs' },
  { word: 'farmer', hint: 'Works on a farm', category: 'Jobs' },
  { word: 'driver', hint: 'Drives vehicles', category: 'Jobs' },
  { word: 'nurse', hint: 'Assists doctors', category: 'Jobs' },
  { word: 'chef', hint: 'Cooks food', category: 'Jobs' },
  { word: 'pilot', hint: 'Flies airplanes', category: 'Jobs' },
  { word: 'artist', hint: 'Creates drawings or paintings', category: 'Jobs' },
  { word: 'police', hint: 'Keeps people safe', category: 'Jobs' },
  { word: 'writer', hint: 'Creates stories or books', category: 'Jobs' },

  // Nature
  { word: 'river', hint: 'A natural flowing water body', category: 'Nature' },
  { word: 'mountain', hint: 'A very high hill', category: 'Nature' },
  { word: 'forest', hint: 'A place full of trees', category: 'Nature' },
  { word: 'desert', hint: 'A dry sandy land', category: 'Nature' },
  { word: 'ocean', hint: 'A large saltwater body', category: 'Nature' },
  { word: 'island', hint: 'Land surrounded by water', category: 'Nature' },
  { word: 'valley', hint: 'Low land between hills', category: 'Nature' },
  { word: 'volcano', hint: 'A mountain that erupts', category: 'Nature' },
  { word: 'rain', hint: 'Water falling from the sky', category: 'Nature' },
  { word: 'cloud', hint: 'White shapes in the sky', category: 'Nature' },

  // Household
  {
    word: 'table',
    hint: 'Furniture for eating or working',
    category: 'Household',
  },
  { word: 'chair', hint: 'Furniture to sit on', category: 'Household' },
  { word: 'sofa', hint: 'A long comfortable seat', category: 'Household' },
  { word: 'mirror', hint: 'Shows your reflection', category: 'Household' },
  { word: 'lamp', hint: 'Gives light', category: 'Household' },
  { word: 'clock', hint: 'Shows the time', category: 'Household' },
  { word: 'door', hint: 'Used to enter a room', category: 'Household' },
  { word: 'window', hint: 'Glass opening in a wall', category: 'Household' },
  { word: 'carpet', hint: 'Floor covering', category: 'Household' },
  { word: 'pillow', hint: 'Used for sleeping', category: 'Household' },

  // Transportation
  { word: 'car', hint: 'A road vehicle', category: 'Transportation' },
  { word: 'bus', hint: 'Public road transport', category: 'Transportation' },
  { word: 'train', hint: 'Runs on tracks', category: 'Transportation' },
  { word: 'plane', hint: 'Flies in the sky', category: 'Transportation' },
  { word: 'ship', hint: 'Travels on water', category: 'Transportation' },
  { word: 'bicycle', hint: 'Two-wheeled vehicle', category: 'Transportation' },
  {
    word: 'motorcycle',
    hint: 'Two-wheeled motor vehicle',
    category: 'Transportation',
  },
  { word: 'taxi', hint: 'Hired car', category: 'Transportation' },
  { word: 'truck', hint: 'Carries heavy goods', category: 'Transportation' },
  { word: 'subway', hint: 'Underground train', category: 'Transportation' },
];

var LETTERS_ARRAY = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

var BODY_PARTS = [
  'rope',
  'head',
  'body',
  'hand-right',
  'hand-left',
  'leg-right',
  'leg-left',
];

var categoryName = document.querySelector('.category-name');
var answerArea = document.querySelector('.answer-area');
var lettersContainer = document.querySelector('.letters-container');
var bodyParts = document.querySelector('.body-parts');
var loseAnimation = document.querySelector('.lose-animation');
var winAnimation = document.querySelector('.win-animation');
var header = document.querySelector('.play-page__header');
var gameOverSheet = document.querySelector('.game-over__sheet');
var wellDoneSheet = document.querySelector('.well-done__sheet');
var goHome = document.querySelectorAll('.go-home');
var restartGame = document.querySelectorAll('.restart-game');
var currentScoreEls = document.querySelectorAll('.current-score');
var closeModal = document.querySelector('.close-modal');
var modal = document.querySelector('#modal');
var pauseBtn = document.querySelector('.pause-btn');
var nextLevelBtn = document.querySelector('.next-level__btn');
var levelEL = document.querySelector('.level');
var hintBtn = document.querySelector('.hint-btn');
var diamondsNumberEl = document.querySelectorAll('.diamonds-num');
var notEnough = document.querySelector('.not-enough');
var confirmHint = document.querySelector('.confirm-hint');

var randomNum,
  wordLetters,
  mistakes,
  gameOver,
  rightLetters,
  chosenLetters,
  maxScore,
  winGame,
  uniqueWordLetters,
  restLetters;

var currentScore = 0;
var gameLevel = 1;
var clicked = 0;
var diamondsNum = 80;

function initialize() {
  mistakes = 0;
  randomNum = Math.floor(Math.random() * 90);

  wordLetters = HANGMAN_WORDS[randomNum].word.toUpperCase().split('');
  uniqueWordLetters = wordLetters.filter(function (letter, index) {
    return wordLetters.indexOf(letter) === index;
  });
  gameOver = false;
  rightLetters = [];
  restLetters = uniqueWordLetters.map(function (letter) {
    return letter;
  });
  chosenLetters = [];

  maxScore = Number(localStorage.getItem('hangman-max-score')) || 0;
  winGame = false;

  categoryName.textContent = HANGMAN_WORDS[randomNum].category;
  levelEL.textContent = gameLevel;
  loseAnimation.classList.add('hide');
  winAnimation.classList.add('hide');
  lettersContainer.classList.remove('hide');
  gameOverSheet.classList.add('hide');
  wellDoneSheet.classList.add('hide');
  header.style.visibility = 'visible';

  displayLetters();
  displayAnswerSheet();
  updateScore();
  displayBodyParts();
  updateDiamondsNumber();
}

function displayAnswerSheet() {
  answerArea.textContent = '';

  wordLetters.forEach(function (letter) {
    if (rightLetters.includes(letter) || gameOver) {
      var newLetter = document.createElement('span');
      newLetter.textContent = letter;
      newLetter.classList.add('answer-area__letter');
      answerArea.insertAdjacentElement('beforeend', newLetter);
    } else {
      var newAnswerSheet = document.createElement('img');
      newAnswerSheet.setAttribute('src', '../assets/answer_sheet.png');
      newAnswerSheet.setAttribute('alt', 'answer sheet');
      newAnswerSheet.width = 44;
      newAnswerSheet.height = 4;
      answerArea.insertAdjacentElement('beforeend', newAnswerSheet);
    }
  });
}

function displayLetters() {
  lettersContainer.textContent = '';

  LETTERS_ARRAY.forEach((line) => {
    var newDiv = document.createElement('div');
    line.forEach((letter) => {
      var newSpan = document.createElement('span');
      newSpan.id = letter;
      newSpan.textContent = letter;
      newDiv.insertAdjacentElement('beforeend', newSpan);
    });
    lettersContainer.insertAdjacentElement('beforeend', newDiv);
  });
}

function displayBodyParts() {
  bodyParts.textContent = '';
  BODY_PARTS.forEach(function (part) {
    var newSpan = document.createElement('span');
    newSpan.classList.add('hide', part);
    bodyParts.insertAdjacentElement('beforeend', newSpan);
  });
}

function showBodyParts() {
  if (mistakes > 6) return;
  bodyParts.children[mistakes].classList.remove('hide');
}

function showGameOver() {
  updateMaxScore();
  gameOver = true;
  currentScore = 0;
  loseAnimation.classList.remove('hide');
  header.style.visibility = 'hidden';
  lettersContainer.classList.add('hide');
  gameOverSheet.classList.remove('hide');

  displayBodyParts();
  displayAnswerSheet();
}

function updateScore() {
  for (var i = 0; i < currentScoreEls.length; i++) {
    currentScoreEls[i].textContent = currentScore;
  }
}

function updateMaxScore() {
  if (currentScore > maxScore)
    localStorage.setItem('hangman-max-score', currentScore);
}

function updateDiamondsNumber() {
  for (var i = 0; i < diamondsNumberEl.length; i++) {
    diamondsNumberEl[i].textContent = diamondsNum;
  }
}

function showWinGame() {
  updateMaxScore();
  for (var i = 0; i < bodyParts.children.length; i++) {
    bodyParts.children[i].classList.add('hide');
  }
  winAnimation.classList.remove('hide');
  lettersContainer.classList.add('hide');
  wellDoneSheet.classList.remove('hide');
  diamondsNum += 2;
  updateDiamondsNumber();
}

function showRightLetter(targetEl, chosenLetter) {
  if (targetEl.tagName === 'SPAN' && !chosenLetters.includes(chosenLetter)) {
    if (wordLetters.includes(chosenLetter)) {
      targetEl.classList.add('letter-right');
      rightLetters.push(chosenLetter);
      displayAnswerSheet();
      currentScore += 10;
      updateScore();
      restLetters.splice(restLetters.indexOf(chosenLetter), 1);
      if (uniqueWordLetters.sort().join('') === rightLetters.sort().join('')) {
        winGame = true;
        showWinGame();
      }
    } else {
      targetEl.classList.add('letter-wrong');
      showBodyParts();
      mistakes++;
    }
    chosenLetters.push(chosenLetter);
  }
}

initialize();

lettersContainer.addEventListener('click', function (e) {
  var targetEl = e.target;
  var chosenLetter = targetEl.textContent;

  showRightLetter(targetEl, chosenLetter);

  if (mistakes === 7) showGameOver();
});

for (var j = 0; j < goHome.length; j++) {
  goHome[j].addEventListener('click', function () {
    location.replace('../index.html');
    setTimeout(function () {
      diamondsNum = 80;
      initialize();
    }, 1000);
  });
}

for (var z = 0; z < restartGame.length; z++) {
  restartGame[z].addEventListener('click', function () {
    modal.classList.add('hide');
    gameLevel = 1;
    currentScore = 0;
    diamondsNum = 80;
    initialize();
  });
}

closeModal.addEventListener('click', function () {
  modal.classList.add('hide');
});

pauseBtn.addEventListener('click', function () {
  modal.classList.remove('hide');
});

nextLevelBtn.addEventListener('click', function () {
  gameLevel++;
  initialize();
});

hintBtn.addEventListener('click', function () {
  if (winGame) return;
  if (diamondsNum < 10) {
    notEnough.classList.remove('hide');
    setTimeout(function () {
      notEnough.classList.add('hide');
    }, 1000);
    return;
  }

  if (clicked === 1) {
    clicked = -1;

    diamondsNum -= 10;
    updateDiamondsNumber();
    var chosenLetter = restLetters[0];
    var targetEl = document.getElementById(chosenLetter);

    showRightLetter(targetEl, chosenLetter);
  }

  if (clicked === 0) {
    clicked = 1;
    confirmHint.classList.remove('hide');
    setTimeout(function () {
      confirmHint.classList.add('hide');
      clicked = 0;
    }, 1000);
  }
});
