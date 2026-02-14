// gameUtils.js

// Function to validate if a string contains only Hiragana characters
function isHiragana(str) {
    const hiraganaRegex = /^[\u3040-\u309F]+$/;
    return hiraganaRegex.test(str);
}

// Function to check if the guessed word is valid according to game rules
function isValidGuess(guess, wordList) {
    return wordList.includes(guess);
}

// Function to evaluate the guess against the answer
function evaluateGuess(guess, answer) {
    const result = [];

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
            result.push('correct');
        } else if (answer.includes(guess[i])) {
            result.push('present');
        } else {
            result.push('absent');
        }
    }

    return result;
}

// Exporting the utility functions
module.exports = {
    isHiragana,
    isValidGuess,
    evaluateGuess
};