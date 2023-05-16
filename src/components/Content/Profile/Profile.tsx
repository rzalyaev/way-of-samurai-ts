import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SendPost} from "./SendPost/SendPost";
import {PostsList} from "./PostsList/PostsList";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";

type PropsType = {
    profile: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (
    {
        profile,
        dispatch,
    }) => {
    return(
        <div>
            <ProfileInfo info={profile.profileInfo}/>
            <SendPost dispatch={dispatch}/>
            <PostsList posts={profile.posts}/>
        </div>
    )
}