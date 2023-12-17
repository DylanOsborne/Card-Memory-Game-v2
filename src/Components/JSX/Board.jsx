import React, { useState, useEffect } from 'react';
import '../CSS/General.css';
import Card from './Card';

const Board = ({ cards, handleCardClick }) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [boardCards, setBoardCards] = useState([]);

    useEffect(() => {
        // Function to generate cards when the component mounts
        const generateCards = () => {
          // Your existing logic to generate cards
    
          // Assuming cards is a flat array, let's create a 2D array based on the board size
          const boardSize = { rows: 3, columns: 4 }; // You can get this dynamically based on your requirement
    
          const newCards = Array.from({ length: boardSize.rows }, (_, rowIndex) =>
            Array.from({ length: boardSize.columns }, (_, colIndex) => {
              const cardIndex = rowIndex * boardSize.columns + colIndex;
              return {
                ...cards[cardIndex], // Assuming cards is a flat array of objects
                id: cardIndex + 1, // Update the card id if needed
              };
            })
          ).flat();
    
          setBoardCards(newCards);
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
        <div className="board row row-cols-5 justify-content-center">
            {boardCards.map((card) => (
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