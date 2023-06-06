import React, {ChangeEvent} from 'react';
import styles from './SendPost.module.css';

type PropsType = {
    postText: string
    changePostText: (e: ChangeEvent<HTMLInputElement>) => void
    addPost: () => void
}

const SendPost = ({postText, changePostText, addPost}: PropsType) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => changePostText(e);
    const handleButtonClick = () => addPost();

    return(
        <div>
            <h3>Send Post Component</h3>
            <input type="textarea" value={postText} onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>Send Post</button>
        </div>
    );
};

export default SendPost;