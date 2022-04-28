// Types
import * as types from './types';

export const setKeyCode: types.BaseContact<number> = (state, action) => {
    if (state.keyCode.length > 1) {
        state.keyCode = [ ...state.keyCode, action.payload ].filter((k) => k !== action.payload);
    }
    state.keyCode = [ ...state.keyCode, action.payload ];
};

export const setKeyDefault = () => {
    return {
        keyCode: [],
    };
};
