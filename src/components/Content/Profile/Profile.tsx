import React from 'react';
import styles from './Profile.module.css';
import {ActionsTypes, ProfilePageType} from '../../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SendPostContainer from './SendPost/SendPostContainer';
import PostsList from './PostsList/PostsList';

type PropsType = {
    profile: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}

const Profile = ({profile, dispatch}: PropsType) => {
    return(
        <div>
            <ProfileInfo info={profile.profileInfo}/>
            <SendPostContainer dispatch={dispatch}/>
            <PostsList posts={profile.posts}/>
        </div>
    );
};

export default Profile;