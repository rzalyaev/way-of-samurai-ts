import React, {ChangeEvent, useState} from 'react';
import {sendMessageAC} from '../../../../../redux/messenger-reducer';
import SendMessageForm from './SendMessageForm';
import {useDispatch} from "react-redux";

const SendMessageFormContainer = () => {
    const dispatch = useDispatch();

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