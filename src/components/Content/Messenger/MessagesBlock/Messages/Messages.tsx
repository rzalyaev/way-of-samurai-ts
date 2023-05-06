import React from 'react';
import styles from "./Messages.module.css";
import {MessageType} from "../../Messenger";

type PropsType = {
    messages: MessageType[]
}

const Messages: React.FC<PropsType> = ({messages}) => {
    const mappedMessages = messages.map((message: MessageType) => <p key={message.id}>{message.text}</p>)

    return (
        <div className={styles.messages}>
            {mappedMessages}
        </div>
    );
};

export default Messages;