import React, {ChangeEvent} from 'react';
import styles from './SendMessageForm.module.css';

type PropsType = {
    messageText: string
    changeMessageText: (e: ChangeEvent<HTMLInputElement>) => void
    sendMessage: () => void
}

const SendMessageForm = ({messageText, changeMessageText, sendMessage}: PropsType) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => changeMessageText(e);
    const handleButtonClick = () => sendMessage();

    return (
        <div className={styles.sendMessageForm}>
            <input type="text" value={messageText} onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>Send</button>
        </div>
    );
};

export default SendMessageForm;