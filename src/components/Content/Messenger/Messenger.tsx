import React from "react";
import styles from "./Messenger.module.css";
import Contacts from "./Contacts/Contacts";
import MessagesBlock from "./MessagesBlock/MessagesBlock";
import {ContactType, MessageType} from "../../../redux/state";

type PropsType = {
    contacts: ContactType[]
    messages: MessageType[]
}

export const Messenger: React.FC<PropsType> = ({contacts, messages}) => {
    return(
        <div className={styles.messenger}>
            <Contacts contacts={contacts}/>
            <MessagesBlock messages={messages}/>
        </div>
    )
}