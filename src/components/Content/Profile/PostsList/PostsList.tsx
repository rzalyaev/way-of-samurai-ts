import React from 'react';
import styles from './PostsList.module.css';
import {PostType} from '../../../../redux/store';
import Post from './Post/Post';

type PropsType = {
    posts: PostType[]
}

const PostsList = ({posts}: PropsType) => {
    const postsElements = posts.map(p => <Post key={p.id} {...p}/>);

    return(
        <div>
            {postsElements}
        </div>
    );
};

export default PostsList;