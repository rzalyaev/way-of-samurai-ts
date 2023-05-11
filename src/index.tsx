import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe} from "./redux/state";

const rerenderEntireTree: () => void = () => ReactDOM.render(<App />, document.getElementById('root'));

rerenderEntireTree();

subscribe(rerenderEntireTree);