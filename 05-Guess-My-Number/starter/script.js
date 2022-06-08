'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number ! 🥳';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 5;
// document.querySelector('.guess').value = '25';
// console.log(document.querySelector('.guess').value);
// 👂🏻 adding event listener
// event listener syntax .addEventListener ('click', function(){}) it take two argument 1st the event name and2nd the results instruction
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = document.querySelector('.score').textContent;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//a variable number that create a random number between 0 and 20 (trunc) is used to eliminate the decimal values and (+1 ) is used to start the number from 1 (Math.random()) is a function that returns random values
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'please enter a Number😓';
    displayMessage('please enter a Number😓');
  } else if (guess === number) {
    displayMessage('guess is correct 🎉');
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('number').style.width = '30rem';
  } else if (guess < number) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('guess is lower than number 👇🏻');
    } else {
      displayMessage('you lost the game');
    }
  } else if (guess > number) {
    if (score > 0) {
      score--;
      displayMessage('guess is greater than number');

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game ');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = Number('20');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
});
