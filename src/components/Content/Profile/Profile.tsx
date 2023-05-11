import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SendPost} from "./SendPost/SendPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileInfoType, PostType} from "../../../redux/state";

type PropsType = {
    info: ProfileInfoType
    posts: PostType[]
    addPost: (newPostText: string) => void
}

export const Profile: React.FC<PropsType> = (
    {
        info,
        posts,
        addPost,
    }) => {
    return(
        <div>
            <ProfileInfo info={info}/>
            <SendPost addPost={addPost}/>
            <PostsList posts={posts}/>
        </div>
    )
}