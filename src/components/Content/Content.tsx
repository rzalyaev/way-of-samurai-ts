import React from "react";
import styles from "./Content.module.css";
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Messenger} from "./Messenger/Messenger";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {MessengerPageType, ProfilePageType} from "../../redux/state";

type PropsType = {
    profile: ProfilePageType
    messenger: MessengerPageType
}

export const Content: React.FC<PropsType> = ({profile, messenger}) => {
    return(
        <div className={styles.content}>
            <Route path={'/profile'}
                   render={() => <Profile info={profile.profileInfo} posts={profile.posts}/>}
            />
            <Route path={'/messenger'}
                   render={() => <Messenger contacts={messenger.contacts} messages={messenger.messages}/>}
            />
            <Route path={'/feed'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </div>
    )
}