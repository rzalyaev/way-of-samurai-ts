import React from 'react';
import styles from "./MessagesBlock.module.css";
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {ActionsTypes, MessageType} from "../../../../redux/store";


type PropsType = {
    messages: MessageType[],
    dispatch: (action: ActionsTypes) => void,
}

const MessagesBlock: React.FC<PropsType> = ({messages, dispatch}) => {
    return (
        <div className={styles.messagesBlock}>
            <Messages messages={messages}/>
            <SendMessageForm dispatch={dispatch}/>
        </div>
    );
};

export default MessagesBlock;