import { MessagesState } from '../types';

// FetchMessages cases
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

// SendMessage cases
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

// DeleteMessage cases
export const deleteMessagePending = (state: MessagesState) => {
    state!.status = 'loading';
    state!.error = null;
};

export const deleteMessageFullfiled = (state: MessagesState, action: any) => {
    state!.messages = state!.messages.filter((message) => message._id !== action.meta.arg);
    state!.status = 'idle';
    state!.error = null;
};

export const deleteMessageRejected = (state: MessagesState, action: any) => {
    state!.status = 'failed';
    state!.error = action.error;
};

// EditMessage cases
export const editMessagePending = (state: MessagesState) => {
    state!.status = 'loading';
    state!.error = null;
};

export const editMessageFullfiled = (state: MessagesState, action: any) => {
    const tempState = state!.messages.filter((message) => message._id !== action.payload._id);
    state!.messages = [ action.payload, ...tempState ];
    state!.status = 'idle';
    state!.error = null;
};

export const editMessageRejected = (state: MessagesState, action: any) => {
    state!.status = 'failed';
    state!.error = action.error;
};
