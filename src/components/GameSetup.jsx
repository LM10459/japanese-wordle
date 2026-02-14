import React from 'react';

const GameSetup = () => {
    return (
        <div>
            <h1>Game Setup</h1>
            <form>
                <label htmlFor="gameName">Game Name:</label>
                <input type="text" id="gameName" name="gameName" required />
                <br />
                <label htmlFor="wordList">Word List:</label>
                <textarea id="wordList" name="wordList" required></textarea>
                <br />
                <label htmlFor="numAttempts">Number of Attempts:</label>
                <input type="number" id="numAttempts" name="numAttempts" min="1" required />
                <br />
                <button type="submit">Create Game</button>
            </form>
        </div>
    );
};

export default GameSetup;