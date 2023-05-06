import React from "react";
import styles from "./Messenger.module.css";
import Contacts from "./Contacts/Contacts";
import MessagesBlock from "./MessagesBlock/MessagesBlock";

export type ContactType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    text: string
}

export const Messenger = (props: any) => {
    const contacts: ContactType[] = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jenifer'},
        {id: 3, name: 'Brian'},
        {id: 4, name: 'Paul'},
        {id: 5, name: 'Rick'},
    ]

    const messages: MessageType[] = [
        {id: 1, text: 'How are you?'},
        {id: 1, text: `I'm fine!`},
        {id: 1, text: 'Hello!'},
    ]

    return(
        <div className={styles.messenger}>
            <Contacts contacts={contacts}/>
            <MessagesBlock messages={messages}/>
        </div>
    )
}