import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleShowAlert = () => {
    alert("Hello React")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleShowAlert}>Hello</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
            className="App-link"
            href="https://github.com/Kiersii/test_project"
            target="_blank"
            rel="noopener noreferrer"
        >
          Github link
        </a>
      </header>
    </div>
  );
}

export default App;
