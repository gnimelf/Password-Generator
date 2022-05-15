// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var passwordType = [];


// Add number array
var number = [0, 1, 2, 3, 4, 5, 6, 7, 9];

// Add alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Add special char array
var special = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "]", "^", "~", "*", "?", ":"];

// function to get passlength
function getlength() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter the length of the password");
  }
  return;
}

// function to chose weather or not to use lower case
function useCase(caseType) {

  var useCase = prompt("Use " + caseType + "case charaters? y for Yes or n for No");
  while ((useCase != "n") && (useCase != "y")) {
    userlower = prompt("Use " + caseType + "case charaters? y for Yes or n for No");
  }
  if (caseType === "lower" && useCase === "y") {
    passwordType.push("lower");
    console.log(passwordType);  // Testing
  } else if (caseType === "upper" && useCase === "y") {
    passwordType.push("upper");
    console.log(passwordType);  // Testing
  }
}

// create generatePassword function
function generatePassword() {
  // get password length
  getlength();

  useCase("lower");
  useCase("upper");

  // for loop to count length

  // for loop to randomly choose a char type
  // for loop to choose a char from the array
  // add chosen char to password array

  return passwordLength; //Testing
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
