var letter = require('./letter.js')

var myLetter = new letter("a");

console.log("Initial: " + myLetter.getChar())

myLetter.guessChar("b");

console.log("Guess wrong: " + myLetter.getChar())

myLetter.guessChar("a");

console.log("Guess correct: " + myLetter.getChar())
