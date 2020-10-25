//Start declaring variables
var generateBtn = document.querySelector("#generate");

var pwLength="";
var lowerval= "abcdefghijklmnopqrstuvwxyz";
var upperval= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberval= "0123456789";
var symbolval= "!@#$%^&*()_|}{[]:;?><,./-=+~`";    


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
          lowerval= confirm ("Do you want with a Lowercase Letter?");
          supperval = confirm ("Do you want with an Uppercase Letter?");
          numberval = confirm ("Do you want with Numbers?");
          hassymbolval = confirm ("Do you want with Symbols?");
      };

      if (lowerval){
          passwordCharacters +=lowerval;
         
      }
      if (upperval) {
          passwordCharacters += upperval;
          
      }
      if (numberval){
          passwordCharacters += numberval;
          
      }
      if (symbolval) {
          passwordCharacters += symbolval;
         
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
  
//function getLowerval () {
   // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
//}

//function getUpperval () {
    //return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}
//function getNumberval () {
  //  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
////}
//function getSymbolval () {
 //   var symbols = '!@#$%^&*(){}=<>/';
  //  return symbols[Math.floor(Math.random() * symbols.length)];
//}

