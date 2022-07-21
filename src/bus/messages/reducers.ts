// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    // return action.payload;
};
export const addMessage: types.BaseContact<types.Message> = (state, action) => {
    // if (state) {
    //     return [ action.payload, ...state ];
    // }

    // return state;
};
export const createMessage: types.BaseContact<types.Message> = (state, action) => {
    // if (state !== null) {
    //     return state.map((message) => message._id === action.payload._id ? action.payload : message);
    // }

    // return state;
};
export const deleteMessage: types.BaseContact<string> = (state, action) => {
    // return state?.filter((message) => message._id !== action.payload);
};

