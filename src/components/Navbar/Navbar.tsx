import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}>
                    <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink to="/messenger" activeClassName={styles.active}>Messages</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink to="/feed" activeClassName={styles.active}>News</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
                </li>
                <li className={styles.navbar__item}>
                    <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}