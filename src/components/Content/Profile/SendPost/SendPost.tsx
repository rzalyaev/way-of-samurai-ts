import React, {ChangeEvent, useState} from "react";
import styles from "./SendPost.module.css";

type PropsType = {
    addPost: (newPostText: string) => void
}

export const SendPost: React.FC<PropsType> = ({addPost}) => {
    const [postText, setPostText] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPostText(e.currentTarget.value);
    }

    const onClickHandler = () => {
        addPost(postText);
        setPostText('');
    }

    return(
        <div>
            <h3>Send Post Component</h3>
            <input type="textarea" value={postText} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Send Post</button>
        </div>
    )
}