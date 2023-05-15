import React from "react";
import styles from "./Messenger.module.css";
import Contacts from "./Contacts/Contacts";
import MessagesBlock from "./MessagesBlock/MessagesBlock";
import {ActionsTypes, ContactType, MessageType} from "../../../redux/store";

type PropsType = {
    contacts: ContactType[],
    messages: MessageType[],
    dispatch: (action: ActionsTypes) => void,
}

export const Messenger: React.FC<PropsType> = ({contacts, messages, dispatch}) => {
    return (
        <div className={styles.messenger}>
            <Contacts contacts={contacts}/>
            <MessagesBlock messages={messages} dispatch={dispatch}/>
        </div>
    )
}