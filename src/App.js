import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';

//import rootReducer from './reducers/index'

function App() {
  return (
    <div>
   <Board />
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
