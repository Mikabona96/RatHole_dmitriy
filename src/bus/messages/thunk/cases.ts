import { MessagesState } from '../types';

export const fetchMessagePending = (state: MessagesState) => {
    state!.status = 'loading';
    state!.error = null;
};

export const fetchMessageFullfiled = (state: MessagesState, action: any) => {
    state!.messages = action.payload;
    state!.status = 'idle';
    state!.error = null;
};

export const fetchMessageRejected = (state: MessagesState, action: any) => {
    state!.status = 'failed';
    state!.messages = [];
    state!.error = action.error;
};

export const sendMessagePending = (state: MessagesState) => {
    state!.status = 'loading';
    state!.error = null;
};

export const sendMessageFullfiled = (state: MessagesState, action: any) => {
    state!.messages = [ action.payload, ...state!.messages ];
    state!.status = 'idle';
    state!.error = null;
};

export const sendMessageRejected = (state: MessagesState, action: any) => {
    state!.status = 'failed';
    state!.messages = [];
    state!.error = action.error;
};
