const selection = {
    player: '',
    ai: '',
}

const currentResult = {
    number: 0,
    wins: 0,
    loses: 0,
    draws: 0,
}

const btn = document.querySelector('button.start');
const choices = [...document.querySelectorAll('div.select img')];
let indexAi = 0;
const atmScore = document.querySelector('[data-summary="who-win"]');
const aiHand = document.querySelector('[data-summary="ai-choice"]');
const playerHand = document.querySelector('[data-summary="your-choice"]');
const numbers = document.querySelector('.numbers span');
const draws = document.querySelector('.draws span');
const wins = document.querySelector('.wins span');
const loses = document.querySelector('.loses span');

function playerChoose() {
    selection.player = this.dataset.option;
    choices.forEach(choice => choice.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 6px yellow';
}

function aiChoose() {
    indexAi = Math.floor(Math.random() * choices.length);
    return choices[indexAi].dataset.option;
}

//RESULT
function checkResult() {
    if (selection.player === selection.ai) {
        return 'DRAW';
    } else if ((selection.player === 'scissors' && selection.ai === 'paper') || (selection.player === 'paper' && selection.air === 'rock') || (selection.player === 'rock' && selection.ai === 'scissors')) {
        return 'PLAYER WON';
    } else {
        return 'AI WON';
    }
}

//ANNOUNCEMENT OF RESULTS
function displayResult() {
    aiHand.textContent = selection.ai;
    playerHand.textContent = selection.player;
    if (checkResult() === 'DRAW') {
        numbers.textContent = ++currentResult.number;
        draws.textContent = ++currentResult.draws;
    } else if (checkResult() === 'AI WON') {
        numbers.textContent = ++currentResult.number;
        loses.textContent = ++currentResult.loses;
    } else {
        numbers.textContent = ++currentResult.number;
        wins.textContent = ++currentResult.wins;
    }


}

//CLEANING CHOOSE 

function clean() {
    document.querySelector(`[data-option=${selection.player}]`).style.boxShadow = '';
    selection.ai = '';
    selection.player = '';
}
//CHECKING HAND 
function start() {
    if (!selection.player) {
        return alert('You have to choose');
    }
    selection.ai = aiChoose();
    atmScore.textContent = checkResult();
    displayResult();
    clean();
}

//PLAYER CHOOSE
choices.forEach(choice => choice.addEventListener('click', playerChoose));

//AI CHOOSE
btn.addEventListener('click', start);