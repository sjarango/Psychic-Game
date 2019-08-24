
// random number thats stored globally
// array of letters in the alphabet
var randomNum;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// global selected letter 
var letter = randomLetter();
console.log("letter is: " + letter);

// Getting user input
var userInput;
document.onkeyup = function(event) {
    userInput = event.key;
    console.log("user input is: " + userInput);
    letter = randomLetter();
    console.log("new letter is: " + letter);
}

// return random letter
function randomLetter() {
    randomNum = Math.floor(Math.random() * 3);
    return letters[randomNum];
}

function checkWin() {

}
