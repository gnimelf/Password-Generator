// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var charsTypesToUse = [];
var password = [];

// Add number array
var number = [0, 1, 2, 3, 4, 5, 6, 7, 9];

// Add alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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

  var toUse = prompt("Use " + caseType + " characters? y for Yes or n for No");
  while ((toUse != "n") && (toUse != "y")) {
    toUse = prompt("Use " + caseType + " characters? y for Yes or n for No");
  }
  if (caseType === "lowercase" && toUse === "y") {
    charsTypesToUse.push(caseType);
    console.log(charsTypesToUse);  // Testing
  } else if (caseType === "uppercase" && toUse === "y") {
    charsTypesToUse.push(caseType);
    console.log(charsTypesToUse);  // Testing
  } else if (caseType === "numbers" && toUse === "y") {
    charsTypesToUse.push(caseType);
    console.log(charsTypesToUse);  // Testing
  } else if (caseType === "special" && toUse === "y") {
    charsTypesToUse.push(caseType);
    console.log(charsTypesToUse);  // Testing
  }
  return;
}

// create generatePassword function
function generatePassword() {
  // reset password
  passwordLength = 0;
  password = [];
  
  // clear password box
  passwordField = "";

  // get password length
  getlength();
  useCase("lowercase");
  useCase("uppercase");
  useCase("number");
  useCase("special");

  
  // for loop - loop passwordLength times
  for (i = 0; i < passwordLength; i++) {
    var randomTypeIndex = Math.floor(Math.random() * charsTypesToUse.length)
    var randomType = charsTypesToUse[randomTypeIndex];

    // Grab a random lowercase letter
    if (randomType === "lowercase") {
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      password.push(alphabet[randomIndex]);
    }

    // Grab a random uppercase letter
    if (randomType === "uppercase") {
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      password.push(alphabet[randomIndex].toUpperCase());
    }

    // Grab a random number
    if (randomType === "number") {
      var randomIndex = Math.floor(Math.random() * number.length);
      password.push(number[randomIndex]);
    }

    // Grab a random special char
    if (randomType === "special") {
      var randomIndex = Math.floor(Math.random() * special.length);
      password.push(special[randomIndex]);
    }
    
  }
  

  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
