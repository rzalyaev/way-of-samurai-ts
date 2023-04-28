import React from "react";
import styles from "./Content.module.css";
import { Profile } from "./Profile/Profile";

export const Content = () => {
    return(
        <div className={styles.content}>
            <Profile/>
        </div>
    )
}