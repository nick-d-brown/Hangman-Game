// how well do you know your science words

// variables

var randomWord;
var lineWord = [];
var finalWord;
var compGuessWord = document.getElementById("compGuessWord");
var guessesLeft = document.getElementById("guessesLeft");
var userWords = document.getElementById("userWords");
var gameOver = document.getElementById("gameOver");
var userGuessScore;
var userGuesses = [];


var sciWords = ["hypothesis", "molecule", "mineral", "science", "astronomy", "evolution", "climate", "experiment"];





document.onkeyup = function gameStart() {
    randomWordToLine();
    userPlay();    
    console.log(randomWord);
}


function randomWordToLine() {
    randomWord = sciWords[Math.floor(Math.random() * sciWords.length)];
    
    for (i = 1; i <= randomWord.length; i++) {
        lineWord.push("_ ");
    }
    for (i = 0; i <= lineWord.length; i++) {
        finalWord += lineWord[i];
    }

    compGuessWord.textContent = finalWord;
    guessesLeft.textContent = userGuessScore = 7;
}

function userPlay() {
    document.onkeyup = function() {

        if (userGuessScore === 0) {
            guessesLeft.textContent = userGuessScore--;
            gameOver.textContent = "GAME OVER! Please refresh the browswer to play again."
        }
        else if (randomWord.includes(event.key)) {
            /* replace letter with line at "_ " position in randomWord */
            lineWord.splice[randomWord.charAt(event.key),1,event.key]
        }
        else {
            /*add letter to userGuesses id and remove one life*/
            userGuesses.push(event.key);
            userWords.textContent = userGuesses;
            guessesLeft.textContent = userGuessScore--;

        }
    }
}   




























