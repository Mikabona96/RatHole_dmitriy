// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { API_URL } from '../../../init/constants';

// Action
export const fetchMessagesAction = createAction(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types

// Saga

function* makeReq():SagaIterator {
    const cats = yield call(() => fetch(`${API_URL}/messages`));
    const formattedCats = yield cats.json();
    yield put(messagesActions.setMessages(formattedCats));
}

// Watcher
export function* watchFetchMessages(): SagaIterator {
    yield takeLatest(fetchMessagesAction.type, makeReq);
}
