// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

import extraReducers from './extraReducers';

const initialState = {
    status:   'idle',
    error:    null,
    messages: [],
};

export const messagesSlice = createSlice<types.MessagesState, typeof reducers>({
    name: 'messages',
    initialState,
    reducers,
    extraReducers,
});

export const sliceName = messagesSlice.name;
export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
