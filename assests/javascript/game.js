
// random number thats stored globally
// array of letters in the alphabet
var randomNum;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// global selected letter 
var letter = randomLetter();
console.log("letter is: " + letter);

const limit = 9;
var guessesLeft = limit;
var wins = 0;
var loss = 0;
var guesses = '';

// Getting user input
var userInput;
document.onkeyup = function(event) {
    userInput = event.key;
    console.log("user input is: " + userInput);
    
    checkWin();
    console.log("guesses left: " + guessesLeft);
    // letter = randomLetter();
    // console.log("new letter is: " + letter);
}

// return random letter
function randomLetter() {
    randomNum = Math.floor(Math.random() * 3); //change to 26 for final product, set to 3 to test
    return letters[randomNum];
}

function checkWin() {
    // checks for win
    if( letter == userInput ){
        console.log("its a win");
        wins++;
        reset();
    } else {
        guessesLeft--;
    }
    // checks for loss
    if (guessesLeft < 1){
        console.log("its a loss");
        loss++;
        reset();
    }
}

function reset() {
    letter = randomLetter();
    console.log("new letter is: " + letter);
    guessesLeft = limit;
    guesses = '';
}
