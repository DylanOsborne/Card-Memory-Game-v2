import React from 'react';
import '../CSS/General.css';
import { Link } from 'react-router-dom';

const SelectGameMode = () => {
    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-5 bg bg-primary">
                    
                    <h1 className="text-center text-light border border-5 border-light p-4 ps-5 pe-5 bg-black">Select Mode</h1>

                    <div className="container p-4">
                        <div className='row justify-content-center'>
                            <div className='col-4'>
                                <div className="btn btn-dark border-2 border-light bg-black">Timed</div>
                            </div>

                            <div className='col-4'>
                                <div className="btn btn-dark border-2 border-light bg-black">Memory</div>
                            </div>

                            <div className='col-4'>
                                <div className="btn btn-dark border-2 border-light bg-black">Standard</div>
                            </div>
                        </div>
                    </div>

                    <Link to="/SelectGameMode" className="mt-4 btn btn-dark bg-black btn-lg border-5 border-light d-flex align-items-center justify-content-center" role="button">Back</Link>
                
                </div>
            </div>
        </div>
    );
  };
  
  export default SelectGameMode;