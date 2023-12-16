import React, { useState } from 'react';
import '../CSS/General.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Rules = () => {
    const { gameMode } = useParams();

    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-4 bg bg-primary">

                    <h2 className="text-center text-light border border-5 border-light p-3 ps-4 pe-4 bg-black">{gameMode}</h2>

                    <div className="text-light border border-5 border-light p-3 ps-5 pe-5 bg-black mb-2">
                        <h4 className="text-center">Rules</h4>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </div>

                    <div className="text-light border border-5 border-light p-3 ps-4 pe-4 bg-black mb-2">
                        <h4 className="text-center">Please Select</h4>

                        <div className='container d-flex justify-content-center'>
                            <input className='col-2' type='radio' name='cardType'/>Numbers
                            <input className='col-2' type='radio' name='cardType'/>Emoji's
                            <input className='col-2' type='radio' name='cardType'/>Colors
                        </div>
                    </div>

                    <div>
                        <h4 className="text-center text-light border border-5 border-light p-2 ps-4 pe-4 bg-black mb-2">Board Sizes</h4>

                        <div className='container d-flex justify-content-center'>
                            <Link to={'/Game'} className='col-3 btn btn-lg border-3 p-2 me-2 me-sm-1'>3x4</Link>
                            <Link to={'/Game'} className='col-3 btn btn-lg border-3 p-2 me-2 me-sm-1 ms-2 ms-sm-1'>4x5</Link>
                            <Link to={'/Game'} className='col-3 btn btn-lg border-3 p-2 ms-2 ms-sm-1'>5x6</Link>
                        </div>
                    </div>
                
                    <Link to="/SelectGameMode" className="btn btn-lg d-flex" role="button">Back</Link>
                </div>
            </div>
        </div>
    );
};
  
  export default Rules;