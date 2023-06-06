import React, {useContext} from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import Messenger from './Messenger/Messenger';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {StoreContext} from '../../redux/redux-store';

const Content = () => {
    const state = useContext(StoreContext);
    if (!state) {
        throw new Error('useContext must be used within a MyContext.Provider');
    }

    return(
        <div className={styles.content}>
            <Route path={'/profile'}
                   render={() => <Profile profile={state.profilePage}/>}
            />
            <Route path={'/messenger'}
                   render={() => <Messenger messenger={state.messengerPage}/>}
            />
            <Route path={'/feed'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};

export default Content;