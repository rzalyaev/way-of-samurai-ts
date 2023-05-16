import React, {ChangeEvent, FC, useState} from 'react';
import styles from "./SendMessageForm.module.css";
import {ActionsTypes} from "../../../../../redux/store";
import {sendMessageAC} from "../../../../../redux/messenger-reducer";

type PropsType = {
    dispatch: (action: ActionsTypes) => void,
}

const SendMessageForm: FC<PropsType> = ({dispatch}) => {
    const [messageText, setMessageText] = useState<string>('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessageText(e.currentTarget.value);
    }

    const handleOnClick = () => {
        dispatch(sendMessageAC(messageText));
        setMessageText('');
    }

    return (
        <div className={styles.sendMessageForm}>
            <input type="text" value={messageText} onChange={handleOnChange}/>
            <button onClick={handleOnClick}>Send</button>
        </div>
    );
};

export default SendMessageForm;