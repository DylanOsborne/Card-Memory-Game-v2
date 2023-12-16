import React from 'react';

const StartScreen = () => {
    return (
        <div className="bg-warning">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="border border-5 border-dark p-5 bg bg-primary">
                    <div className="text-center text-light border border-5 border-light p-4 bg bg-dark">
                        <h1 className="mb-4">Card Memory Game</h1>
                        <h1 className="mb-4">Welcome</h1>
                        <h1 className="mb-4">Simple game for all ages</h1>
                    </div>

                    <a href="#" className="mt-4 btn btn-dark btn-lg border border-5 border-light d-flex align-items-center justify-content-center" role="button">Continue</a>
                </div>
            </div>
        </div>
    );
  };
  
  export default StartScreen;