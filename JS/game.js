// Variables

const infoText = document.getElementById('infoText');
const computerOption = document.getElementById('computerOption');
const playerOption = document.getElementById('playerOption');
const optionBtns = document.querySelectorAll('.options button');
const WINNING_COMBINATIONS = [
    ['rock', 'paper'],
    ['paper', 'scissor'],
    ['scissor', 'rock']
];

// Imports

import { previewPlayerOption } from "./player.js";
import { generateComputerOption } from './computer.js';

// Functions

const gameSequence = e => {
    const optionSelected = e.target.closest('[data-option]').getAttribute('data-option');
    checkTie(optionSelected);
}

const checkTie = player => {
    const computer = generateComputerOption();

    showOption(false, computer);

    if (player === computer) endGame(true);
    else {
        const winner = (checkWin(computer, player)) ? 'Player' : 'Computer';
        endGame(false, winner);
    }
}

const checkWin = (computer, player) => {
    return (WINNING_COMBINATIONS.some(combination => {
        return combination[0] === computer && combination[1] === player
    }));
}

const endGame = (isTie, winner = '') => {
    if (isTie) infoText.textContent = 'Tie!';
    else infoText.textContent = `${winner} Win!`;

    computerOption.classList.add('end');
    playerOption.classList.add('end');
    playAgain.classList.add('show');

    optionBtns.forEach(button => {
        button.removeEventListener('mouseenter', previewPlayerOption);
        button.removeEventListener('click', gameSequence);
    });
}

// Export

export const showOption = (target, option) => {
    if (target) playerOption.src = `./images/${option}.png`;
    else computerOption.src = `./images/${option}.png`;
}

export const startGame = () => {
    infoText.textContent = 'Select one of these options!';
    computerOption.src = './images/rock.png';
    playerOption.src = './images/rock.png';

    computerOption.classList.remove('end');
    playerOption.classList.remove('end');
    playAgain.classList.remove('show');

    optionBtns.forEach(button => {
        button.addEventListener('mouseenter', previewPlayerOption, false);
        button.addEventListener('click', gameSequence, false);
    });
}