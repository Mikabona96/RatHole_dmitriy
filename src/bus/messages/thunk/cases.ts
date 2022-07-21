import { MessagesState } from '../types';

export const fetchMessagePending = (state: MessagesState) => {
    if (state) {
        state.status = 'loading';
        state.messages = [];
        state.error = null;
    }
};

export const fetchMessageFullfiled = (state: MessagesState, action: any) => {
    if (Array.isArray(action.payload)) {
        state!.messages = action.payload;
        state!.status = 'idle';
        state!.error = null;
    } else {
        state!.error = action.payload;
        state!.status = 'failed';
        state!.messages = [];
    }
};
