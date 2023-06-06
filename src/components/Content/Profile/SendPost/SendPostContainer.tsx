import React, {ChangeEvent, useState} from 'react';
import {ActionsTypes} from '../../../../redux/store';
import {addPostAC} from '../../../../redux/profile-reducer';
import SendPost from "./SendPost";

type PropsType = {
    dispatch: (action: ActionsTypes) => void
}

const SendPostContainer = ({dispatch}: PropsType) => {
    const [postText, setPostText] = useState<string>('');

    const changePostText = (e: ChangeEvent<HTMLInputElement>) => setPostText(e.currentTarget.value);

    const addPost = () => {
        dispatch(addPostAC(postText));
        setPostText('');
    }

    return(
        <SendPost postText={postText}
                  changePostText={changePostText}
                  addPost={addPost}
        />
    );
};

export default SendPostContainer;