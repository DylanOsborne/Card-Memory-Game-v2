import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './Components/JSX/StartScreen';
import SelectGameMode from './Components/JSX/SelectGameMode';
import Rules from './Components/JSX/Rules';
import Game from './Components/JSX/Game';

const App = () => {
    const [cardType, setCardType] = useState('numbers');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/SelectGameMode" element={<SelectGameMode setCardType={setCardType} />}/>
        <Route path="/Rules/:gameMode?" element={<Rules cardType={cardType} />} />
        <Route path="/Game" element={<Game cardType={cardType} />} />
      </Routes>
    </Router>
  );
};

export default App;