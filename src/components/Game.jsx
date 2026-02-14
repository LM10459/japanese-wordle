import React, { useState, useEffect } from 'react';

const Game = () => {
    const [word, setWord] = useState('');
    const [guess, setGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    const correctWord = 'さくらんぼ'; // The word to guess

    useEffect(() => {
        if (guesses.length === 5) {
            setIsGameOver(true);
        }
    }, [guesses]);

    const handleGuess = () => {
        if (guess.length === correctWord.length) {
            setGuesses([...guesses, guess]);
            setGuess('');
        } else {
            alert('Please enter a valid guess of the correct length.');
        }
    };

    return (
        <div>
            <h1>Japanese Wordle</h1>
            <div>
                <input type='text' value={guess} onChange={(e) => setGuess(e.target.value)} />
                <button onClick={handleGuess} disabled={isGameOver}>Guess</button>
            </div>
            <div>
                {guesses.map((g, index) => (
                    <div key={index}>{g} {g === correctWord ? '(Correct!)' : ''}</div>
                ))}
            </div>
            {isGameOver && <h2>Game Over! The correct word was {correctWord}.</h2>}
        </div>
    );
};

export default Game;
