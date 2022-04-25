// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (state, action) => {
    state.user = action.payload;
};
export const clearUser: types.BaseContact<types.User> = (state, action) => {
    state.user = action.payload;
};
