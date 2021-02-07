document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', handleClick);
    }
    // allow the use of Enter key instead of click on submit button
    let answerBox = document.getElementById('answer-box');
    answerBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleAnswer();
        }
    });
    startNewGame('+')
});

function getGameElements() {
    let operand1 = document.getElementById('operand1');
    let operator = document.getElementById('operator');
    let operand2 = document.getElementById('operand2');
    let answer = document.getElementById('answer-box');
    let counterC = document.getElementById('counter-correct');
    let counterIC = document.getElementById('counter-incorrect');
    return [operand1, operator, operand2, answer, counterC, counterIC];
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
    gameElements[3].focus();
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
            handleAnswer();
            break;
    }
}

function handleAnswer() {
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
        let score = parseInt(gameElements[4].textContent);
        gameElements[4].textContent = ++score;
    } else {
        alert(`Wrong, correct answer is ${result}`);
        let score = parseInt(gameElements[5].textContent);
        gameElements[5].textContent = ++score;
    }
    startNewGame(operator);
}