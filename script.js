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
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
    switch (game) {
        case '+':
            break;
        case '-':
            if (num2 > num1) {
                [num1, num2] = [num2, num1];
            }
            break;
        case '*':
            break;
        case '/':
            num1 = num1 * num2;
            break;
        default:
            game = '?';
    }
    gameElements[0].textContent = num1;
    gameElements[1].textContent = game;
    gameElements[2].textContent = num2;
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
        default:
            alert(`Unknown game type ${clicked}`);
            throw `Unknown game type ${clicked}, aborting!`;
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
        default:
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}, aborting!`;
    }
    if (answer === result) {
        alert("Hey! You got it right! :D");
        let score = parseInt(gameElements[4].textContent);
        gameElements[4].textContent = ++score;
    } else {
        alert(`Awwww...you answered ${answer}. The correct answer was ${result}!`);
        let score = parseInt(gameElements[5].textContent);
        gameElements[5].textContent = ++score;
    }
    startNewGame(operator);
}