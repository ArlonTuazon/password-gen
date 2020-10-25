//Start declaring variables
var generateBtn = document.querySelector("#generate");

var pwLength;
var Lowerval;
var Upperval;
var Numberval;
var Symbolval;    

var inputVal = true;

//password input here

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// Generate password function
function generatePassword() {
    userPassword = "";
    passwordCharacters = "";

    pwLength = prompt("Enter Length of Password Length. Should be between 8 and 128 only.");
     if (!pwLength) {
         alert ("Please enter a number");
      }
       else if (pwLength < 8 || pwLength > 128) {
         pwLength = prompt("You must choose between 8 and 128");     
      }
      else {
          Lowerval= confirm ("Do you want with a Lowercase Letter?");
          Upperval = confirm ("Do you want with an Uppercase Letter?");
          Numberval = confirm ("Do you want with Numbers?");
          Symbolval = confirm ("Do you want with Symbols?");
      };

      if (Lowerval){
          getLowerval();
          console.log (getLowerval());
      }
      if (Upperval) {
          getUpperval();
          console.log (getUpperval());
      }
      if (Numberval){
          getNumberval();
          console.log (getNumberval());
      }
      if (Symbolval) {
          getSymbolval();
          console.log (getSymbolval());
      }
      else 
           alert("You must choose a criteria!");
      for (var i = 0; i < pwLength; i++) {
        userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
    // console.log(userPassword);
    return userPassword;
      
}
   generateBtn.addEventListener("click", writePassword);

//Function for Generator
  
function getLowerval () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
}

function getUpperval () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumberval () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbolval () {
    var symbols = '!@#$%^&*(){}=<>/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

