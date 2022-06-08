// import needed modules
import { getRandomItem, score } from './assets/utils.js';

// state
const hands = ['rock', 'paper', 'scissors'];
let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;

let rock = 0;
let paper = 0;
let scissors = 0;


let computerSelect = 'rock';
let throwSelect = 'paper';



// components

//score component

const gamesDisplay = document.getElementById('games-display');
const winsDisplay = document.getElementById('wins-display');
const drawsDisplay = document.getElementById('draws-display');
const lossesDisplay = document.getElementById('losses-display');

function scoreDisplay() {
    
    gamesDisplay.textContent = games;
    winsDisplay.textContent = wins;
    drawsDisplay.textContent = draws;
    lossesDisplay.textContent = losses;

}

//throw record component

const rockDisplay = document.getElementById('rock-display');
const paperDisplay = document.getElementById('paper-display');
const scissorsDisplay = document.getElementById('scissors-display');

function throwRecordDisplay() { 
    
    rockDisplay.textContent = rock; 
    paperDisplay.textContent = paper;
    scissorsDisplay.textContent = scissors;

    
}


//choose throw component

const chooseThrow = document.getElementById('choose-throw');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', () => {
    handleThrow('rock');
    
});

paperButton.addEventListener('click', () => {
    handleThrow('paper');
     
});

scissorsButton.addEventListener('click', () => {
    handleThrow('scissors');   
});

function handleThrow(throwSelect) {

    
    computerSelect = getRandomItem(hands);

    let gameEnd = score(throwSelect, computerSelect);

    if (gameEnd === 1) {
        wins++;
    } else if (gameEnd === 0) {
        draws++;
    } else if (gameEnd === -1) {
        losses++;
    }
    games++;
    
    if (throwSelect === 'rock') {
        rock++;
    } else if (throwSelect === 'paper') {
        paper++;
    } else if (throwSelect === 'scissors') {
        scissors++;
    }
    scoreDisplay();
    throwRecordDisplay();
}

// update view
scoreDisplay();
throwRecordDisplay();



    //throw events



//results component

const resultsSection = document.getElementById('results-section');
const playerDisplay = document.getElementById('player-display');
const outcomeDisplay = document.getElementById('outcome-display');
const computerDisplay = document.getElementById('computer-display');

    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions


