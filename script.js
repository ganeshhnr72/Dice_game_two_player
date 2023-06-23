'use strict';
// Author: Ganesh M N
// Created on 22 June 23

let roll = 5;
let hold1 = 0;
let hold2 = 0;

let player1 = document.querySelector('.player--0').classList;
let player2 = document.querySelector('.player--1').classList;
let removePlayer1 = function () {
  player1.remove('player--active');
  player2.add('player--active');
};
let removePlayer2 = function () {
  player2.remove('player--active');
  player1.add('player--active');
};
let newGame = document
  .querySelector('.btn--new')
  .addEventListener('click', () => {
    hold1 = 0;
    hold2 = 0;
    roll = 5;
    removePlayer2();
    document.querySelector('#score--0').textContent = 43;
    document.querySelector('#score--1').textContent = 24;
    player1.remove('player--winner');
    player2.remove('player--winner');
  });
document.querySelector('.btn--roll').addEventListener('click', () => {
  roll = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('img').setAttribute('src', './dice-' + roll + '.png');

  if (roll == 1 && player1.length == 3) {
    removePlayer1();
  } else if (roll == 1 && player2.length == 3) {
    removePlayer2();
  }
  if (player1.length > 2) {
    document.querySelector('#current--0').textContent = roll;
  } else {
    document.querySelector('#current--1').textContent = roll;
  }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (player1.length == 3) {
    hold1 = hold1 + roll;
    document.querySelector('#score--0').textContent = hold1;
    // roll = '';
    removePlayer1();
  } else if (player2.length == 3) {
    hold2 = hold2 + roll;
    document.querySelector('#current--1').textContent = roll;
    document.querySelector('#score--1').textContent = hold2;
    // roll = '';
    removePlayer2();
  }
  if (hold1 >= 100) {
    player1.add('player--winner');
  } else if (hold2 >= 100) {
    player2.add('player--winner');
  }
});
