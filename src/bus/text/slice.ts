// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    text: '',
};

export const textSlice = createSlice<types.TextState, typeof reducers>({
    name: 'text',
    initialState,
    reducers,
});

export const sliceName = textSlice.name;
export const textActions = textSlice.actions;
export default textSlice.reducer;
