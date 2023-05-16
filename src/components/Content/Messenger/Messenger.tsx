import React from "react";
import styles from "./Messenger.module.css";
import Contacts from "./Contacts/Contacts";
import MessagesBlock from "./MessagesBlock/MessagesBlock";
import {ActionsTypes, MessengerPageType} from "../../../redux/store";

type PropsType = {
    messenger: MessengerPageType,
    dispatch: (action: ActionsTypes) => void,
}

export const Messenger: React.FC<PropsType> = ({messenger, dispatch}) => {
    return (
        <div className={styles.messenger}>
            <Contacts contacts={messenger.contacts}/>
            <MessagesBlock messages={messenger.messages} dispatch={dispatch}/>
        </div>
    )
}