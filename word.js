//  Word depends on the Letter constructor.
var Letter = require('./letter.js');

// Word.js: Contains a constructor(creates object representing current word user is trying to guess)
function Word(theWord){

    // create a new Letter variable
    var letter = new Letter();

    // An array of new Letter objects representing the letters of the underlying word
    this.letterObjectArray = [];

    // add the letters into the array

    // variable holding the hidden word
    this.theWord = theWord;

    // WORKS
    // console.log(theWord);

    // WORKS
    this.wordArr = theWord.split("");
    // console.log(this.wordArr.length);

    // variable to capture the length of the array to pass into a for loop inside the .toString func
    this.lengthOfTheWord = this.wordArr.length;

    // WORKS
    // console.log(this.lengthOfTheWord);


    // A function that returns a string representing the word.
    this.toString = function() {
        //  This should call the function on each letter object
            for (let i = 0; i < this.lengthOfTheWord; i++) {

            // creates an array of new Letter objects that make up the word
                let lettersOfTheWord = this.wordArr[i];

                // WORKS
                // console.log(lettersOfTheWord); 

                this.letterObjectArray.push(lettersOfTheWord);


                // WORKS
                console.log(this.letterObjectArray);
                //  displays the character or an underscore and concatenate those together.
              
                let displayCharOrUnderscore = this.letterObjectArray
                console.log(displayCharOrUnderscore);

                let hiddenString = displayCharOrUnderscore.join("");

                // console.log(displayCharOrUnderscore);

                console.log(hiddenString);
                
                // console.log(displayCharOrUnderscore);

                // returns a string representing the word.
                // console.log(JSON.stringify(stringedWord, null, 2));
                // return stringedWord;
            };

            


    };

    this.toString();  
    
    // // A function that takes a character as an argument
    // this.userGuess = function(guess) {

    //     // and calls the guess function on each letter object
    //     letter.guessCheck(guess);
       
    //     }
    }
console.log(Word("banana"));
// export word constructor
module.exports = Word;









// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)