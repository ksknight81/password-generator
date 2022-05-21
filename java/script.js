// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Length of password = var characterNumber

//what character types?  loop and validate each, with atleast one requirement: lowercase, uppercase, numeric, and/or special characters
var passwordQuestions = function() {
var characterNumber = window.prompt('How many characters would you like your password to be?');
var lowerCase = window.prompt('Would you like to have a lowercase value?  Enter Yes or No');
var upperCase = window.prompt('Would you like to have an Uppercase value?  Enter Yes or No');
var numberValue = window.prompt('Would you like to add a number?  Enter Yes or No');
var specialCharacters = window.prompt('Would you like to use special characters?  Enter Yes or No');

//validate proper values - where == yes or YES for each variable
characterNumber = characterNumber.toLowerCase();
lowerCase = lowerCase.toLowerCase();
upperCase = upperCase.toLowerCase();
numberValue = numberValue.toLowerCase();
specialCharacters = specialCharacters.toLowerCase();

//show values on console
console.log("how many characters? " + characterNumber)
console.log("Do i need lowercase? " + lowerCase)
console.log("Do i need Uppercase? " + upperCase)
console.log("Do i need a number? " + numberValue)
console.log("Do i need special characters? " + specialCharacters)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//randomize values
// if (numberValue === "yes")  {
 // Math.floor(Math.random() * 10);
 //console.log(numberValue)
// }

// Add event listener to generate buton
generateBtn.addEventListener("click", writePassword);

// Variables


// Start process

passwordQuestions();