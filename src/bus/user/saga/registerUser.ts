// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Types
import * as UserTypes from '../types';

// Action
export const registerUserAction = createAction<UserTypes.username>(`${sliceName}/FETCH_MESSAGES_ASYNC`);


// Saga
const registerUser = (callAction: ReturnType<typeof registerUserAction>) => makeRequest<UserTypes.User>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: callAction.payload }),
        }),
    },
    succes: function* (result) {
        yield put(userActions.setUser(result));
    },
});

// Watcher
export function* watchRegisterUser(): SagaIterator {
    yield takeLatest(registerUserAction.type, registerUser);
}
