import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import thunk from 'thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers/index'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import playerReducer from './reducers/playerReducer';

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

//ROUTES defined here