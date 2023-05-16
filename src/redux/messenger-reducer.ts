import {ActionsTypes, MessengerPageType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE';

export const messengerReducer = (state: MessengerPageType, action: ActionsTypes) => {
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

export const sendMessageAC = (text: string) => ({type: SEND_MESSAGE, newMessageText: text} as const)