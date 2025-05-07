import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [logos, setLogos] = useState([]);

  // useEffect(() => {
  //   // Initial logo drop
  //   addLogos(10);

  //   // Add more logos as you scroll
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY + window.innerHeight;
  //     const documentHeight = document.body.scrollHeight;

  //     if (scrollY + 500 >= documentHeight) {
  //       addLogos(10); // Add more logos when nearing bottom
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      addLogos(10);
    }, 2000); // every 2 seconds

    addLogos(10)

    return () => clearInterval(interval);
  }, []);


  const addLogos = (count) => {
    const newLogos = Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 30 + 20;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 20 + 20;
      const opacity = Math.random() * 0.5 + 0.7;
      const direction = Math.random() < 0.5 ? 'left' : 'right';
      const initialRotation = Math.random() * 360;

      return {
        id: `${Date.now()}-${i}`,
        size,
        left,
        delay,
        duration,
        opacity,
        direction,
        initialRotation,
      };
    });

    setLogos((prev) => [...prev, ...newLogos]);
  };

  return (
    <div className="app-container">
      <div className="logo-rain">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src="/flexx-logo.svg"
            className={`falling-logo rotate-${logo.direction}`}
            style={{
              top: 0,
              left: `${logo.left}%`,
              animationDelay: `${logo.delay}s`,
              animationDuration: `${logo.duration}s`,
              width: `${logo.size}px`,
              opacity: logo.opacity,
              transform: `rotate(${logo.initialRotation}deg)`,
            }}
          />
        ))}
      </div>

      <header className="app-header">
        <h1>Flexx Walking Challenge</h1>
      </header>

      <Leaderboard />
    </div>
  );
}

export default App;
