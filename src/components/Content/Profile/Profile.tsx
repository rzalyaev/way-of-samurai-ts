import React from "react";
import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {SendPost} from "./SendPost/SendPost";
import {PostsList} from "./PostsList/PostsList";
import {ProfileInfoType, PostType} from "../../../redux/state";

type PropsType = {
    info: ProfileInfoType
    posts: PostType[]
}

export const Profile: React.FC<PropsType> = ({info, posts}) => {
    return(
        <div>
            <ProfileInfo info={info}/>
            <SendPost/>
            <PostsList posts={posts}/>
        </div>
    )
}