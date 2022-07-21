import { MessagesState } from '../types';

export const fetchMessagePending = (state: MessagesState) => {
    if (state) {
        state.status = 'loading';
    }
};
export const fetchMessageFullfiled = (state: MessagesState, action: any) => {
    if (state) {
        if (Array.isArray(action.payload)) {
            state.status = 'idle';
            state.messages = action.payload;
        } else {
            state.error = action.payload;
            state.status = 'failed';
        }
    }
};
