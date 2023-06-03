import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';

const initialState = {
    profileInfo: {
        name: 'Ruslan',
        status: 'I love coding!',
        location: {
            country: 'Russia',
            city: 'Izhevsk'
        }
    },
    posts: [
        {id: 1, text: 'It is my first post.', likes: 0},
        {id: 2, text: 'It is my second post.', likes: 0},
        {id: 3, text: 'I love Metallica!', likes: 0},
        {id: 4, text: 'It is raining today.', likes: 0},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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