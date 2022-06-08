'use strict';
// const newGameBtn = document.querySelector('.btn--new');

// const diceBtn = document.querySelector('.btn--roll');

// const diceImg = document.querySelector('.dice');
// const hold = document.querySelector('.btn--hold');
// const current0 = Number(document.getElementById('current--0').textContent);
// const current1 = document.getElementById('current--1').textContent;
// const score0 = document.getElementById('score--0').textContent;
// const score1 = document.getElementById('score--1').textContent;
// // const dice = document.querySelector('.dice');
// const player0 = document.querySelector('.player--0');

// const player1 = document.querySelector('.player--1');
// let diceNum = 4;
// // const switchPlayer = function () {
// //   if (player0.classList('player--active')) {
// //     player0.classList.remove('player--active');
// //     player1.classList.add('player--active');
// //   }
// // };
// // inertial dice position change
// diceImg.classList.add('hidden');

// // rolling dice functionality
// diceBtn.addEventListener('click', function () {
//   // generate a random number btw 0 and 7
//   diceNum = Math.trunc(Math.random() * 6) + 1;
//   // display image for dice

//   diceImg.classList.remove('hidden');
//   diceImg.src = `dice-${diceNum}.png`;

//   if (diceNum !== 1) {
//     current0 === diceNum;
//     console.log(current0, typeof current0);
//   } else {
//     //   switch
//   }
// });
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0Value = document.getElementById('score--0');
score0Value.textContent = 0;
const score1Value = document.getElementById('score--1');
score1Value.textContent = 0;
const currentScore0 = document.getElementById('current--0');
// console.log(typeof currentScore0);
const currentScore1 = document.getElementById('current--1');

const diceImg = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
diceImg.classList.add('hidden');
let currentScore = 0;
const scores = [0, 0];
let switchPlayer = function () {
  if (player0El.classList.contains('player--active')) {
    player0El.classList.remove('player--active');
    currentScore = 0;
    currentScore0.textContent = 0;
    player1El.classList.add('player--active');
  } else {
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    currentScore = 0;
    currentScore1.textContent = 0;
  }
};
// random number generator
// let randomNum = function () {
//   return Math.trunc(Math.random() * 6) + 1;
// };

//  roll dice functionality
roll.addEventListener('click', function () {
  const score = Math.trunc(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${score}.png`;
  if (score === 1) {
    switchPlayer();
  } else {
    currentScore += score;
    if (player0El.classList.contains('player--active')) {
      currentScore0.textContent = currentScore;
    } else {
      currentScore1.textContent = currentScore;
    }
  }
});
// hold btn event listeners
// hold.addEventListener('click', function () {
//   if (
//     score0Value.textContent >= 100 ||
//     score1Value.textContent >= 100
//   ) {
//    if (player0El.classList.contains('player--active')
//    {
//     player0El.classList.add('.player--winner');
// }else{
//   player1El.classList.add('.player--winner');
// }
//   } else {
//     if (player0El.classList.contains('player--active')) {
//       score0Value.textContent = Number(score0Value.textContent) + currentScore;
//       switchPlayer();
//     } else {
//       score1Value.textContent = Number(score1Value.textContent) + currentScore;
//       switchPlayer();
//     }
//   }
// });

hold.addEventListener('click', function () {
  if (score0Value.textContent >= 100 || score1Value.textContent >= 100) {
    if (player0El.classList.contains('player--active')) {
      player0El.classList.add('player--winner');
    } else {
      player1El.classList.add('player--winner');
    }
  } else {
    if (player0El.classList.contains('player--active')) {
      score0Value.textContent = Number(score0Value.textContent) + currentScore;
      switchPlayer();
    } else {
      score1Value.textContent = Number(score1Value.textContent) + currentScore;
      switchPlayer();
    }
  }
});
