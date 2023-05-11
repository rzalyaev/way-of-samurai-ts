// Profile page types
export type LocationType = {
    country: string
    city: string
}
export type ProfileInfoType = {
    name: string
    status: string
    location: LocationType
}
export type PostType = {
    id: number
    text: string
    likes: number
}
export type ProfilePageType = {
    profileInfo: ProfileInfoType
    posts: PostType[]
}

// Messenger page types
export type ContactType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
    time: string
}
export type MessengerPageType = {
    contacts: ContactType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    messengerPage: MessengerPageType
}

export const state: RootStateType = {
    profilePage: {
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
    },
    messengerPage: {
        contacts: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jenifer'},
            {id: 3, name: 'Brian'},
            {id: 4, name: 'Paul'},
            {id: 5, name: 'Rick'},
        ],
        messages: [
            {id: 1, text: 'Hello!', time: '09:03'},
            {id: 2, text: 'How are you?', time: '09:05'},
            {id: 3, text: `I'm fine!`, time: '09:07'},
        ]
    }
}

export const addPost = (newPostText: string) => {
    let newPost = {
        id: new Date().getTime(),
        text: newPostText,
        likes: 0
    }
    state.profilePage.posts = [...state.profilePage.posts, newPost];
    rerenderEntireTree();
}

let rerenderEntireTree = () => {}


export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}