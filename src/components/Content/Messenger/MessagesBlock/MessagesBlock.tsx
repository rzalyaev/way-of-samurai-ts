import React from 'react';
import styles from "./MessagesBlock.module.css";
import Messages from "./Messages/Messages";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import {MessageType} from "../../../../redux/state";


type PropsType = {
    messages: MessageType[]
}

const MessagesBlock: React.FC<PropsType> = ({messages}) => {
    return (
        <div className={styles.messagesBlock}>
            <Messages messages={messages}/>
            <SendMessageForm/>
        </div>
    );
};

export default MessagesBlock;