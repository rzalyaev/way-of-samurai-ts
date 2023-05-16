import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                text: action.newPostText,
                likes: 0
            }
            state.posts = [...state.posts, newPost];
            return state;
        default: return state;
    }
}

export const addPostAC = (text: string) => ({type: ADD_POST, newPostText: text} as const);