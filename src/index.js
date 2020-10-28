import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))





ReactDOM.render(
//every render always needs to have one main container div

  <Provider store={store}>
    {console.log(store.getState().playerReducer)}
    <App />
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//------------------------------------
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/game', (req, res) => {
  request(
    { url: 'https://fast-journey-86003.herokuapp.com/game' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/player', (req, res) => {
  request(
    { url: 'https://fast-journey-86003.herokuapp.com/player' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));