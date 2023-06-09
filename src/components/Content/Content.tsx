import React from 'react';
import styles from './Content.module.css';
import {Route} from 'react-router-dom';
import Profile from './Profile/Profile';
import Messenger from './Messenger/Messenger';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';

const Content = () => {
    return(
        <div className={styles.content}>
            <Route path={'/profile'}
                   render={() => <Profile/>}
            />
            <Route path={'/messenger'}
                   render={() => <Messenger/>}
            />
            <Route path={'/feed'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    );
};

export default Content;