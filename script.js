'use strict';
// // Author: Ganesh M N
// // Created on 26 June 23

let NewGameBtn = document.querySelector('.btn--new');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let dice = document.querySelector('.dice');
let currentPlayer, hold, score;
let player;
let init = function () {
  player = true;
  currentPlayer = 0;
  hold = [0, 0];
  score = 0;
  dice.classList.add('hide');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
};
init();
let toggle = function () {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
};

rollBtn.addEventListener('click', () => {
  if (player) {
    dice.classList.remove('hide');
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomNum}.png`;

    if (randomNum != 1) {
      score += randomNum;
      document.getElementById(`current--${currentPlayer}`).textContent = score;
    } else {
      score = 0;
      document.getElementById(`current--${currentPlayer}`).textContent = score;
      toggle();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (player) {
    hold[currentPlayer] += score;
    document.getElementById(`score--${currentPlayer}`).textContent =
      hold[currentPlayer];
    score = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = score;

    if (hold[currentPlayer] > 20) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hide');
      player = false;
    }
    toggle();
  }
});

NewGameBtn.addEventListener('click', init);
