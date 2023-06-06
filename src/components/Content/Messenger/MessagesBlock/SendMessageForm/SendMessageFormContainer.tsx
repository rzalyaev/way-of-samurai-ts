import React, {ChangeEvent, useContext, useState} from 'react';
import {sendMessageAC} from '../../../../../redux/messenger-reducer';
import SendMessageForm from './SendMessageForm';
import {StoreDispatchContext} from '../../../../../redux/redux-store';

const SendMessageFormContainer = () => {
    const dispatch = useContext(StoreDispatchContext);
    if (!dispatch) {
        throw new Error('useContext must be used within a MyContext.Provider');
    }

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