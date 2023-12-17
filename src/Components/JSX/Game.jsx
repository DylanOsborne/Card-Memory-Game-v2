import React, { useState, useEffect } from 'react';
import Board from './Board';

const Game = ({ cardType, boardSize }) => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    useEffect(() => {
        
        const fetchCards = async () => {
          
            let newCards = [];

            let totalCards = 0;

            switch (boardSize) {
                case '3x4':
                    totalCards = 3 * 4;
                break;

                case '4x5':
                    totalCards = 4 * 5;
                break;

                case '5x6':
                    totalCards = 5 * 6;
                break;
                
                default:
                totalCards = 20;
            }
    
          
            switch (cardType) {
                case 'numbers':
                    newCards = Array.from({ length: totalCards }, (_, index) => ({
                        id: index + 1,
                        value: String(index + 1),
                    }));
                break;

                case 'emojis':
                    newCards = Array.from({ length: totalCards }, (_, index) => ({
                        id: index + 1,
                        value: '😊',
                    }));
                break;

                case 'colors':
                    newCards = Array.from({ length: totalCards }, (_, index) => ({
                        id: index + 1,
                        value: 'Red',
                    }));
                break;

                default:
                newCards = Array.from({ length: totalCards }, (_, index) => ({
                    id: index + 1,
                    value: String(index + 1),
                }));
            }

            setCards(newCards);
        };
    
        fetchCards();
    }, [cardType, boardSize]);

    const handleCardClick = (cardId, cardValue) => {
        setSelectedCards((prevSelected) => [...prevSelected, { id: cardId, value: cardValue }]);
    };

    return (
        <div className='background vh-100 '>
            <div className="container">
                <div className="game border border-light border-5 backgroundReverse ">
                    <Board cards={cards} handleCardClick={handleCardClick} />
                </div>
            </div>

            <div className="container mt-5">
                <div className='game_bar border border-light border-5 backgroundReverse'>
                    <button className='btn btn-lg p-4 m-4'>Back</button>
                    <button className='btn btn-lg p-4 m-4'>Start Game</button>
                </div>

            </div>
        </div>
    );
};

export default Game;