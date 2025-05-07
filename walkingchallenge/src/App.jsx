import React from 'react';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="logo-rain">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 30 + 20;
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const opacity = Math.random() * 0.5 + 0.8;
          const rotationDirection = Math.random() < 0.5 ? -1 : 1; // randomly clockwise or counter-clockwise
          const initialRotation = Math.random() * 360;

          return (
            <img
              key={i}
              src="/flexx-logo.svg"
              className={`falling-logo rotate-${rotationDirection === 1 ? 'right' : 'left'}`}
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                width: `${size}px`,
                opacity,
                transform: `rotate(${initialRotation}deg)`,
              }}
            />
          );
        })}

      </div>


      <header className="app-header">
        <h1>Flexx Walking Challenge</h1>
      </header>

      <Leaderboard />
    </div>
  );
}

export default App;
