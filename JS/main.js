// Variables

const playAgain = document.getElementById('playAgain');

// Import

import { startGame } from './game.js';

// Code

playAgain.addEventListener('click', startGame, false);

startGame();