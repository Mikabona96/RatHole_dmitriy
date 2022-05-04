// Types
import * as types from './types';

export const setText: types.BaseContact<string> = (state, action) => {
    state.editText += action.payload;
};
export const setChangedText: types.BaseContact<string> = (state, action) => {
    state.editText = action.payload;
};
export const removeLetterFromText: types.BaseContactRemoveLetter = (state) => {
    state.editText = state.editText.substring(0, state.editText.length - 1);
};
export const clearText: types.BaseContactRemoveLetter = (state) => {
    state.editText = '';
};
