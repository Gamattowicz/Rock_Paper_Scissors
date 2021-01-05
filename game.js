//PLAYER CHOOSE
const selection = {
    player = '',
    ai = '',
}

const btn = document.querySelector('button.start');
const choices = [...document.querySelectorAll('div.select img')];

function playerChoose() {
    selection.player = this.dataset.option;
    choices.forEach(choice => choice.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 6px yellow';
}

choices.forEach(choice => choice.addEventListener('click', playerChoose));