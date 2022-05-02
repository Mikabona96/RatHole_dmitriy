// Types
import * as types from './types';

export const setText: types.BaseContact<string> = (state, action) => {
    state.text += action.payload;
};
export const setChangedText: types.BaseContact<string> = (state, action) => {
    state.text = action.payload;
};
export const removeLetterFromText: types.BaseContactRemoveLetter = (state) => {
    state.text = state.text.substring(0, state.text.length - 1);
};
export const clearText: types.BaseContactRemoveLetter = (state) => {
    state.text = '';
};
