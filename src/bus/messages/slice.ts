// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';
import { fetchMessages } from './thunk/fetchMessages';
import * as Cases from './thunk/cases';

const initialState = null;

export const messagesSlice = createSlice<types.MessagesState, typeof reducers>({
    name:          'messages',
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, Cases.fetchMessagePending)
            .addCase(fetchMessages.fulfilled, Cases.fetchMessageFullfiled);
    },
});

export const sliceName = messagesSlice.name;
export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
