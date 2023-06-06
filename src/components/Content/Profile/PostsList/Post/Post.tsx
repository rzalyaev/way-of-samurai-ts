import React from 'react';
import styles from './Post.module.css';
import {PostType} from '../../../../../redux/store';

const Post = ({text, likes}: PostType) => {
    return(
        <div className={styles.post}>
            <img src="#" alt="user avatar small"/>
            <div>{text}</div>
            <button>Likes: {likes}</button>
        </div>
    );
};

export default Post;