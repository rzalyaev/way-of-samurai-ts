import React from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import Messenger from './Messenger/Messenger';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {ActionsTypes, RootStateType} from '../../redux/store';

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const Content = ({state, dispatch}: PropsType) => {
    return(
        <div className={styles.content}>
            <Route path={'/profile'}
                   render={() => <Profile profile={state.profilePage} dispatch={dispatch}/>}
            />
            <Route path={'/messenger'}
                   render={() => <Messenger messenger={state.messengerPage} dispatch={dispatch}/>}
            />
            <Route path={'/feed'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};

export default Content;