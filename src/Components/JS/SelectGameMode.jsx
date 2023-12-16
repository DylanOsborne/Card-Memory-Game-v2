import React from 'react';
import '../CSS/General.css';
import { Link } from 'react-router-dom';

const SelectGameMode = () => {
    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-5 bg bg-primary">
                    
                    <h1 className="text-center text-light border border-5 border-light p-4 ps-5 pe-5 bg-black">Select Mode</h1>

                    <div className="container p-2">
                        <div className='row justify-content-center'>
                            <div className='col-4'>
                                <Link to="/" className="mt-4 btn btn-dark border-2 border-light bg-black border-light d-flex align-items-center justify-content-center p-4" role="button">Timed</Link>
                            </div>

                            <div className='col-4'>
                                <Link to="/" className="mt-4 btn btn-dark border-2 border-light bg-black border-light d-flex align-items-center justify-content-center p-4" role="button">Memory</Link>
                            </div>

                            <div className='col-4'>
                                <Link to="/" className="mt-4 btn btn-dark border-2 border-light bg-black border-light d-flex align-items-center justify-content-center p-4" role="button">Standard</Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className="mt-4 btn btn-dark bg-black btn-lg border-5 border-light d-flex align-items-center justify-content-center" role="button">Back</Link>
                
                </div>
            </div>
        </div>
    );
  };
  
  export default SelectGameMode;