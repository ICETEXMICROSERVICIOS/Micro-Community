import React from 'react';
import logo from './logo.svg';
import './App.css';
import Getcomunidades from './getcomunidades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MICROSERVICIOS
        </p>
        <a
          className="App-link"
          href="https://PORTAL.ICETEX.GOV.CO"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICETEX
        </a>
      </header>
      <Getcomunidades/>
    </div>
  );
}

export default App;
