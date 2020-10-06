import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home'
import Game from './containers/Game'
import Result from './containers/Result'
import PreviouslySavedGames from './containers/PreviouslySavedGames'



function App() {

  return (
    <div>
      <Router>
      
    <Route path="/home" component={Home}></Route>
    <Route exact path="/"><Redirect to={{pathname:'/home', state: {refresh: false}}} /></Route>
    <Route path="/result" component={Result}></Route>
    <Route path="/game" component={Game}></Route>
    <Route path="/previouslysavedgames" component={PreviouslySavedGames}></Route>
  
  </Router>

   
    </div>
  );
}

export default App;
