/*Write a guessing game where the user has to guess a secret number.
After every guess the program tells the user whether their number was too large or too small.
At the end, the number of tries needed should be printed.*/


let prompt = require("prompt-sync")({sigint: true}); //signit: true so the user can exit whenever they want.

let numberToGuess = Math.floor(Math.random() * 100); //Generate a random whole number between 0 and 100.
let guessedRight = false; //To determine if the code should continue prompting the user for input.
let attempts = []; //Number of attempts made by the user.


while (guessedRight === false) {

  console.log('Guess a number between 0 and 100:');
  let answer = Number(prompt('> ')); //Converted answer to a number because it's a string (prompt() returns strings).

  //Compare the answer given by the user to the number they're supposed to guess:
  if (attempts.includes(answer)) { //Inputting the same number multiple times counts as 1 try, so no pushing into the attempts array.
    console.log('Already guessed!');
    
  } else if (answer < numberToGuess) {
    console.log('Too low!');
    attempts.push(answer);

  } else if (answer > numberToGuess) {
    console.log('Too high!');
    attempts.push(answer);

  } else if (isNaN(answer) === true) { //Inputting an answer that's not a number doesn't count as a trym so no pushing into the attempts array.
    console.log('Not a number! Try again!');
      
  } else if (answer === numberToGuess) {
    console.log('You got it! You took ' + attempts.length + ' attempts!');
    guessedRight = true;
  }
}
