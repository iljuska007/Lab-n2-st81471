import React from 'react';
import Piano from './piano';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="background">
        <img
          src="https://img.freepik.com/premium-vector/empty-dark-concert-stage-with-spotlights-dark-background-empty-space-text-concert-hall-sh_912214-10821.jpg" // Замените на ссылку вашей картинки
          alt="Background"
          className="background-image"
        />
      </div>
      <div className="overlay">
        <h1 className="title">Virtual Piano</h1>
        <Piano />
      </div>
    </div>
  );
}

export default App;



