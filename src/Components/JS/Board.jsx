import React from 'react';
import Card from './Card';

const Board = ({ cards, handleCardClick }) => (
  <div className="board">
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        value={card.value}
        isFlipped={card.isFlipped}
        onClick={handleCardClick}
      />
    ))}
  </div>
);

export default Board;