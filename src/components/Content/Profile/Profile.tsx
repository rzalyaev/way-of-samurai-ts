import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SendPost} from "./SendPost/SendPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileInfoType, PostType, ActionsTypes} from "../../../redux/state";

type PropsType = {
    info: ProfileInfoType
    posts: PostType[]
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<PropsType> = (
    {
        info,
        posts,
        dispatch,
    }) => {
    return(
        <div>
            <ProfileInfo info={info}/>
            <SendPost dispatch={dispatch}/>
            <PostsList posts={posts}/>
        </div>
    )
}