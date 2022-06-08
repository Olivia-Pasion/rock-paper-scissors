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

let throwing = false;
let computerSelect = 'rock';
let throwSelect = 'paper';
let outcome = 0;




// components

//score component

const gamesDisplay = document.getElementById('games-display');
const winsDisplay = document.getElementById('wins-display');
const drawsDisplay = document.getElementById('draws-display');
const lossesDisplay = document.getElementById('losses-display');
const rockDisplay = document.getElementById('rock-display');
const paperDisplay = document.getElementById('paper-display');
const scissorsDisplay = document.getElementById('scissors-display');

function scoreDisplay() {
    
    gamesDisplay.textContent = games;
    winsDisplay.textContent = wins;
    drawsDisplay.textContent = draws;
    lossesDisplay.textContent = losses;

    rockDisplay.textContent = rock; 
    paperDisplay.textContent = paper;
    scissorsDisplay.textContent = scissors;
}



//choose throw component

const chooseThrow = document.getElementById('choose-throw');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function showThrow() {
    if (throwing) {
        chooseThrow.classList.remove('hidden');
    } else {
        chooseThrow.classList.add('hidden');
    }
}

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

    displayAll();
    
    setTimeout(() => {
        throwing = true;
        displayAll();
    }, 3000);
}

// update view



    //throw events



//results component

const resultsSection = document.getElementById('results-section');
const playerDisplay = document.getElementById('player-display');
const outcomeDisplay = document.getElementById('outcome-display');
const outcomeImage = document.getElementById('outcomeImage');
const computerDisplay = document.getElementById('computer-display');

function displayResults() {
    if (!throwing) {
        resultsSection.classList.remove('hidden');
    } else {
        resultsSection.classList.add('hidden');
    }

    playerDisplay.src = 'assets/' + throwSelect + '.png';
    computerDisplay.src = 'assets/' + computerSelect + '.png';

    if (outcome === 1) {
        outcomeDisplay.textContent = 'Wins';
        outcomeImage.src = 'assets/win.png';

    } else if (outcome === -1) {
        outcomeDisplay.textContent = 'lose';
        outcomeImage.src = 'assets/lose.png';
    } else {
        outcomeDisplay.textContent = 'Draw';
        outcomeImage.src = 'assets/draw.png';
    }
}

   

// page load actions
function displayAll() {
    showThrow();
    scoreDisplay();
    displayResults();
}



