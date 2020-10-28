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
let express = require('express')
let cors = require('cors')
let app = express()
 
app.use(cors())
app.use('/game', gameRoutes)
app.use('/player', playerRoutes) 
export default app;
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})