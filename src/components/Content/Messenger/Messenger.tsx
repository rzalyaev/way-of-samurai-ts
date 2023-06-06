import React from 'react';
import styles from './Messenger.module.css';
import Contacts from './Contacts/Contacts';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import {ActionsTypes, MessengerPageType} from '../../../redux/store';

type PropsType = {
    messenger: MessengerPageType,
    dispatch: (action: ActionsTypes) => void,
}

const Messenger = ({messenger, dispatch}: PropsType) => {
    return (
        <div className={styles.messenger}>
            <Contacts contacts={messenger.contacts}/>
            <MessagesBlock messages={messenger.messages} dispatch={dispatch}/>
        </div>
    );
};

export default Messenger;