import React from "react";
import styles from "./PostsList.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../../redux/state";

type PropsType = {
    posts: PostType[]
}

export const PostsList: React.FC<PropsType> = ({posts}) => {
    const postsElements = posts.map(p => <Post key={p.id} {...p}/>)

    return(
        <div>
            {postsElements}
        </div>
    )
}