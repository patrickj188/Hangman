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
document.getElementById("hint-text").innerHTML = ("Here is your hint.... " + randomThing.hint.italics());

var blankSpacesAnswer = [];
var blanksAndSuccesses = document.getElementById("blankspaces-text");
for (var i = 0; i < randomThing.answer.length; i++) {
    blankSpacesAnswer[i] = "_";
    console.log(blankSpacesAnswer);
    blanksAndSuccesses.innerHTML = ("Your word: " + blankSpacesAnswer.join(" "));
};

var currentWord;
var guessingWord = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;
var letterGuessed = "";
var wrongGuesses = [];

var remainingLetters = randomThing.answer.length;

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    var answerLetterArray = randomThing.answer.split("");
    guessingWord.length = answerLetterArray.length;
    console.log(answerLetterArray);

    if (remainingLetters > 0) {
        var guessesEl = document.getElementById("blankspaces-text")
        guessesEl.innerHTML = blankSpacesAnswer.join(" ")


        var foundIndex;
        for (var i = 0; i < answerLetterArray.length; i++) {
            console.log(answerLetterArray[i]);

            if (userGuess === answerLetterArray[i]) {
                blankSpacesAnswer[i] = userGuess

            }

           else if (answerLetterArray[i]!== userGuess){
                numGuesses--;
            }


            blanksAndSuccesses.innerHTML = ("your word:   " + blankSpacesAnswer.join(" "));
            document.getElementById("guesses-left").textContent = ("Number of guesses: " + numGuesses);
            document.getElementById("usser-guesses-text").textContent = ("Your guesses: " + userGuess);



            // blanksAndSuccesses.innerHTML = ("your word:   " + answerLetterArray.join(""));
        }



        // if (foundIndex !== null) {
        //     blankSpacesAnswer[foundIndex] = userGuess;
        //     remainingLetters--;
        // } else {
        //     wrongGuesses.push(userGuess);
        // }
        // blanksAndSuccesses.innerHTML = ("your word:   " + blankSpacesAnswer.join(" "));
        // document.getElementById("usser-guesses-text").textContent = ("your guesses: " + wrongGuesses);
        // document.getElementById("guesses-left").textContent = ("Number of guesses: " + numGuesses);
        // numGuesses--;

    };



    
};