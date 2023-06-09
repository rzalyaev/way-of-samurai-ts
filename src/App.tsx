import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;