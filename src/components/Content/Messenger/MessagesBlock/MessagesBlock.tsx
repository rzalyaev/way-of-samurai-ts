import React from 'react';
import styles from './MessagesBlock.module.css';
import {MessageType} from '../../../../redux/store';
import Messages from './Messages/Messages';
import SendMessageFormContainer from './SendMessageForm/SendMessageFormContainer';

type PropsType = {
    messages: MessageType[]
}

const MessagesBlock = ({messages}: PropsType) => {
    return (
        <div className={styles.messagesBlock}>
            <Messages messages={messages}/>
            <SendMessageFormContainer/>
        </div>
    );
};

export default MessagesBlock;