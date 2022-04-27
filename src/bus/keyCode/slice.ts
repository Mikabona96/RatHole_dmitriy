// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    keyCode: null,
    key:     null,
};

export const keyCodeSlice = createSlice<types.KeyCodeState, typeof reducers>({
    name: 'keyCode',
    initialState,
    reducers,
});

export const sliceName = keyCodeSlice.name;
export const keyCodeActions = keyCodeSlice.actions;
export default keyCodeSlice.reducer;
