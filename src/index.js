import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './Components/JS/StartScreen';
import SelectGameMode from './Components/JS/SelectGameMode';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/SelectGameMode" element={<SelectGameMode />} />
      </Routes>
    </Router>
  </React.StrictMode>
);