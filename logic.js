// how well do you know your science words?

// variables

var wins = 0;
var losses = 0;

var randomWord;
var randomWordChosen = [];
var lineWord = [];
var guessableLetters = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsPrint = document.getElementById("winsPrint");
var lossesPrint = document.getElementById("lossesPrint");

var compGuessWord = document.getElementById("compGuessWord");
var guessesLeft = document.getElementById("guessesLeft");

var userGuesses = [];
var userWords = document.getElementById("userWords");

var userGuessScore;
var gameOver = document.getElementById("gameOver");

var sciWords = ["hypothesis", "molecule", "mineral", "science", "astronomy", "evolution", "climate", "experiment", "atom",
                 "astrophysics", "beaker", "biochemistry", "botany", "cell", "data", "electricity", "element", "energy", "fossil",
                    "genetics", "gravity", "laboratory", "magnetism", "mass", "matter", "microbiology", "observe", "particle", "phase",
                        "research", "scale", "temperature", "theory", "thermometer", "tissue", "variable", "volume", "weather", "zoology",
                            "ecosystem", "eclipse", "debris", "feedback", "function", "galaxy", "gene", "host", "parasite", "predator", "prey"];

// starts by chosing a random word and then ends by printing the random word in line format to the html
function randomWordToLine() {

    // picks a random word from the dictionary array
    randomWord = sciWords[Math.floor(Math.random() * sciWords.length)];

    // sends each character from the random word chosen to the new randomWordChosen array
    for (i = 0; i < randomWord.length; i++) {
        randomWordChosen[i] = randomWord.charAt(i);
    }

    // pushes underscore to the lineword array based on the length of the randomWordChosen array
    for (i = 0; i < randomWord.length; i++) {
        lineWord[i] = ("_ ");
    }

    // prints the lineWord array that represents the random word to the html
    compGuessWord.textContent = lineWord.join(' ');

}

/* resets all of the variables, arrays, and html text to start 
   a new game, and also re-runs the randomWordToLine function to pick a new word */
function reset() {
    userGuesses = [];
    lineWord = [];
    randomWordChosen = [];
    guessesLeft.textContent = userGuessScore = 7;
    userWords.textContent = "";
   
    gameOver.textContent = gameOver = "";
    randomWordToLine();
    return;
}

/* performs a check to see if the lineword that has been replaced with the user's 
   guesses is equal to the random word that was chosen */
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

/* starts the gameplay if the user has more than 0 guesses remaining, otherwise it runs 
   the reset function and restarts the userPlay function which will start the game over */
function userPlay() {

    if (userGuessScore > 0) {
        document.onkeyup = function () {
           
            // if the player guessed random word, then it will add 1 to the win score and reset the game
            if (arrCheck() === true) {
                // gameOver.textContent = gameOver = "YOU WON! The word was " + randomWordChosen.join(' '); <-- this is printing in html after the first win, but won't reset
                winsPrint.textContent = wins+=1;
                reset();
                
            }
            
             // if the player ran out of guesses, then it will add 1 to the loss score and reset the game
            else if (userGuessScore === 0) {
                // gameOver.textContent = gameOver = "YOU LOST! The word was " + randomWordChosen.join(' '); <-- this is printing in html after the first loss, but won't reset
                lossesPrint.textContent = losses+=1;
                reset();
                return;
            }

            // if a letter that was guessed was not in the alphabet (i.e. the guessableLetters array)
            else if (guessableLetters.includes(event.key) !== true) {
                alert("Using incorrect key. Must choose letter of the alphabet.");
            }
            
            // alerts the user if they have already picked a letter
            else if (userGuesses.includes(event.key)) {
                alert("You already chose that letter!");
            }
            
            // replace the line at "_" with the corresponding letter at the position in ramdomWordChosen array
            else if (randomWordChosen.includes(event.key)) {
                for (i = 0; i < lineWord.length; i++) {
                    if (randomWordChosen[i] === (event.key)) {
                        lineWord[i] = randomWordChosen[i];
                        compGuessWord.textContent = lineWord.join(' ');
                        ;
                    }
                    
                }
            }

            /* adds the letter to wrong user guesses area and removes one guess from the count */
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

    // -failsafe- if user guess score were to be less than 0, or any other failure, will reset everything and rerun game
    else {
        reset();
        userPlay();
        return;
    }
    return;
}

// initial startup to the game when the user first pushes a button on the screen to get the game going
document.onkeyup = function gameStart() {

    guessesLeft.textContent = userGuessScore = 7;

    randomWordToLine();
    userPlay(); 

}


