import {ActionsTypes, MessengerPageType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState: MessengerPageType = {
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

export const messengerReducer = (state: MessengerPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                text: action.newMessageText,
                time: '10:42'
            }
            state.messages = [...state.messages, newMessage];
            return state;
        default: return state;
    }
}

export const sendMessageAC = (text: string) => ({type: SEND_MESSAGE, newMessageText: text} as const);