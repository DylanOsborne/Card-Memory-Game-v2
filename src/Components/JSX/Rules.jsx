import React from 'react';
import '../CSS/General.css';
import { Link } from 'react-router-dom';

const Rules = () => {
    return (
        <div className="background">
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="backgroundReverse border border-5 border-dark p-4 bg bg-primary">

                    <h2 className="text-center text-light border border-5 border-light p-3 ps-4 pe-4 bg-black">Selected Mode</h2>

                    <div className="text-light border border-5 border-light p-3 ps-4 pe-4 bg-black mb-2">
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
                            <Link to={'/Game'} className='col-3 btn btn-dark border-3 border-light p-2 bg-black me-2 me-sm-1'>Numbers</Link>
                            <Link to={'/Game'} className='col-3 btn btn-dark border-3 border-light p-2 bg-black me-2 me-sm-1 ms-2 ms-sm-1'>Emoji's</Link>
                            <Link to={'/Game'} className='col-3 btn btn-dark border-3 border-light p-2 bg-black ms-2 ms-sm-1'>Colors</Link>
                        </div>
                    </div>
                
                    <Link to="/SelectGameMode" className="mt-4 btn btn-dark bg-black btn-lg border-5 border-light d-flex align-items-center justify-content-center" role="button">Back</Link>
                </div>
            </div>
        </div>
    );
  };
  
  export default Rules;