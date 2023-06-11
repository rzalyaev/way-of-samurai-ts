import React from 'react';
import styles from './Profile.module.css';
import {RootStateType} from '../../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SendPostContainer from './SendPost/SendPostContainer';
import PostsList from './PostsList/PostsList';
import {useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector((state: RootStateType) => state.profilePage);

    return(
        <div>
            <ProfileInfo info={profile.profileInfo}/>
            <SendPostContainer/>
            <PostsList posts={profile.posts}/>
        </div>
    );
};

export default Profile;