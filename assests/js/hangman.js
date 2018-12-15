var blanksAndSuccesses;
var winCounter;
var lossCounter;
var blankSpacesAnswer;
var currentWord;
var guessingWord;
var numGuesses;
var letterGuessed;
var wrongGuesses;
var userGuess;
var randomThing;
var remainingLetters;

setup();

initialize();

function setup() {
    blanksAndSuccesses = document.getElementById("blankspaces-text");
    winCounter = 0;
    lossCounter = 0;
}

function initialize() {
    userGuess = "";
    randomThing = getItem();
    document.getElementById("hint-text").innerHTML =
        "Hint...." + randomThing.hint.italics();

    blankSpacesAnswer = [];
    for (var i = 0; i < randomThing.answer.length; i++) {
        blankSpacesAnswer[i] = "_";
        console.log(blankSpacesAnswer);
        blanksAndSuccesses.innerHTML = "Your word: " + blankSpacesAnswer.join(" ");
    }

    guessingWord = [];
    numGuesses = 12;
    letterGuessed = "";
    wrongGuesses = [];
    remainingLetters = randomThing.answer.length;

    document.onkeyup = function (event) {
        userGuess = event.key;
        console.log(userGuess);
        var answerLetterArray = randomThing.answer.split("");
        guessingWord.length = answerLetterArray.length;
        console.log(answerLetterArray);

        if (remainingLetters > 0) {
            var notFound = true;
            for (var i = 0; i < answerLetterArray.length; i++) {
                console.log(answerLetterArray[i]);

                if (userGuess === answerLetterArray[i]) {
                    blankSpacesAnswer[i] = userGuess;
                    notFound = false;
                }
            }

            if (notFound === true) {
                numGuesses--;
            }

            if (blankSpacesAnswer.join("") === randomThing.answer) {
                win();
            } else if (numGuesses === 0) {
                lose();
            }
        }

        run();
    };

    run();
}

function run() {
    blanksAndSuccesses.innerHTML = "Your word:   " + blankSpacesAnswer.join(" ");
    document.getElementById("guesses-left").textContent =
        "Number of guesses: " + numGuesses;
    document.getElementById("usser-guesses-text").innerHTML =
        "Your last guess: " + userGuess;
    document.getElementById("wins-text").textContent = "Wins: " + winCounter;
    document.getElementById("losses-text").textContent = "Losses: " + lossCounter;
}

function win() {
    winCounter++;
    initialize();
}

function lose() {
    lossCounter++;
    initialize();
}

function getItem() {
    var array = [
        {
            answer: "harvey",
            hint: "Thank you Harvey, I prefer you too."
        },

        {
            answer: "titanic",
            hint: "Jack, I’m flying!"
        },

        {
            answer: "jaws",
            hint: "You’re Gonna Need A Bigger Boat…"
        },

        {
            answer: "rocky",
            hint: "ADRIAAAAAAAAAAAN!!!!!!!!"
        },

        {
            answer: "casablanca",
            hint: "We'll always have Paris."
        },

        {
            answer: "braveheart",
            hint: "They may take away our lives, but they'll never take our freedom!"
        },

        {
            answer: "goodfellas",
            hint: "As far back as I can remember, I always wanted to be a gangster."
        },

        {
            answer: "diehard",
            hint:
                "Nine million terrorists in the world and I gotta kill one with feet smaller than my sister."
        },

        {
            answer: "chinatown",
            hint: "Forget it, Jake, it's Chinatown."
        },

        {
            answer: "psycho",
            hint: "A boy's best friend is his mother."
        }
    ];

    var randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}