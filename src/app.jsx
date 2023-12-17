import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './Components/JSX/StartScreen';
import SelectGameMode from './Components/JSX/SelectGameMode';
import Rules from './Components/JSX/Rules';
import Game from './Components/JSX/Game';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/SelectGameMode" element={<SelectGameMode/>}/>
                <Route path="/Rules/:gameMode" element={<Rules />} />
                <Route path="/Game/:selectedCardType/:boardSize/:gameMode" element={<Game />} />
            </Routes>
        </Router>
    );
};

export default App;