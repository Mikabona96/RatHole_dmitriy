// Types
import * as types from './types';

export const setKeyCode: types.BaseContact<types.KeyCode> = (state, action) => {
    state.keyCode = action.payload;
};
export const setKey: types.BaseContact<types.Key> = (state, action) => {
    state.key = action.payload;
};
export const setKeyDefault = () => {
    return {
        keyCode: null,
        key:     null,
    };
};
