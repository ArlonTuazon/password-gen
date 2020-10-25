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
function generatePassword() {
    userPassword = "";
    passwordCharacters = "";

// Generate password function
function generatePassword() {
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

      if (!Lowerval && !Upperval && !Numberval && !Symbolval) {
        inputVal = alert("You must choose a criteria!");

    }
      else if (inputVal == true) {
        getLowerval ();
        getUpperval();
        getSymbolval;
        getNumberval();
        
      }
    var password = [];
    for (var i = 0; i < pwLength; i++) {
        var pickChoices = inputVal[Math.floor(Math.random() * inputVal.length)];
        password.push(pickChoices);
    }
    //var pw = password.join("");
    //UserInput(pw);
    //return pw;
}
function UserInput(pw) {
     document.getElementById('result').innerHTML = pw;
}



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

