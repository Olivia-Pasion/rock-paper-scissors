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
let computerSelect = '';

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
        
        chooseThrow.classList.add('hidden');
    } else {
        chooseThrow.classList.remove('hidden');
        
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
    throwing = true;
    
    
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
    playerDisplay.src = './assets/images/' + throwSelect + '.png';
    computerDisplay.src = './assets/images/' + computerSelect + '.png';
    gameFinal = gameEnd;
    displayAll();
  
    setTimeout(() => {
        throwing = false;  
        displayAll();
         
    }, 3000);
    
   
}

// update view



    //throw events



//results component

const resultsSection = document.getElementById('results-section');
const playerDisplay = document.getElementById('player-image');
const outcomeDisplay = document.getElementById('outcome-image');
const outcomeImage = document.getElementById('outcome-image');
const computerDisplay = document.getElementById('computer-image');
let gameFinal;

function displayResults(gameEnd) {
    if (!throwing) {
        resultsSection.classList.add('hidden');
    } else {
        resultsSection.classList.remove('hidden');
    }


    
    if (gameEnd === 1) {
        outcomeDisplay.textContent = 'Wins';
        outcomeImage.src = './assets/images/winner.png';

    } else if (gameEnd === -1) {
        outcomeDisplay.textContent = 'lose';
        outcomeImage.src = './assets/images/lose.png';
    } else {
        outcomeDisplay.textContent = 'Draw';
        outcomeImage.src = './assets/images/draw.png';
    }
    
}

   

// page load actions


function displayAll() {
    showThrow();
    scoreDisplay();
    displayResults(gameFinal);
}


displayAll();
