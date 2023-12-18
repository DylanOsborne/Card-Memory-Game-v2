import React from 'react';
import '../CSS/General.css';

const Card = ({ id, value, isFlipped, onClick }) => {
    const handleClick = () => {
        if (!isFlipped) {
            onClick(id, value);
        }
    };

    return (
        <div className='m-1 p-3'>
            <div className={`card ${isFlipped ? 'flipped' : ''} p-4 btn`} onClick={handleClick}>
                {isFlipped ? value : 'Back of Card'}
            </div>
        </div>
        
    );
};

export default Card;