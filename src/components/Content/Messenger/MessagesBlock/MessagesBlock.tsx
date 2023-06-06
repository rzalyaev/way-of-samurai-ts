import React from 'react';
import styles from './MessagesBlock.module.css';
import {ActionsTypes, MessageType} from '../../../../redux/store';
import Messages from './Messages/Messages';
import SendMessageFormContainer from './SendMessageForm/SendMessageFormContainer';

type PropsType = {
    messages: MessageType[],
    dispatch: (action: ActionsTypes) => void,
}

const MessagesBlock = ({messages, dispatch}: PropsType) => {
    return (
        <div className={styles.messagesBlock}>
            <Messages messages={messages}/>
            <SendMessageFormContainer dispatch={dispatch}/>
        </div>
    );
};

export default MessagesBlock;