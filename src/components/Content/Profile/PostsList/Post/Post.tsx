import React from "react";
import styles from "./Post.module.css";
import {PostType} from "../../../../../redux/state";

export const Post: React.FC<PostType> = ({text, likes}) => {
    return(
        <div className={styles.post}>
            <img src="#" alt="user avatar small"/>
            <div>{text}</div>
            <button>Likes: {likes}</button>
        </div>
    )
}