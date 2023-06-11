import React from 'react';
import styles from './Messenger.module.css';
import Contacts from './Contacts/Contacts';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";

const Messenger = () => {
    const messenger = useSelector((state: RootStateType) => state.messengerPage);

    return (
        <div className={styles.messenger}>
            <Contacts contacts={messenger.contacts}/>
            <MessagesBlock messages={messenger.messages}/>
        </div>
    );
};

export default Messenger;