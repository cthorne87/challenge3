// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//criteria arrays
var special = ["?", "@", "[", "]", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "!", "#", "$", "%", "&", ";", "<", "=", ">", "^", "_", "`", "{", "|", "}", "~", "?", "@", "[", "]", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "!", "#", "$", "%", "&", ";", "<", "=", ">", "^", "_", "`", "{", "|", "}", "~", "?", "@", "[", "]", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "!", "#", "$", "%", "&", ";", "<", "=", ">", "^", "_", "`", "{", "|", "}", "~", "?", "@", "[", "]", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "!", "#", "$", "%", "&", ";", "<", "=", ">", "^", "_", "`", "{", "|", "}", "~", "?", "@", "[", "]", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "!", "#", "$", "%", "&", ";", "<", "=", ">", "^", "_", "`", "{", "|", "}", "~"]
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {
  var promptLength = window.prompt("How many characters would you like your password to be? Choose between 8 and 128");
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("Invalid response. Try again.");
  } else if (promptLength > 8 || promptLength < 128) {
    var confirmLower = window.confirm("Will this contain Lowercase letters?");
    var confirmUpper = window.confirm("Will this contain Uppercase letters?");
    var confirmNumber = window.confirm("Will this contain numbers?");
    var confirmSpecial = window.confirm("Will this contain special characters?");
  }
//all criteria
  if (confirmLower && confirmSpecial && confirmNumber && confirmUpper) {
    criteria = special.concat(number, lower, upper);
  }
//3 criteria
  else if (confirmLower && confirmSpecial && confirmNumber) {
    criteria = special.concat(number, lower);
  }
  else if (confirmLower && confirmSpecial && confirmUpper) {
    criteria = special.concat(lower, upper);
  }
  else if (confirmUpper && confirmSpecial && confirmNumber) {
    criteria = upper.concat(number, special);
  }
  else if (confirmUpper && confirmLower, confirmNumber) {
    criteria = upper.concat(lower, number);
  }
//2 criteria
  else if (confirmLower && confirmUpper) {
    criteria = lower.concat(upper);
  }
  else if (confirmLower && confirmNumber) {
    criteria = lower.concat(number);
  }
  else if (confirmLower && confirmSpecial) {
   criteria = lower.concat(special);
  }
  else if (confirmUpper && confirmNumber) {
    criteria = upper.concat(number);
  }
  else if (confirmUpper && confirmSpecial) {
    criteria = upper.concat(special);
  }
  else if (confirmSpecial && confirmNumber){
    criteria = special.concat(number);
  }
//1 criteria
  else if (confirmLower) {
    criteria = lower;
  }
  else if (confirmNumber) {
    criteria = number;
  }
  else if (confirmSpecial) {
    criteria = special;
  }
  else if (confirmUpper) {
    criteria = upper;
  }

  // function to shuffle array
  function criteriaRandomized(array) {
    var index1 = array.length, tempVal, index2;
  while (0 !== index1) {
    index2 = Math.floor(Math.random() * index1);
    index1 -= 1;
    tempVal = array[index1];
    array[index1] = array[index2];
    array[index2] = tempVal;
  }
  return array; 
  }

  //create password
  criteriaRandomized(criteria);
  criteria.length = promptLength;
  criteria = criteria.join("");
return criteria;
}
