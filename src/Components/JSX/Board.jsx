import React, { useState, useEffect } from 'react';
import '../CSS/General.css';
import Card from './Card';

const Board = ({ cards, boardSize }) => {
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
              flipped: false,
            };
          })
        ).flat();

        setBoardCards(newCards);
      };

      generateCards();
  }, [boardSize, cards]);

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
        // Reset flipped state after a delay (adjust the timeout as needed)
        setTimeout(() => {
          setBoardCards((prevCards) =>
            prevCards.map((card) =>
              card.id === card1.id || card.id === card2.id ? { ...card, flipped: false } : card
            )
          );
        }, 1000);
      }

      // Reset selected cards after processing
      setSelectedCards([]);
    }
  }, [selectedCards]);

  const handleCardClick = (cardId, cardValue) => {
    setBoardCards((prevCards) =>
      prevCards.map((card) => (card.id === cardId ? { ...card, flipped: true } : card))
    );
    setSelectedCards((prevSelected) => [...prevSelected, { id: cardId, value: cardValue }]);
  };

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