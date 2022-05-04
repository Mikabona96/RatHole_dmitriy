// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    editText: '',
};

export const editingMessageTextSlice = createSlice<types.EditingMessageTextState, typeof reducers>({
    name: 'editingMessageText',
    initialState,
    reducers,
});

export const sliceName = editingMessageTextSlice.name;
export const editingMessageTextActions = editingMessageTextSlice.actions;
export default editingMessageTextSlice.reducer;
