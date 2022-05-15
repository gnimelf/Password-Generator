// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add number array
var number = [0,1,2,3,4,5,6,7,9];

// Add alphabet array
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Add special char array
var special = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "]", "^","~", "*", "?", ":"];

// function to get passlength

// create generatePassword function
  // for loop to count length
      // for loop to randomly choose a char type
         // for loop to choose a char from the array
         // add chosen char to password array


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
