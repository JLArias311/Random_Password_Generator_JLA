
// Array of numeric characters to be included in password
// Splitting strings into sub arrays
var stringNumbers = "0123456789";
// The "" in the split function separates each letter
var numericCharacters = stringNumbers.split("");


// Array of lowercase characters to be included in password
var stringLower = "abcdefghijklmnopqrstuvwxyz";
var lowerCasedCharacters = stringLower.split("");

// Array of uppercase characters to be included in password

var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCasedCharacters = stringUpper.split("");

// Array of special characters to be included in password
// Not condensing due to symbols with double characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];



// generateBtn is grabbing the button with an id of #generate
var generateBtn = document.querySelector("#generate");

// addEventListener is giving generateButton(Our HTML button) a reaction to a click of the button
// When button is pressed it initiates the writePassword function
generateBtn.addEventListener("click", writePassword);


// Write password for the #password input
function writePassword() {

  // first gather criteria

  // Gathering password length
  var pwLength = prompt("How many charcters would you like your password to contain?");
  // The While loop condensed an if and else statement into one loop
  while (pwLength < 7 || pwLength > 129) {
    pwLength = prompt("Enter a number between 8 & 128");
  }
  // chosenLength will hold the password length value input by the user
  var chosenLength = pwLength;


  // Gethering types of characters 
  // chosenPassword will hold an array of chosen characters
  var specialChar = confirm("Click Ok to confirm special characters.");
  if (specialChar === true) {
    chosenCharacters = specialCharacters;
    console.log(chosenCharacters);
  }
  // Creating an empty array to define chosenCaracters in the case that no value is given to it.
  else {
    chosenCharacters = [""];
  }
  // Chosen Password will concatenate chosen arrays
  var numericChar = confirm("Click Ok to confirm numeric characters.");
  if (numericChar === true) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
    console.log(chosenCharacters);
  }

  var lowerChar = confirm("Click Ok to confirm lowercase characters.");
  if (lowerChar === true) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
    console.log(chosenCharacters);
  }

  var upperChar = confirm("Click Ok to confirm uppercase characters.");
  if (upperChar === true) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
    console.log(chosenCharacters);
  }

  password(chosenLength, chosenCharacters);

  function password(length, characters) {
    var pwd = "";
    // Creating a loop to go through the chosenPassword array the decided number of times
    for (var i = 0; i < length; i++) {
      // Each loop will select a randomly selected character from our array with our chosen character criteria
      pwd = pwd.concat(characters[Math.floor(Math.random() * characters.length)]);
    }

    return pwd;
  }

  //   Criteria gathered

  // Final step: Generate Password.
  // password parameter length has to = chosenLength
  // password parameter characters has to = the array of chosen characters 


  var passwordText = document.querySelector("#password");

  passwordText.value = password(chosenLength, chosenCharacters);
}
