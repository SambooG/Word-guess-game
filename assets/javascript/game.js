// Game Function (keeps track of our game)


// Event Listener that allows to interact with our game
console.log("wins")
const words = ["frank", "backtoblack", "rehab", "Valerie"];
// let attempts = 0  // We don't need this since we have guessAttempts on line 11
let currentWord = '';
let wins = 0;
let losses = 0;
let guessAttempts = 10;
let incorrectGuessesList = [];
let correctGuessList = [];


/*
function listenForGuesses() {
  // If they have attempts left and have not guessed the word yet
    // Keep on playing
  // Else if they have used all their attempts without guessing the word
    // Tell them they've failed
    // Add a loss
    // restart the game
  // Else if they have guessed the word
    // Tell them they rock
    // Add a win
    // Restart the game
} i
*/

// function listenToGuessesNew() {
//   document.onkeyup = function(event) {
//     if (guessAttempts > 0 && correctGuess.includes('_')) {
      // Play Game
    // }
    // else if (guessAttempts < 1) {
      // Tell them they lost
      // Add a loss
      /*
       Restart the Game. This will involve:
        1. resetting our incorrectGuesses to [] for the new word
        2. resetting our correctGuesses to [] for the new word
        3. resetting our attempts to 10 for the new word
        // but we do not reset wins and losses as we want to keep on trakcing that
      */
       
    // }
    // else if (correctGuess.includes('_') === false) {
      // The won
      // Tell them they won
      // Add a win
      /*
       Restart the Game. This will involve:
        1. resetting our incorrectGuesses to [] for the new word
        2. resetting our correctGuesses to [] for the new word
        3. resetting our attempts to 10 for the new word
        // but we do not reset wins and losses as we want to keep on trakcing that
      */
//     }
//   }
// }

function listenToGuesses() {
  document.onkeyup = function(event){
    console.log("LISTENING TO GUESSES NOW :)");
    if (guessAttempts > 0 && correctGuessList.includes('_')) {
      const numericalGuessedValue = event.keyCode;
      const guessedValueAsLetter = event.key;
    
    // So the alert on line 76 runs every time? What do you get for the below console logs?  
      console.log("Numerical Guessed Value", numericalGuessedValue); // 
      console.log("Guessed Value As Letter", guessedValueAsLetter); 
      
      // Listen for what they press
          if (numericalGuessedValue < 65 || numericalGuessedValue > 91) { // MIKE CHANGED THIS TO MATCH
            // Alert that they didn't select a letter
            alert('Not a letter');
          } else {
            console.log("IT IS A LETTER")
            // Did they already guess this letter? // check against incorrect guesses and correctGuess
            if (incorrectGuessesList.includes(guessedValueAsLetter)) {
              // Show an alert that they guessed 
              alert("you already guessed this"); 
              // Return 
              return;
            }
            //Check to see if it matches letter(s) in the word
            let didMatch = false;
            for (let i = 0; i < currentWord.length; i++) {
              const currentLetterInChosenWord = currentWord[i];
              if (guessedValueAsLetter === currentLetterInChosenWord) {
                  // The index for the characters in currentWord match with the indeces in correctGuess
                  // [_,_,_,_,_]
                  //  h e l l 0
                  //  0 1 2 3 4
                  // [h,_,_,_,_]
                  // Change underscore(s) to that letter (this should be shown to the user)  
                  correctGuessList[i] = currentLetterInChosenWord;
                  // So we know later on not to deduct a guessAttempt
                  didMatch = true;
              }
            }
            // After we've checked all the letters, update the guess list
            document.getElementById("guess").textContent = correctGuessList.join("");
            
            // If it doesn't match
            if(didMatch === false) {
              // Add the letter to the incorrect guesses list
              incorrectGuessesList.push(guessedValueAsLetter);
              // Remove an attempt
              guessAttempts--;
              // Shown on the screen as an incorrect guess
              document.getElementById("attempts").textContent = guessAttempts;
              document.getElementById("wrong").textContent = incorrectGuessesList.join('');
            }
          // Repeat this for the next guess
          }
      // If they have used all of their attempts without getting the word
    }
    
    else if (guessAttempts < 1) {
      losses++;
      // Add a loss

      alert("loser");
      // Alert that they've lost
      // Restart the game
      gameBegin();
    }
    // If they win
    else if (correctGuess.includes('_') === false){
        // Alert that they've won
        alert("youwin!!!");
        wins++;
        // Add a win
        // Restart the game // gameBegin()
        gameBegin();
    }
  }
}

//trying to reset for new game
function gameBegin() {
  console.log("Game Begins");

  correctGuessList = [];
  incorrectGuessesList = [];
  guessAttempts = 10;
  document.getElementById("winners").textContent = wins;
  document.getElementById("loser").textContent = losses;
  document.getElementById("attempts").textContent = guessAttempts;

  // Pick a word for this current game from some list
  currentWord = words[Math.floor(Math.random()* words.length)];
      console.log(currentWord);
  


  // Loop (as long as i < wordLength) { correctGuess.push('_') }
    // currentWordLength = 5;
    // last index of currentWord = 4
  for (let i = 0; i < currentWord.length; i++){
    correctGuessList.push("_");
  };
  console.log("currentWord:", currentWord.length)
  console.log('CorrectGuess:', correctGuessList)
  document.getElementById("guess").textContent = correctGuessList.join("");
  // correctGuess = ["_", "_", "_", "_", "_"];


  listenToGuesses();
};

// This function call is what starts our game. We need to call gameBegin() to start the game
gameBegin();


/*
  Index.html

  Words Available: (Done)
  Wins: (Done)
  Losses: ( Done)
  Guess Attempts: (Done) 
  Incorrect Guesses: (Done)
  Correct Guesses:
  
  Word (to be guessed) (a bunch of _ )
  
  // Goal of our game
  // A user is going to come to the site
     // Click a key to get started

// OUR CODE!!! WOOHOO!!
     // Game Starts
        // Pick a word for this current game from some list
        // Show the user the number of letters for that word
        // Track the incorrect guesses
        // Track attempts: 5
        // Track if they've gotten the word

        //If they have attempts left and they haven't gotten the word yet    
          // Listen for what they press
            // If not a letter
              // Show them an alert 
              // Return
            // Else
              // Did they already guess this letter?
                // Show an alert that they guessed
                // Return 
              //Check to see if it matches letter(s) in the word
                // Change underscore(s) to that letter (this should be shown to the user)  
              // If it doesn't match
                // Shown on the screen as an incorrect guess
                // Remove an attempt
            // Repeat this for the next guess
      
        // If they have used all of their attempts without getting the word
            // Alert that they've lost
            // Add a loss
        // If they win
            // Alert that they've won
            // Add a win

        // Restart the game



  

*/
















//  //keyup event to start
//  //not necessary to be a global function or it will continually start a new game?
// document.onkeyup = function(event){
//   //something else goes here
// };
//  //find a word
//     //object of words to use
//     document.onkeyup(event){
//       var words = {
//           frank: "frank",
//           btb: "back to black",
//           rehab: "rehab",
//           valerie: "Valerie",
//       }
//       //get the funtion to pick a word once
//       break;
      
//       //array for answers
//       var blanks = [''];
//       for(var i= 0; i < words.lenth; i++);
//       blanks[i] = "_";
      
//       //search array after guess return error if already guessed a letter
//     }
//     //array of letter in words
//     //new function 
    
//     var frank= ["f", "r", "a", "n", "k"];
    
//     var valerie = ["v", "a", "l", "e", "r", "i", "e"];
    
//     var BackToBlack = ["b", "a", "c", "k", "t", "o", "b", "l", "a", "c", "k"];
//     //i dont know how to add spaces

//     var rehab = ["r", "e", "h", "a", "b"]

//     //var for guess
//     // function + .tolowercase
//   //if/ else to accept guessed letters

//     //
  
//     //remaining guesses --

//   //for var that recognizes when there are no new letters?

//     //function for when they score a point
    
//     var score = 0
//     score++
    
//     document.getElementById(winner).innerHTML = ;//??

    





  