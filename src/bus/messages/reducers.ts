// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    state.messages = action.payload;
};
