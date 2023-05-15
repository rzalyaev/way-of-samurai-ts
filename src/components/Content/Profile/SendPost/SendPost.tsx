import React, {ChangeEvent, useState} from "react";
import styles from "./SendPost.module.css";
import {ActionsTypes, addPostAC} from "../../../../redux/store";

type PropsType = {
    dispatch: (action: ActionsTypes) => void
}

export const SendPost: React.FC<PropsType> = ({dispatch}) => {
    const [postText, setPostText] = useState<string>('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPostText(e.currentTarget.value);
    }

    const onClickHandler = () => {
        dispatch(addPostAC(postText));
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