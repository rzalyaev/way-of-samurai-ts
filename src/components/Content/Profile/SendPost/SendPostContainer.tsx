import React, {ChangeEvent, useContext, useState} from 'react';
import {addPostAC} from '../../../../redux/profile-reducer';
import SendPost from './SendPost';
import {StoreDispatchContext} from '../../../../redux/redux-store';

const SendPostContainer = () => {
    const dispatch = useContext(StoreDispatchContext);
    if (!dispatch) {
        throw new Error('useContext must be used within a MyContext.Provider');
    }

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