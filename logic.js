// how well do you know your science words?

// variables

var randomWord;
var randomWordChosen = [];
var lineWord = [];
// var finalWord;
var compGuessWord = document.getElementById("compGuessWord");
var guessesLeft = document.getElementById("guessesLeft");

var userGuesses = [];
var userWords = document.getElementById("userWords");

var userGuessScore;
var gameOver = document.getElementById("gameOver");


var sciWords = ["hypothesis", "molecule", "mineral", "science", "astronomy", "evolution", "climate", "experiment"];


function randomWordToLine() {
    
    // picks a random word from the dictionary array
    randomWord = sciWords[Math.floor(Math.random() * sciWords.length)];

    for (i=0; i < randomWord.length; i++) {
        randomWordChosen[i] = randomWord.charAt(i);
        console.log(randomWordChosen);
    }
    
    // pushes underscore to the lineword array based on the length of the random word chosen
    for (i = 0; i < randomWord.length; i++) {

        lineWord[i] = ("_ ");
        console.log(lineWord);
    }
    
    /*getting undefined printed at beginning of lines
    
    adds each individual line from the lineWord array to the final word variable 
    so it can print to the html*/

    compGuessWord.textContent = lineWord.join(' ');
    
    
    
    // adds the number of user guesses that are left to the html
    guessesLeft.textContent = userGuessScore = 7;
}

function reset () {
 userGuesses.length = 0;
 lineWord.length = 0;

 userGuesses.length = 0;
 gameOver.length = 0;
}

function userPlay() {
    document.onkeyup = function () {
        
        // prints to the html "game over" if the player has 0 guesses left
        if (userGuessScore === 0) {
            guessesLeft.textContent = userGuessScore--;
            gameOver.textContent = "GAME OVER!";
            document.onkeyup = function () {
            reset();
            randomWordToLine();

            }
        }
        
        // "should" replace the line at "_" with the corresponding letter at the position in ramdomWord var
        else if (randomWordChosen.includes(event.key)) {
            lineWord.splice[randomWordChosen.charAt(event.key), 1, event.key]
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

document.onkeyup = function gameStart() {
    randomWordToLine();
    userPlay();
    console.log(randomWord);
    console.log(randomWord.length);
}



























