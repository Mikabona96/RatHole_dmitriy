// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';
import { fetchMessages } from './thunk/fetchMessages';
import { sendMessage } from './thunk/sendMessage';
import * as Cases from './thunk/cases';

const initialState = {
    status:   'idle',
    error:    null,
    messages: [],
};

export const messagesSlice = createSlice<types.MessagesState, typeof reducers>({
    name:          'messages',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, Cases.fetchMessagePending)
            .addCase(fetchMessages.fulfilled, Cases.fetchMessageFullfiled)
            .addCase(fetchMessages.rejected, Cases.fetchMessageRejected)
            .addCase(sendMessage.pending, Cases.sendMessagePending)
            .addCase(sendMessage.fulfilled, Cases.sendMessageFullfiled)
            .addCase(sendMessage.rejected, Cases.sendMessageRejected);
    },
});

export const sliceName = messagesSlice.name;
export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
