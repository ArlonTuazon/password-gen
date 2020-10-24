//window.alert ("Generate password now!");


var pwLength;
var getLowerval;
var getUpperval;
var getNumberval;
var getSymbolval;    


    
var get = document.querySelector("#generate");
get.addEventListener ("click", function () {
    pw = generatePassword();
    document.getElementById("result")=pw;
});
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
          getLowerval = confirm ("Do you want with a Lowercase Letter?");
          getUpperval = confirm ("Do you want with an Uppercase Leter");
          getNumberval = confirm ("Dow want with Numbers?");
          getSymbolval = confirm ("Do you want with Symbols?");
      };

      if (!getLowerval && !getUpperval && !getNumberval && !getSymbolval) {
        choices = alert("You must choose a criteria!");

    }
    var password = [];
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var pw = password.join("");
    UserInput(pw);
    return pw;
}
function UserInput(pw) {
    document.getElementById("result").innerText = pw;

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

