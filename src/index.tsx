import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {RootStateType} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./redux/redux-store";
import {StoreDispatchContext} from "./redux/redux-store";

const rerenderEntireTree = (state: RootStateType) => ReactDOM.render(
    <BrowserRouter>
        <StoreContext.Provider value={state}>
            <StoreDispatchContext.Provider value={store.dispatch.bind(store)}>
                <App/>
            </StoreDispatchContext.Provider>
        </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));