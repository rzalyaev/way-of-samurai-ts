import React, {ChangeEvent, useState} from 'react';
import styles from './SendMessageForm.module.css';
import {ActionsTypes} from '../../../../../redux/store';
import {sendMessageAC} from '../../../../../redux/messenger-reducer';
import SendMessageForm from './SendMessageForm';

type PropsType = {
    dispatch: (action: ActionsTypes) => void
}

const SendMessageFormContainer = ({dispatch}: PropsType) => {
    const [messageText, setMessageText] = useState<string>('');

    const changeMessageText = (e: ChangeEvent<HTMLInputElement>) => setMessageText(e.currentTarget.value);

    const sendMessage = () => {
        dispatch(sendMessageAC(messageText));
        setMessageText('');
    }

    return (
        <SendMessageForm messageText={messageText}
                         changeMessageText={changeMessageText}
                         sendMessage={sendMessage}
        />
    );
};

export default SendMessageFormContainer;