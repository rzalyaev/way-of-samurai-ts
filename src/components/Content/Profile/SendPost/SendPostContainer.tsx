import React, {ChangeEvent, useState} from 'react';
import {addPostAC} from '../../../../redux/profile-reducer';
import SendPost from './SendPost';
import {useDispatch} from "react-redux";

const SendPostContainer = () => {
    const dispatch = useDispatch();

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