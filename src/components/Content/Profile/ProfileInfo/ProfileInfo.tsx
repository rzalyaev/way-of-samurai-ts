import React from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileInfoType} from '../../../../redux/store';

type PropsType = {
    info: ProfileInfoType
}

const ProfileInfo = ({info}: PropsType) => {
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
    );
};

export default ProfileInfo;