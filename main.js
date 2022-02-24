// main.js

console.log("hello world!");

const symbols = ["!","@","#","$","%","^","&","*","?"]

// for (let i = 0; i < 99; i++) {
//     console.log((i+1) + ' - ' + symbols[i % symbols.length])
// }

function numberGen () {
    let result = '';
    for (let i = 0; i < 99; i++) {
    result += ((i+1) + ' - ' + symbols[i % symbols.length]);
}
return result
}

//let fun = () => {}

let symbolGen = numberGen()

console.log(symbolGen)

function cardOne() {
    document.getElementById('header-text').innerHTML = "I can read your mind.";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("subtext").style.visibility = "hidden";
    document.getElementById("go-restart-button").innerHTML = "GO";
    document.getElementById("go-restart-button").onclick = function() {cardTwo()};
}

function cardTwo() {
    document.getElementById('header-text').innerHTML = "Pick a number from 1-99.";
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardThree()};
    document.getElementById("subtext").style.visibility = "visible";
    document.getElementById("subtext").innerHTML = "Click next when you have your number.";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardThree() {
    document.getElementById('header-text').innerHTML = "Add both digits together to get a new number.";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardFour()};
    document.getElementById("subtext").innerHTML = "Ex: 14 is 1+4=5 | Click next to proceed.";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardFour() {
    document.getElementById('header-text').innerHTML = "Subtract your new number from the original number.";
    document.getElementById("next").innerHTML = "NEXT";
    document.getElementById("next").onclick = function() {cardFive()};
    document.getElementById("subtext").innerHTML = "Ex: 14-5=9 | Click next to proceed.";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardFive() {
    document.getElementById('header-text').innerHTML = symbolGen;
    document.getElementById("next").innerHTML = "REVEAL";
    document.getElementById("next").onclick = function() {cardSix()};
    document.getElementById("subtext").innerHTML = "Click reveal for your answer.";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

function cardSix() {
    document.getElementById('header-text').innerHTML = "Your symbol is: + (symbols[9])";
    document.getElementById("next").style.visibility = "hidden";
    //document.getElementById("next").innerHTML = "none";
    //document.getElementById("next").onclick = function() {cardFive()};
    document.getElementById("subtext").style.visibility = "hidden";
    document.getElementById("subtext").style.display = "";
    document.getElementById("go-restart-button").innerHTML = "RESTART";
    document.getElementById("go-restart-button").onclick = function() {cardOne()};
}

cardOne();

// cardone = {headertext:"I can read your mind", nextbutton: false, subtext: false, gobutton: true};
// cardtwo = {headertext:"Pick a number from 1-99", nextbutton: true, subtext: "Click next when you have your number", revertbutton: true};
// cardthree = {headertext:"Add both digits together to get a new number.", nextbutton: true, subtext: "Ex: 14 is 1+4=5 Click next to proceed.", revertbutton: true};
// cardfour = {headertext:"Subtract your new number from the original number", nextbutton: true, subtext: "Ex: 14-5=9 Click next to proceed.", revertbutton: true};
// cardfive = {headertext:"I can read your mind", nextbutton: false, subtext: false, revertbutton: true};
// cardsix = {headertext:"I can read your mind", nextbutton: false, subtext: false, revertbutton: true};




















// function getData(cardData) {
//     console.log(cardData);
// }

// //function getData()

// fetch("cards.json")
//     .then(response => {
//     return response.json();
//     })
//     .then(jsondata => getData(jsondata));
