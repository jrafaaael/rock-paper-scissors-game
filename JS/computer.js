// Variables

const OPTIONS = ['rock', 'paper', 'scissor'];

// Functions

const generateRandomNumber = () => {
    return Math.floor(Math.random() * OPTIONS.length);
}

// Export

export const generateComputerOption = () => {
    return OPTIONS[generateRandomNumber()];
}