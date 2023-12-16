import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './Components/JSX/StartScreen';
import SelectGameMode from './Components/JSX/SelectGameMode';
import Rules from './Components/JSX/Rules';
import Game from './Components/JSX/Game'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/SelectGameMode" element={<SelectGameMode />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </Router>
  </React.StrictMode>
);