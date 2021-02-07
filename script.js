document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', handleClick);
    }
    startNewGame('addition')
});

function startNewGame(game) {
    let num = Math.floor(Math.random() * 25 + 1);
    let target = document.getElementById('operand1');
    target.textContent = num;
    num = Math.floor(Math.random() * 25 + 1);
    target = document.getElementById('operand2');
    target.textContent = num;
    target = document.getElementById('operator');
    switch (game) {
        case 'addition':
            target.textContent = '+';
            break;
        case 'subtract':
            target.textContent = '-';
            break;
        case 'multiply':
            target.textContent = '*';
            break;
        case 'division':
            target.textContent = '/';
            break;
    }
    target = document.getElementById('answer-box');
    target.value = "";
}

function handleClick(event) {
    let clicked = event.currentTarget.dataset.type;
    switch (clicked) {
        case 'addition':
        case 'subtract':
        case 'multiply':
        case 'division':
            startNewGame(clicked);
            break;
        case 'answer':
            evaluateAnswer();
            break;
    }
}

function evaluateAnswer() {

}