import React, { useState, useEffect } from 'react';
import Card from './Card';

const Board = ({ cards, handleCardClick }) => {
  const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        // Function to generate cards when the component mounts
        const generateCards = () => {
            const newCards = [];
            const maxNumber = cards.length / 2;

            for (let i = 1; i <= cards.length; i++) {
                let randomNumber;
                do {
                    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
                } while (newCards.filter(card => card.value === randomNumber).length >= 2);

                newCards.push({
                    id: i,
                    value: randomNumber,
                });
            }

            // You may want to dispatch an action to update the state with the new cards
            // setCards(newCards);
        };

        // Generate cards when the component mounts
        generateCards();
    }, [cards]);

    useEffect(() => {
        // Check for matching cards when two cards are selected
        if (selectedCards.length === 2) {
            const [card1, card2] = selectedCards;

            if (card1.value === card2.value) {
                // Handle matching cards logic (e.g., remove cards)
                console.log('Match!');
            } else {
                // Handle non-matching cards logic (e.g., flip cards back)
                console.log('Not a match!');
            }

            // Reset selected cards after processing
            setSelectedCards([]);
        }
    }, [selectedCards]);

    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    value={card.value}
                    isFlipped={selectedCards.some((selected) => selected.id === card.id)}
                    onClick={() => handleCardClick(card.id, card.value)}
                />
            ))}
        </div>
    );
};

export default Board;