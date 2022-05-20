// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Length of password

//what character types?  loop and validate each, with atleast one requirement: lowercase, uppercase, numeric, and/or special characters
var passwordQuestions = function() {
var characterNumber = window.prompt('How many characters would you like your password to be');
var lowerCase = window.prompt('Would you like to have a lowercase value?');
var upperCase = window.prompt('Would you like to have an Uppercase value?');
var numberValue = window.prompt('Would you like to add a number?');
var specialCharacters = window.prompt('Would you like to use special characters?');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//display password in prompt

// Variables


// Start process

passwordGenerator();