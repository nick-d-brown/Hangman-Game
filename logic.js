// how well do you know your science words?

// variables

var wins = 0;
var losses = 0;

var randomWord;
var randomWordChosen = [];
var lineWord = [];
var guessableLetters = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var finalWord;
var winsPrint = document.getElementById("winsPrint");
var lossesPrint = document.getElementById("lossesPrint");

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

    for (i = 0; i < randomWord.length; i++) {
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
    // guessesLeft.textContent = userGuessScore = 7;
}

function reset() {
    userGuesses.length = 0;
    lineWord.length = 0;
    randomWordChosen = [];
    userWords.textContent = "";
    guessesLeft.textContent = userGuessScore = 7;
    gameOver.textContent = "";
    randomWordToLine();
    console.log(wins);
    console.log(losses); 
    return;
}

function arrCheck() {

    if (lineWord === randomWordChosen) {
        return true;
    } 
    
    for (var i = 0; i < lineWord.length; ++i) {
        if (lineWord[i] !== randomWord[i]) {
            return false;
        }
    }
    return true;
}

function userPlay() {

    if (userGuessScore >= 0) {
        document.onkeyup = function () {
            
            // prints to the html "game over" if the player has 0 guesses left
            
            
            // charAt.lineWord[i] === randomWordChosen[i] && lineWord.length === randomWordChosen.length
            
            if (arrCheck() === true) {
                gameOver.textContent = "YOU WON!";
                winsPrint.textContent = wins+=1;
                reset();
                
            }
            
            else if (userGuessScore === 0) {
                guessesLeft.textContent = userGuessScore--;
                gameOver.textContent = "GAME OVER!";
                lossesPrint.textContent = losses+=1;

                if (document.onkeyup) {
                    reset();
                    return;
                }
                return;
            }

            else if (guessableLetters.includes(event.key) !== true) {
                alert("Using incorrect key. Must choose letter of the alphabet.");
            }
            
            // alerts user if they have already picked a letter
            else if (userGuesses.includes(event.key)) {
                alert("You already chose that letter!");
            }
            
            // replace the line at "_" with the corresponding letter at the position in ramdomWord var
            else if (randomWordChosen.includes(event.key)) {
                for (i = 0; i < lineWord.length; i++) {
                    // if the index of the lined word = the indicies of the random word chosen then replace it 
                    if (randomWordChosen[i] === (event.key)) {
                        lineWord[i] = randomWordChosen[i];
                        compGuessWord.textContent = lineWord.join(' ');
                        ;
                    }
                }
            }
        

            /* adds the letter to userGuesses id and remove one life if user choses wrong*/
            else {
                if (userGuesses.includes(event.key) !== true && randomWordChosen.includes(event.key) !== true) {
                        userGuesses.push(event.key);
                        userWords.textContent = userGuesses;
                        guessesLeft.textContent = userGuessScore--;
                    }
                }

        }
        return;
    }
    else {
        reset();
        userPlay();
        return;
    }
    return;
}

document.onkeyup = function gameStart() {

    guessesLeft.textContent = userGuessScore = 7;

    randomWordToLine();
    userPlay();
    console.log(randomWord);
    console.log(randomWord.length); 
  
     

}



























