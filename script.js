'use strict';
// // Author: Ganesh M N
// // Created on 26 June 23

let dice = document.querySelector('.dice');
dice.classList.add('hide');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let rollDice = document.querySelector('.btn--roll');
let newGame = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let holdScore0 = 0;
let holdScore1 = 0;
let currentScore = 0;
let currentEl = 0;
let currentRoll = 0;
let toggleClass = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', () => {
  let randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  currentRoll = randomDiceRoll;
  dice.classList.remove('hide');
  dice.src = `dice-${randomDiceRoll}.png`;

  if (randomDiceRoll != 1) {
    currentScore += randomDiceRoll;
    document.getElementById(`current--${currentEl}`).textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${currentEl}`).textContent = 0;
    currentEl = currentEl === 0 ? 1 : 0;
    toggleClass();
  }
});

hold.addEventListener('click', () => {
  if (currentEl === 0) {
    holdScore0 += currentScore;
    score0.textContent = holdScore0;
    currentEl = 1;
    currentScore = 0;
  } else {
    holdScore1 += currentScore;
    score1.textContent = holdScore1;
    currentEl = 0;
    currentScore = 0;
  }
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  console.log('hold score 1 ' + holdScore0);
  console.log('hold score 2 ' + holdScore1);
  if (holdScore0 >= 100) {
    player0.classList.add('player--winner');
  } else if (holdScore1 >= 100) {
    player1.classList.add('player--winner');
  }
  toggleClass();
});

newGame.addEventListener('click', () => {
  location.reload();
});
