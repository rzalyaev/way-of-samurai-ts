import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return(
        <div>
            <h3>Profile Info Component</h3>
            <img src="#" alt="user avatar"/>
            <div>
                <ul>
                    <li>Name: Ruslan</li>
                    <li>Status: I love coding!</li>
                    <li>City: Izhevsk</li>
                </ul>
            </div>
        </div>
    )
}