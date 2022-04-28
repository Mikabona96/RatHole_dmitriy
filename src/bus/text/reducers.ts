// Types
import * as types from './types';

export const setText: types.BaseContact<string> = (state, action) => {
    state.text += action.payload;
};
export const removeLetterFromText: types.BaseContactRemoveLetter = (state) => {
    state.text = state.text.slice(0, -1);
};
