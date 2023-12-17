import React, { useEffect } from 'react';

const Card = ({ id, value, isFlipped, onClick }) => {
    const handleClick = () => {
        if (!isFlipped) {
            onClick(id, value);
        }
    };

    useEffect(() => {
        // Reset card when the game is reset
        // Assuming that you have some way of resetting the game, 
        // you should have a reset logic that sets all cards to unflipped.
    }, [id]);

    return (
        <div className='container border border-light bg-dark'>
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                {isFlipped ? value : 'Back of Card'}
            </div>
        </div>
        
    );
};

export default Card;