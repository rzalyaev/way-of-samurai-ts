import {profileReducer, addPostAC} from "./profile-reducer";
import {messengerReducer, sendMessageAC} from "./messenger-reducer";

// Profile page types --------------------------------------------------------------------------------------------------
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

// Messenger page types ------------------------------------------------------------------------------------------------
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

// State type ----------------------------------------------------------------------------------------------------------
export type RootStateType = {
    profilePage: ProfilePageType
    messengerPage: MessengerPageType
}

// Actions types -------------------------------------------------------------------------------------------------------
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof sendMessageAC>

// Store type ----------------------------------------------------------------------------------------------------------
export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    subscribe: (callback: (state: RootStateType) => void) => void,
    dispatch: (action: ActionsTypes) => void
}

let store: StoreType = {
    _state: {
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
    },
    getState() {
      return this._state;
    },
    _callSubscriber(state: RootStateType) {},
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.messengerPage =  messengerReducer(this._state.messengerPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;