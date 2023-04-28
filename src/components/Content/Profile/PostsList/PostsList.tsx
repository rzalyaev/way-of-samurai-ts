import React from "react";
import styles from "./PostsList.module.css";
import { Post } from "./Post/Post";

export const PostsList = () => {
    return(
        <div>
            <h3>Posts List Component</h3>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}