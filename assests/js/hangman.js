



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
            hint: "Ok, ok, You’re Gonna Need A Bigger Boat…"
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
            hint: "Nine million terrorists in the world and I gotta kill one with feet smaller than my sister."
        },

        {
            answer: "chinatown",
            hint: "Forget it, Jake, it's Chinatown."
        },

        {
            answer: "psycho",
            hint: "A boy's best friend is his mother.",
        }
    ]

    var randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];



};



var randomThing = getItem()
// console.log(randomThing.hint);
// console.log(randomThing.answer);
document.getElementById("hint-text").innerHTML = ("Here is your hint.... " + randomThing.hint);
// document.getElementById("blankspaces-text").innerHTML = ("your word: " + blankSpacesAnswer.join(" "));
// document.getElementById("usser-guesses-text").innerHTML = ("your guesses: ");



var blankSpacesAnswer = [];
for (var i = 0; i < randomThing.answer.length; i++) {
    blankSpacesAnswer[i] = "_";
    console.log(blankSpacesAnswer);
    document.getElementById("blankspaces-text").innerHTML = ("Your word:   " + blankSpacesAnswer.join(" "));
};

var currentWord;
var guessingWord = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 15;
var letterGuessed = "";
var wrongGuesses = [];
var blanksAndSuccesses = [];


var remainingLetters = randomThing.answer.length;


//game loop 

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);




    if (remainingLetters > 0) {
        //show player progress
        var guessesEl = document.getElementById("blankspaces-text")
        guessesEl.innerHTML = blankSpacesAnswer.join(" ")

        if (userGuess.length !== 1) {
        } else {
            for (var j = 0; j < randomThing.answer.length; j++) {
                if (randomThing.answer[j] === userGuess) {
                    blankSpacesAnswer[j] = userGuess;
                    remainingLetters--;
                    
                    guessesEl.innerHTML = ("your word:   " + blankSpacesAnswer.join(" "));
                } else if (randomThing.answer[j] !== userGuess); {
                    wrongGuesses = userGuess;
                    numGuesses--;
                    document.getElementById("usser-guesses-text").textContent = ("your guesses: " + wrongGuesses);
                    document.getElementById("guesses-left").textContent = ("Number of guesses: " + numGuesses);


                } 
                
            }
        }
    };

};
