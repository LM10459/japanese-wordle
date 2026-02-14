import React, { useState, useEffect } from 'react';

const Game = () => {
    const [guesses, setGuesses] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [gameStatus, setGameStatus] = useState(''); // 'win', 'lose', or ''
    const [currentGuess, setCurrentGuess] = useState('');
    const correctWord = 'APPLE'; // Example correct word for the game

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            submitGuess();
        } else if (event.key === 'Backspace') {
            setCurrentGuess(currentGuess.slice(0, -1));
        } else if (/^[A-Z]$/.test(event.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(currentGuess + event.key);
            }
        }
    };

    const submitGuess = () => {
        if (currentGuess.length !== 5 || attempts >= 6) return;

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);
        setAttempts(attempts + 1);
        evaluateGuess(currentGuess);
        setCurrentGuess(''); // Reset current guess
    };

    const evaluateGuess = (guess) => {
        if (guess === correctWord) {
            setGameStatus('win');
        } else if (attempts === 5) {
            setGameStatus('lose');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentGuess, attempts]);

    return (
        <div>
            <h1>Wordle Game</h1>
            <div>
                {guesses.map((guess, index) => (
                    <div key={index} style={{ display: 'flex' }}>
                        {guess.split('').map((letter, i) => (
                            <div key={i} style={{ width: '20px', textAlign: 'center' }}>
                                {letter}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <input type="text" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} maxLength={5}/>
            <button onClick={submitGuess}>Submit</button>
            {gameStatus === 'win' && <h2>You Win!</h2>}
            {gameStatus === 'lose' && <h2>You Lose! The word was {correctWord}.</h2>}
        </div>
    );
};

export default Game;