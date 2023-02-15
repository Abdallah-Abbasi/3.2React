import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
                const data = ["hello", "world"];
                const formattedData = data.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                const number1 = 5;
                const number2 = 6;
                const sum = `${number1} + ${number2} = ${number1 + number2}`;
                const string = "I love React!";
                const length = `The string's length is ${string.length}`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>{formattedData}</p>
      <p>{sum}</p>
      <p>{length}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
