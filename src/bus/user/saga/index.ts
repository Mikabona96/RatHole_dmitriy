// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { registerUserAction, watchRegisterUser } from './registerUser';
import { refreshUserAction, watchRefreshUser } from './refreshUser';

//Types
import * as UserTypes from '../types';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        userRegister: (username: UserTypes.username) => void dispatch(registerUserAction(username)),
        refreshUser:  () =>  {
            const userId = localStorage.getItem('userId');
            userId && dispatch(refreshUserAction(JSON.parse(userId)));
        },
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchRegisterUser), call(watchRefreshUser) ]);
}
