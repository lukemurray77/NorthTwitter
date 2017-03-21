
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
// import reducer from './reducer/index.reducer';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';


// const logger = createLogger();
// const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<App />, document.getElementById('root'));