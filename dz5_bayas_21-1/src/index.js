import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducer/reducer";
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";

const store = createStore(rootReducer, applyMiddleware(logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

