import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from './components/Content/Content';
import {BrowserRouter} from "react-router-dom";
import {state, addPost} from "./redux/state";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Content profile={state.profilePage} messenger={state.messengerPage} addPost={addPost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;