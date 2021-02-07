document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', handleClick);
    }
    startNewGame('+')
});

function getGameElements() {
    let operand1 = document.getElementById('operand1');
    let operator = document.getElementById('operator');
    let operand2 = document.getElementById('operand2');
    let answer = document.getElementById('answer-box');
    return [operand1, operator, operand2, answer];
}

function startNewGame(game) {
    let gameElements = getGameElements();
    gameElements[0].textContent = Math.floor(Math.random() * 25 + 1);
    switch (game) {
        case '+':
        case '-':
        case '*':
        case '/':
            gameElements[1].textContent = game;
            break;
        default:
            gameElements[1].textContent = '?';
    }
    gameElements[2].textContent = Math.floor(Math.random() * 25 + 1);
    gameElements[3].value = "";
}

function handleClick(event) {
    let clicked = event.currentTarget.dataset.type;
    switch (clicked) {
        case 'addition':
            startNewGame('+');
            break;
        case 'subtract':
            startNewGame('-');
            break;
        case 'multiply':
            startNewGame('*');
            break;
        case 'division':
            startNewGame('/');
            break;
        case 'answer':
            evaluateAnswer();
            break;
    }
}

function evaluateAnswer() {
    let gameElements = getGameElements();
    let num1 = parseInt(gameElements[0].textContent);
    let operator = gameElements[1].textContent;
    let num2 = parseInt(gameElements[2].textContent);
    let answer = parseInt(gameElements[3].value);
    let isCorrect = false;
    let result = null;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    if (answer === result) {
        alert("Correct!");
        updateCounter('counter-correct');
    } else {
        alert(`Wrong, correct answer is ${result}`);
        updateCounter('counter-incorrect');
    }
    startNewGame(operator);
}

function updateCounter(targetCounter) {
    let counter = document.getElementById(targetCounter);
    let score = parseInt(counter.textContent);
    counter.textContent = ++score;
}