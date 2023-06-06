import React from 'react';
import styles from './Messenger.module.css';
import Contacts from './Contacts/Contacts';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import {MessengerPageType} from '../../../redux/store';

type PropsType = {
    messenger: MessengerPageType
}

const Messenger = ({messenger}: PropsType) => {
    return (
        <div className={styles.messenger}>
            <Contacts contacts={messenger.contacts}/>
            <MessagesBlock messages={messenger.messages}/>
        </div>
    );
};

export default Messenger;