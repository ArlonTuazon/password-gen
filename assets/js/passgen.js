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
          var haslowerval= confirm ("Do you want with a Lowercase Letter?");
          var hasupperval = confirm ("Do you want with an Uppercase Letter?");
          var hasnumberval = confirm ("Do you want with Numbers?");
          var hassymbolval = confirm ("Do you want with Symbols?");
      };

      if (haslowerval){
          passwordCharacters += lowerval;
         
      }
      if (hasupperval) {
          passwordCharacters += upperval;
          
      }
      if (hasnumberval){
          passwordCharacters += numberval;
          
      }
      if (hassymbolval) {
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


