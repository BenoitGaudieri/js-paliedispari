// Palindromo

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

// Logic
var paliStart = document.getElementById("button-pali");
var paliDiv = document.getElementById("pali-result");
paliStart.addEventListener("click", function() {
    var str = prompt("Parola");
    var paliOutput = "";
    if (palindromoCheck(str) == true) {
        paliOutput = `<span class="gradient--green"> ${str} è un palindromo`;
    } else {
        paliOutput = `<span class="gradient--red">${str} non è un palindromo</span>`;
    }
    paliDiv.innerHTML = paliOutput;
});

// Pari o dispari

/**
 * Random gen
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

// Logic

var pdStart = document.getElementById("button-pd");
var pdDiv = document.getElementById("pd-result");
pdStart.addEventListener("click", function() {
    var pdOutput = "";
    var playerNum = parseInt(prompt("inserisci numero da 1 a 5"));
    while (playerNum > 5 || playerNum <= 0 || isNaN(playerNum)) {
        playerNum = parseInt(prompt("per favore inserisci un numero da 1 a 5"));
    }
    console.log(playerNum);

    var playerChoise = prompt("scegli pari o dispari");
    var pc = getRandomInt(5);
    while (playerChoise != ("pari" || "dispari")) {
        playerChoise = prompt("per favore scegli solo tra pari o dispari");
    }
    if (pariDispari(playerNum + pc) == playerChoise) {
        pdOutput = `<span class="gradient--green p--set-uppercase"> hai vinto!</span>`;
    } else {
        pdOutput = `<span class="gradient--red"> hai perso</span>`;
    }

    pdDiv.innerHTML = pdOutput;
});
