import React from 'react';
import styles from "./SendMessageForm.module.css";

const SendMessageForm = () => {
    return (
        <div className={styles.sendMessageForm}>
            <input type="text"/>
            <button>Send</button>
        </div>
    );
};

export default SendMessageForm;