import './App.css';
import Header from './components/header.jsx';
import Game from './components/game.jsx';
import React, { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0); 

  return (
    <div className="App">
      <Header score = {score} highScore = {highScore} />
      <Game setScore = {setScore} setHighScore = {setHighScore} highScore = {highScore} />
    </div>
  );
}

export default App;
