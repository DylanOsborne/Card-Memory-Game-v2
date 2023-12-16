import React from 'react';
import '../CSS/General.css';
import { Link } from 'react-router-dom';

const StartScreen = () => {
    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-5 bg bg-primary">
                    <div className="text-center text-light border border-5 border-light p-4 bg-black">
                        <h1 className="mb-4">Card Memory Game</h1>
                        <h1 className="mb-4">Welcome</h1>
                        <h1 className="mb-4">Simple game for all ages</h1>
                    </div>

                    <Link to="/SelectGameMode" className="mt-4 btn btn-dark bg-black btn-lg border-5 border-light d-flex align-items-center justify-content-center" role="button">Continue</Link>
                </div>
            </div>
        </div>
    );
  };
  
  export default StartScreen;