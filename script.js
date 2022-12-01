'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 18;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20;

const calcNumber = function () {
  const num = Math.trunc(Math.random() * 20) + 1;
  console.log('hide number', num);
  return num;
};
let theNumber = calcNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no number or input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number.';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'The number is not in the range';
  } else {
    //When the number is wrong
    if (guess !== theNumber) {
      document.querySelector('.message').textContent =
        guess > theNumber ? 'Too high!' : 'Too low!';
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
      //   }
      // //When the number is too high
      // if (guess > theNumber) {
      //   document.querySelector('.message').textContent = 'Too high';
      //   if (score > 1) {
      //     score--;
      //     document.querySelector('.score').textContent = score;
      //   } else {
      //     document.querySelector('.message').textContent = 'You lost the game!';
      //     document.querySelector('.score').textContent = 0;
      //   }

      //   //When the number is too low
      // } else if (guess < theNumber) {
      //   document.querySelector('.message').textContent = 'Too low';
      //   if (score > 1) {
      //     score--;
      //     document.querySelector('.score').textContent = score;
      //   } else {
      //     document.querySelector('.message').textContent = 'You lost the game!';
      //     document.querySelector('.score').textContent = 0;
      //   }

      //When player wins
    } else if (guess === theNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = theNumber;
      document.querySelector('.message').textContent = 'Yo win!';

      //When the score becomes the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  theNumber = calcNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
