import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home'
import Game from './containers/Game'
import Result from './containers/Result'
import PreviouslySavedGames from './containers/PreviouslySavedGames'

//import rootReducer from './reducers/index'


function App() {

  return (
    <div>
      <Router>
        {/* <Switch> // built in logic to say if the path is here */}
    <Route path="/home" component={Home}></Route>
    <Route path="/result" component={Result}></Route>
    <Route path="/game" component={Game}></Route>
    <Route path="/previouslysavedgames" component={PreviouslySavedGames}></Route>
    {/* </Switch> */}
  </Router>

   
   
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
