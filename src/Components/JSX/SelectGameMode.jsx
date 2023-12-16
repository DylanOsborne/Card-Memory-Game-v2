import React from 'react';
import '../CSS/General.css';
import { Link, useNavigate  } from 'react-router-dom';

const SelectGameMode = () => {
    const navigate  = useNavigate ();

    const handleModeSelection = (mode) => {
        navigate(`/Rules/${mode}`);
    };

    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-5 bg bg-primary">
                    
                    <h1 className="text-center text-light border border-5 border-light p-4 ps-5 pe-5 bg-black">Select Mode</h1>

                    <div className="container p-2">
                        <div className='row justify-content-center'>
                        <div className='col-4'>
                                <button onClick={() => handleModeSelection('Timed Mode')} className="btn btn-lg d-flex p-4">Timed</button>
                            </div>

                            <div className='col-4'>
                                <button onClick={() => handleModeSelection('Memory Mode')} className="btn btn-lg d-flex p-4">Memory</button>
                            </div>

                            <div className='col-4'>
                                <button onClick={() => handleModeSelection('Standard Mode')} className="btn btn-lg d-flex p-4">Standard</button>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className="btn btn-lg d-flex" role="button">Back</Link>
                
                </div>
            </div>
        </div>
    );
  };
  
  export default SelectGameMode;