import React, { useState, useEffect } from 'react';
import Board from './Board';

const Game = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        // Initialize your cards array here
        const newCards = [
            { id: 1, value: 'A' },
            { id: 2, value: 'B' },
            // Add more cards as needed
        ];
        setCards(newCards);
    }, []);

    const handleCardClick = (cardId, cardValue) => {
        setSelectedCards((prevSelected) => [...prevSelected, { id: cardId, value: cardValue }]);
    };

    return (
        <div className="game">
            <Board cards={cards} handleCardClick={handleCardClick} />
        </div>
    );
};

export default Game;