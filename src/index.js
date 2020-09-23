import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk))



const Home = () => {
return (
  <div>
    <h1>This is the welcome page where they are going to be able to fill out their user information</h1>
  </div>
)
}

const Game = () => {
  return (
    <div>
      <h1>This is the game board</h1>
    </div>
  )
}

const Result = () => {
  return (
    <div>
      <h1>Here are the results of the game you just played</h1>
    </div>
  )
}

const PreviouslySavedGames = () => {
  return (
    <div>
      <h1>List of Previously Saved Games</h1>
    </div>
  )
}


ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/result" component={Result}></Route>
    <Route path="/game" component={Game}></Route>
    <Route path="/previouslysavedgames" component={PreviouslySavedGames}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//ROUTES defined here