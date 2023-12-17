import React from 'react';
import '../CSS/General.css';
import { Link, useNavigate  } from 'react-router-dom';

const SelectGameMode = ({ setCardType }) => {
    const navigate  = useNavigate ();

    const handleModeSelection = (mode) => {
        setCardType('numbers'); 
        navigate(`/Rules/${mode}`);
    };

    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-4 bg bg-primary">
                    
                    <h1 className="text-center text-light border border-5 border-light p-4 ps-5 pe-5 bg-black">Select Mode</h1>

                    <div className="container p-2">
                        <div className='row justify-content-center'>
                            <button onClick={() => handleModeSelection('Timed Mode')} className="btn col-4 mt-2 btn-lg btn-block p-4 me-1 btn">Timed</button>

                            <button onClick={() => handleModeSelection('Memory Mode')} className="btn col-4 mt-2 btn-lg btn-block p-4 me-1 ms-1">Memory</button>

                            <button onClick={() => handleModeSelection('Standard Mode')} className="btn col-4 mt-2 btn-lg btn-block p-4 ms-1">Standard</button>
                        </div>
                    </div>

                    <Link to="/" className="btn btn-lg d-flex mt-4" role="button">Back</Link>
                
                </div>
            </div>
        </div>
    );
};
  
export default SelectGameMode;