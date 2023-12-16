import React from 'react';

const Card = ({ id, value, isFlipped, onClick }) => (
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
    {isFlipped ? value : 'Back of Card'}
  </div>
);

export default Card;