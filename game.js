const selection = {
    player: '',
    ai: '',
}

const btn = document.querySelector('button.start');
const choices = [...document.querySelectorAll('div.select img')];
let indexAi = 0;


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
        return 'Draw';
    } else if ((selection.player === 'scissors' && selection.ai === 'paper') || (selection.player === 'paper' && selection.air === 'rock') || (selection.player === 'rock' && selection.ai === 'scissors')) {
        return 'Player won';
    } else {
        return 'AI won';
    }

}

//CHECKING HAND 
function start() {
    if (!selection.player) {
        return alert('You have to choose');
    }
    selection.ai = aiChoose();
    const result = checkResult();
    console.log(result);
}

//PLAYER CHOOSE
choices.forEach(choice => choice.addEventListener('click', playerChoose));

//AI CHOOSE
btn.addEventListener('click', start);