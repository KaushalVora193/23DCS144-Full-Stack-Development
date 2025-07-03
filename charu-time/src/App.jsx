import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="app-container">
      <h1>Welcome to CHARUSAT!!!!</h1>
      <h2>It is {formattedDate}</h2>
      <h2>It is {formattedTime}</h2>
    </div>
  );
}

export default App;
