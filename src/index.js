import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer'
import playerReducer from './reducers/playerReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(gameReducer, playerReducer, applyMiddleware(thunk))

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//ROUTES defined here