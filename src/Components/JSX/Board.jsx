import React, { useState, useEffect } from 'react';
import '../CSS/General.css';
import Card from './Card';

const Board = ({ cards, handleCardClick, boardSize }) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [boardCards, setBoardCards] = useState([]);

    useEffect(() => {

      let boardS = {};

      const generateCards = () => {

        switch (boardSize) {
          case '3x4':
            boardS = { rows: 3, columns: 4 };
          break;

          case '4x4':
            boardS = { rows: 4, columns: 4 };
          break;

          case '4x5':
            boardS = { rows: 4, columns: 5 };
          break;
          
          default:
            boardS = { rows: 3, columns: 4 };
        }
  
        const newCards = Array.from({ length: boardS.rows }, (_, rowIndex) =>
          Array.from({ length: boardS.columns }, (_, colIndex) => {
            const cardIndex = rowIndex * boardS.columns + colIndex;
            return {
              ...cards[cardIndex],
              id: cardIndex + 1,
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