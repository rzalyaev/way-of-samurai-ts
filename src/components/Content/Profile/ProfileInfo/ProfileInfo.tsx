import React from "react";
import styles from "./ProfileInfo.module.css";
import {ProfileInfoType} from "../../../../redux/state";

type PropsType = {
    info: ProfileInfoType
}

export const ProfileInfo: React.FC<PropsType> = ({info}) => {
    return(
        <div>
            <h3>Profile Info Component</h3>
            <img src="#" alt="user avatar"/>
            <div>
                <ul>
                    <li>Name: {info.name}</li>
                    <li>Status: {info.status}</li>
                    <li>City: {info.location.city}</li>
                </ul>
            </div>
        </div>
    )
}