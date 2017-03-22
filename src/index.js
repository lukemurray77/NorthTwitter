
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import reducer from './reducer/index.reducer';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './css/profileCard.css';



const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));
// console.log(store.getState())


ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path=':user' component={ProfilePage} />
        </Route>
    </Router>
</Provider>,
document.getElementById('root'));