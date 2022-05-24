// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//what character types?  loop and validate each, with atleast one requirement: lowercase, uppercase, numeric, and/or special characters
var characterNumber = window.prompt('How many characters would you like your password to be?') 
  while (characterNumber < 8) {
    characterNumber = window.prompt('How many characters would you like your password to be? (minimum 8 characters)')
  }
var lowerCase = window.confirm('Would you like to have a lowercase value? Click OK for yes');
var upperCase = window.confirm('Would you like to have an Uppercase value?  Click OK for yes');
var numberQuestion = window.confirm('Would you like to add a number?  Click OK for yes');
var specialCharacters = window.confirm('Would you like to use special characters?  Click OK for yes');

// ASCII character code constants for password generating
const Uppercase_char_codes = arrayFromLowToHigh(65, 90)
const Lowercase_char_codes = arrayFromLowToHigh(97, 122)
const Number_char_codes = arrayFromLowToHigh(48, 57)
const Symbol_char_codes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat (
  arrayFromLowToHigh(91, 96)
).concat (
  arrayFromLowToHigh(123, 126)
)

// Password Generator function
function generatePassword () {
  let charCodes = Lowercase_char_codes
    if (upperCase) charCodes = charCodes.concat(Uppercase_char_codes)
    if (lowerCase) charCodes = charCodes.concat(Lowercase_char_codes)
    if (numberQuestion) charCodes = charCodes.concat(Number_char_codes)
    if (specialCharacters) charCodes = charCodes.concat(Symbol_char_codes)
  
    const passwordCharacters = []
    for (let i = 0; i < characterNumber; i++) {
      const character = charCodes[Math.floor(Math.random() * charCodes.length)] 
      passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join('')
}

//Generate Array numbers:
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

console.log(typeof(characterNumber));
console.log(characterNumber);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate buton
generateBtn.addEventListener("click", writePassword);
