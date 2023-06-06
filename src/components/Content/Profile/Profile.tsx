import React from 'react';
import styles from './Profile.module.css';
import {ProfilePageType} from '../../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SendPostContainer from './SendPost/SendPostContainer';
import PostsList from './PostsList/PostsList';

type PropsType = {
    profile: ProfilePageType
}

const Profile = ({profile}: PropsType) => {
    return(
        <div>
            <ProfileInfo info={profile.profileInfo}/>
            <SendPostContainer/>
            <PostsList posts={profile.posts}/>
        </div>
    );
};

export default Profile;