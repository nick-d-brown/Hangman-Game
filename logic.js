// how well do you know your science words?

// variables

var randomWord;
var lineWord = [];
var finalWord;
var compGuessWord = document.getElementById("compGuessWord");
var guessesLeft = document.getElementById("guessesLeft");

var userGuesses = [];
var userWords = document.getElementById("userWords");

var userGuessScore;
var gameOver = document.getElementById("gameOver");


var sciWords = ["hypothesis", "molecule", "mineral", "science", "astronomy", "evolution", "climate", "experiment"];


document.onkeyup = function gameStart() {
    randomWordToLine();
    userPlay();
    console.log(randomWord);
    console.log(randomWord.length);
}


function randomWordToLine() {

    // picks a random word from the dictionary array
    randomWord = sciWords[Math.floor(Math.random() * sciWords.length)];

    // pushes underscore to the lineword array based on the length of the random word chosen
    for (i = 0; i < randomWord.length; i++) {
        lineWord.push("_ ");
    }

    /*getting undefined printed at beginning of lines
    
    adds each individual line from the lineWord array to the final word variable 
    so it can print to the html*/
    for (i = 0; i < lineWord.length; i++) {
        finalWord += lineWord[i];
    }

    // adds the lined version of the random word to the html
    compGuessWord.textContent = finalWord;

    // adds the number of user guesses that are left to the html
    guessesLeft.textContent = userGuessScore = 7;
}

function userPlay() {
    document.onkeyup = function () {

        // prints to the html "game over" if the player has 0 guesses left
        if (userGuessScore === 0) {
            guessesLeft.textContent = userGuessScore--;
            gameOver.textContent = "GAME OVER! Please refresh the browswer to play again."
        }

        // "should" replace the line at "_" with the corresponding letter at the position in ramdomWord var
        else if (randomWord.includes(event.key)) {
            lineWord.splice[randomWord.charAt(event.key), 1, event.key]
        }

        // alerts user if they have already picked a letter
        else if (userGuesses.includes(event.key)) {
            alert("You already chose that letter!");
        }

        /* adds the letter to userGuesses id and remove one life if user choses wrong*/
        else {
            userGuesses.push(event.key);
            userWords.textContent = userGuesses;
            guessesLeft.textContent = userGuessScore--;

        }
    }
}




























