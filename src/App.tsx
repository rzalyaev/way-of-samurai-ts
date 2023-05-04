import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Content } from './components/Content/Content';
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}



export default App;
