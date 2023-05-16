import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from './components/Content/Content';
import {ActionsTypes, RootStateType} from "./redux/store";

type PropsType = {
    state: RootStateType,
    dispatch: (action: ActionsTypes) => void
}

const App: FC<PropsType> = ({state, dispatch}) => {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content state={state} dispatch={dispatch}/>
        </div>
    );
}

export default App;