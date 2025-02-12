import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducers from "./Redux/Reducers"
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom"

const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
