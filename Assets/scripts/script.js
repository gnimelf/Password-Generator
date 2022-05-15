// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add number array
// Add alphabet array
// Add special char array

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
