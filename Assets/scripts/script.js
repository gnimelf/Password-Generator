// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var charsTypesToUse = [];
var password = [];
var lastType = "";

// Add number array
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '9'];

// Add alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Add special char array
var special = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "]", "^", "~", "*", "?", ":", '"', "+", ",", "'", "-", ".", "/", ";", "<", "=", ">", "[", "\\", "]", "_", "`", "{", "|", "}"];

// function to get passlength
function getlength() {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter the length of the password");
    if (passwordLength === null) {
      break;
    }
  }
  return;
}
// function to chose weather or not to use lower case
function typeToUse(caseType) {

  // Check if user click Cancel
  if (passwordLength === null) {
    return null;
  }

  var toUse = 0;
  toUse = prompt("Use " + caseType + " characters? y for Yes or n for No");

  // Check if user click Cancel
  if (toUse == null) {
    return null;
  }

  console.log(toUse);

  // Check if value entered is valid
  while ((toUse != "n") && (toUse != "y")) {
    toUse = prompt("Use " + caseType + " characters? y for Yes or n for No");
  }

  if (caseType === "lowercase" && toUse === "y") {
    charsTypesToUse.push(caseType);

  } else if (caseType === "uppercase" && toUse === "y") {
    charsTypesToUse.push(caseType);

  } else if (caseType === "number" && toUse === "y") {
    charsTypesToUse.push(caseType);

  } else if (caseType === "special" && toUse === "y") {
    charsTypesToUse.push(caseType);

  }
  return;
}

// create generatePassword function
function generatePassword() {
  // reset password
  passwordLength = 0;
  password = [];
  charsTypesToUse = [];
  var lastType = "";

  // clear password box
  passwordField = "";

  // get password length
  getlength();
  var value = typeToUse("lowercase");
  if (value === null) {
    return;
  }
  value = typeToUse("uppercase");
  if (value === null) {
    return;
  }
  value = typeToUse("number");
  if (value === null) {
    return;
  }
  value = typeToUse("special");
  if (value === null) {
    return;
  }

  // for loop - loop passwordLength times
  for (i = 0; i < passwordLength; i++) {
    var randomTypeIndex = Math.floor(Math.random() * charsTypesToUse.length);
    var randomType = charsTypesToUse[randomTypeIndex];

    while (randomType === lastType && charsTypesToUse > 1) {
      randomTypeIndex = Math.floor(Math.random() * charsTypesToUse.length);
      randomType = charsTypesToUse[randomTypeIndex];
    }
    
    console.log(randomType);

    // Grab a random lowercase letter
    if (randomType === "lowercase"  ) {
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      password.push(alphabet[randomIndex]);
    }

    // Grab a random uppercase letter
    if (randomType === "uppercase" ) {
      var randomIndex = Math.floor(Math.random() * alphabet.length);
      password.push(alphabet[randomIndex].toUpperCase());
    }

    // Grab a random number
    if (randomType === "number" ) {
      var randomIndex = Math.floor(Math.random() * number.length);
      password.push(number[randomIndex]);
    }

    // Grab a random special char
    if (randomType === "special" ) {
      var randomIndex = Math.floor(Math.random() * special.length);
      password.push(special[randomIndex]);
    }
  }
  lastType = randomType;
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


