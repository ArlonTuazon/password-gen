window.alert ("Generate password now!");


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

