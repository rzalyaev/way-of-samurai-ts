import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}><a href="#">Profile</a></li>
                <li className={styles.navbar__item}><a href="#">Messages</a></li>
                <li className={styles.navbar__item}><a href="#">News</a></li>
                <li className={styles.navbar__item}><a href="#">Music</a></li>
                <li className={styles.navbar__item}><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}