import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import "./css/styles.css";

import reducers from './reducers'
import App from "./components/App";


const store = createStore(reducers, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    rootElement);
