/**
 * Palindromo checker
 */
function palindromoCheck(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (reverse == str) {
        return true;
    }
    return false;
}

var str = prompt("Parola");
if (palindromoCheck(str) == true) {
    console.log(`${str} è un palindromo`);
} else {
    console.log("Non è un palindromo");
}

// Seconda parte
/**
 * Random gen max only
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
/**
 * Pari o dispari
 */
function pariDispari(num) {
    if (num % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

var playerNum = parseInt(prompt("inserisci numero"));
var playerChoise = prompt("scegli pari o dispari");
var pc = getRandomInt(10);

if (pariDispari(playerNum + pc) == playerChoise) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}
