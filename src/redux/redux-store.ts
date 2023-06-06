import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messengerReducer} from './messenger-reducer';
import {createContext} from 'react';
import {ActionsTypes, RootStateType} from './store';

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer
});

let store = createStore(reducers);

export default store;

export const StoreContext = createContext<RootStateType | null>(null);
export const StoreDispatchContext = createContext<((action: ActionsTypes) => void) | null>(null);