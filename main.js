// main.js

console.log("hello world!");

//set up array of symbols to be used on page 4
let symbols = ["!","@","#","$","%","^","&","*","?"]

function numberGen () {
    let result = '';
    for (let i = 0; i < 99; i++) {
        result += ((i+1) + ' - ' + symbols[i % symbols.length] + '<br>');
    }
    return result
}

const shuffleSymbols = symbols => {
    for (let i = symbols.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = symbols[i];
        symbols[i] = symbols[j];
        symbols[j] = temp;
        console.log(symbols)
    }
    return symbols;
};

//let symbolGen = numberGen()

function cardOne() {
    symbols = shuffleSymbols(symbols);
    document.getElementById('header-text').innerHTML = "I can read your mind.";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("subtext").style.visibility = "hidden";
    document.getElementById("back-button").style.visibility = "hidden";
    document.getElementById("go-restart-button").innerHTML = "GO";
    document.getElementById("go-restart-button").onclick = function() {cardTwo()};
}

function cardTwo() {
    document.getElementById('header-text').innerHTML = "Pick a number from 1 - 99.";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardThree()};
    document.getElementById("subtext").style.visibility = "visible";
    document.getElementById("subtext").innerHTML = "Click next when you have your number.";
    document.getElementById("back-button").onclick = function() {cardOne()};
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardThree() {
    document.getElementById('header-text').innerHTML = "Add both digits together to get a new number.";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardFour()};
    document.getElementById("subtext").style.visibility = "visible";
    document.getElementById("subtext").innerHTML = "Ex: 14 is 1 + 4 = 5 | Click next to proceed.";
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("back-button").onclick = function() {cardTwo()};
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardFour() {
    document.getElementById('header-text').innerHTML = "Subtract your new number from the original number.";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardFive()};
    document.getElementById("subtext").style.visibility = "visible";
    document.getElementById("subtext").innerHTML = "Ex: 14 - 5 = 9 | Click next to proceed.";
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("back-button").onclick = function() {cardThree()};
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardFive() {
    document.getElementById('header-text').innerHTML = numberGen();
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").innerHTML = "REVEAL";
    document.getElementById("next").onclick = function() {cardSix()};
    document.getElementById("subtext").style.visibility = "visible";
    document.getElementById("subtext").innerHTML = "Click reveal for your answer.";
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("back-button").onclick = function() {cardFour()};
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardSix() {
    document.getElementById('header-text').innerHTML = ('Your answer is:' + '<br>'+ '<br>' + symbols[8]);
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("subtext").style.visibility = "hidden";
    document.getElementById("subtext").style.display = "";
    document.getElementById("back-button").style.visibility = "visible";
    document.getElementById("back-button").onclick = function() {cardFive()};
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

cardOne();