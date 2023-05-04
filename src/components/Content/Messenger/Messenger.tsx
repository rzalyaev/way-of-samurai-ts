import React from "react";
import styles from "./Messenger.module.css";
import {NavLink} from "react-router-dom";

export const Messenger = (props: any) => {
    return(
        <div className={styles.messenger}>
            <div className={styles.users}>
                <NavLink to={'/messenger/1'}>John</NavLink>
                <NavLink to={'/messenger/2'}>Jenifer</NavLink>
                <NavLink to={'/messenger/3'}>Brian</NavLink>
                <NavLink to={'/messenger/4'}>Paul</NavLink>
                <NavLink to={'/messenger/5'}>Rick</NavLink>
            </div>
            <div className={styles.messagesBlock}>
                <div className={styles.messages}>
                    <p>How are you?</p>
                    <p>I'm fine!</p>
                    <p>Hello!</p>
                </div>
                <div className={styles.sendForm}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}