import React from "react";
import styles from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { SendPost } from "./SendPost/SendPost";
import { PostsList } from "./PostsList/PostsList";

export const Profile = () => {
    return(
        <div>
            <ProfileInfo/>
            <SendPost/>
            <PostsList/>
        </div>
    )
}