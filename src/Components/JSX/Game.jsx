import React, { useState, useEffect } from 'react';
import '../CSS/General.css';
import Board from './Board';
import { useNavigate, useParams } from 'react-router-dom';

const Game = ({ selectedCardType, boardSize }) => {
    const { gameMode } = useParams();
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    const navigate  = useNavigate ();

    const back = () => {
        navigate(`/Rules/${gameMode}`);
    };

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
    
          
            switch (selectedCardType) {
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
    }, [selectedCardType, boardSize]);

    const handleCardClick = (cardId, cardValue) => {
        setSelectedCards((prevSelected) => [...prevSelected, { id: cardId, value: cardValue }]);
    };

    return (
        <div className='background vh-100'>
            <div className="container border border-light border-5 backgroundReverse mt-5">
                <div className="game">
                    <Board cards={cards} handleCardClick={handleCardClick} />
                </div>
            </div>

            <div className="container mt-5 fixed-bottom position-fixed border border-light border-5 backgroundReverse">
                <div className='game_bar d-flex justify-content-center'>
                    <button onClick={() => back()} className='btn btn-lg p-4 m-4 col-3'>Back</button>
                    <button className='btn btn-lg p-4 m-4 col-3'>Start Game</button>
                    <h1 className='btn btn-lg p-4 m-4 col-5'>Text</h1>
                </div>
            </div>
        </div>
    );
};

export default Game;