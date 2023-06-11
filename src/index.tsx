import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {RootStateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = (state: RootStateType) => ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));