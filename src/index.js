import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';


const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware , saga
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app =(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);

render (app, document.getElementById('root'));
reportWebVitals();
