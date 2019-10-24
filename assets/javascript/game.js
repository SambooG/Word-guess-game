// Game Function (keeps track of our game)


// Event Listener that allows to interact with our game
console.log("wins")
const words = ["frank", "backtoblack", "rehab", "Valerie"];
let currentWord = '';
let wins = 0;
let losses = 0;
let guessAttempts = 10;
let incorrectGuesses = [];
let correctGuess = [];

/*
   GOOGLE
   [_, O, O, _, _, _];
*/
function listenToGuesses() {
  document.onkeyup(event){
    let value = event.key;
        // Listen for what they press
        if (value.charCode < 65 || value.charCode > 90) {
          alert('yes!');
        } else {
          let didMatch = false;
          // Did they already guess this letter? // check against incorrect guesses and correctGuess
           for (let i = 0; i === incorrectGuesses.length; i++){
             // Show an alert that they guessed 
            alert("you already guessed this");
            // Return 
            return;
           }
          //Check to see if it matches letter(s) in the word
             for (let i = 0; i < currentWord.length; i++) {
               if (value === currentWord[i]) {
                  // Change underscore(s) to that letter (this should be shown to the user)  
                  didMatch = true;
                 correctGuess[i] = value;
               }
             }
           
          // If it doesn't match
          else {
            incorrectGuesses.push(letter);
          }
            // Shown on the screen as an incorrect guess
            guessAttempts--;
            // Remove an attempt
        // Repeat this for the next guess
        }
  
    // If they have used all of their attempts without getting the word
    if (guessAttempts === 0) {
      losses++;
      // Add a loss
      alert("loser");
      // Alert that they've lost
    }
    // If they win
    else if (currentWord = 
        // Alert that they've won
        alert("youwin!!!");
        wins++;
        // Add a win
  }
}

function gameBegin(){
  // Pick a word for this current game from some list
  currentWord = words[Math.floor(Math.random()* words.length)];
      console.log(word);
  
  let wordLength = word.length;

  // Loop (as long as i < wordLength) { correctGuess.push('_') }
    // [_, _, _, ....];
    // correctGuess.join(' '); (Show this on the page) // Array.join
  for (let i = 0; i < word.length; i++);{
    correctGuess.push("_");
    let correctGuess = [];
    correctGuess(array.join(''));

  };

    while (guessAttempts > 0 && correctGuess.join('') === currentWord) {
      listenToGuesses();
    }

    // Restart the game
};

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

    





  