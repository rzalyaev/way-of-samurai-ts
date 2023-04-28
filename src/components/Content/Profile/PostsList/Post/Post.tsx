import React from "react";
import styles from "./Post.module.css";

export const Post = () => {
    return(
        <div className={styles.post}>
            <img src="#" alt="user avatar small"/>
            <div>Here will be post text</div>
            <button>Likes: 0</button>
        </div>
    )
}