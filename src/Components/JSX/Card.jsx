import React, { useEffect } from 'react';
import '../CSS/General.css';

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
        <div className='m-1 p-3'>
            <div className={`card ${isFlipped ? 'flipped' : ''} p-4 btn`} onClick={handleClick}>
                {isFlipped ? value : 'Back of Card'}
            </div>
        </div>
        
    );
};

export default Card;