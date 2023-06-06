import React from 'react';
import styles from './Messages.module.css';
import {MessageType} from '../../../../../redux/store';


type PropsType = {
    messages: MessageType[]
}

const Messages = ({messages}: PropsType) => {
    const mappedMessages = messages.map((message: MessageType) => <p key={message.id}>{message.text}</p>)

    return (
        <div className={styles.messages}>
            {mappedMessages}
        </div>
    );
};

export default Messages;