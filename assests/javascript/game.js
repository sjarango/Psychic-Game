
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
var str1, str2 = ''; // for string concat

// initial content for html
var targetDiv = document.getElementById("wins");
targetDiv.textContent = "Wins: " + wins;
targetDiv = document.getElementById("losses");
targetDiv.textContent = "Losses: " + loss;
targetDiv = document.getElementById("guesses-left");
targetDiv.textContent = "Guesses left: " + guessesLeft;
targetDiv = document.getElementById("guesses-so-far");
targetDiv.textContent = "Guesses so far: " + guesses;

// Getting user input
var userInput;
document.onkeyup = function(event) {
    userInput = event.key;
    console.log("user input is: " + userInput);
    
    checkWin();

}

// random letter generator
function randomLetter() {
    randomNum = Math.floor(Math.random() * 3); //change to 26 for final product, set to 3 to test
    return letters[randomNum];
}

// main logic for game
function checkWin() {
    // checks for win
    if( letter == userInput ){
        console.log("its a win");
        wins++;
        reset();
    } else {
        // operations for guesses-left and concat strings for guesses-so-far
        guessesLeft--;
        console.log("guesses left: " + guessesLeft);
        if(guessesLeft == 8){
            guesses = userInput;
            console.log("guesses so far: " + guesses);
        } else {
            str1 = guesses;
            str2 = ", " + userInput;
            guesses = str1.concat(str2);
            console.log("guesses so far: " + guesses);
        }
    }
    // checks for loss
    if (guessesLeft < 1){
        console.log("its a loss");
        loss++;
        reset();
    }
}

// resets all variables, except for wins & losses 
function reset() {
    console.log("wins: " + wins);
    console.log("losses: " + loss);
    letter = randomLetter();
    console.log("new letter is: " + letter);
    guessesLeft = limit;
    console.log("guesses left: " + guessesLeft);
    guesses = '';
    var str1, str2 = '';
    console.log("guesses so far: " + guesses);
}
