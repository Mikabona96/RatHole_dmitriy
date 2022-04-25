// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    state.messages = action.payload;
};
export const createMessage: types.BaseContact<types.Message> = (state, action) => {
    state.message = action.payload;
};
