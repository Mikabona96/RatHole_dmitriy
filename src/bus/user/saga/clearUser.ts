// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Types
// import * as UserTypes from '../types';

// Action
export const clearUserAction = createAction(`${sliceName}/CLEAR_USER_ASYNC`);


// Saga
function* clearUser () {
    yield put(userActions.clearUser(null));
}

// Watcher
export function* watchClearUser(): SagaIterator {
    yield takeLatest(clearUserAction.type, clearUser);
}
