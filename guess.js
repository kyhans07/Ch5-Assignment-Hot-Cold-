"use strict";

// global variables 
let randomNum = 0;
let tries = 0;
let bestScore = 1000000;

// helper function
const getRandomInt = (max = 100) => {
    let num = Math.random() * max;  // get a random number between 0 and max
    num = Math.ceil(num);           // round up to nearest integer
    return num;
};

// event handler functions
const guessClick = () => {
    const guess = parseInt(document.querySelector("#number").value);
    const messageLabel = document.querySelector("#message").value;


    let message = "";
    let color = "black";

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageLabel.textContent = "Please enter a number between 1 and 100.";
        messageLabel.style.color = "red";
        return;
    }

    tires++;
    const distance = Math.abs(guess - randomNum);



    switch (true){

        case (distance === 0):
            const lastWord = (tries === 1) ? "Try" : "Tries";
            message = `Perfect! You got it in ${tries} ${lastWord}!`;
            color = "green";
            updateBestScore();
            break;
        case (distance <= 5):
            message = "Hot (Within 5)"
            color = "red"
            break;
        case (distance <=10):
            message = "Warmer (Within 10)"
            color = "orange-red"
            break;
        case (distance <=20):
            message = "Warm (Within 20)"
            color = "Orange"
            break;
        case (distance <= 30):
            message = "Cold"
            color = "lightblue"
            break;
        case (distance <= 40 ):
            message = "Colder"
            color = "blue"
            break;
        case (distance >= 40 ):
            message = "Freezing"
            color = "Dark-blue"
            break;

    }

    messagelabel.style.color = color;
    messageLabel.textContent = message;

};

const playAgainClick = () => {
    randomNum = getRandomInt(10);
    tries = 0;
    document.querySelector("#number").value = "";
    document.querySelector("#message").textContent = "";
};

document.addEventListener("DOMContentLoaded", () => {
    playAgainClick(); // initial a new game

    document.querySelector("#guess").addEventListener(
        "click", guessClick);
    document.querySelector("#play_again").addEventListener(
        "click", playAgainClick);
});