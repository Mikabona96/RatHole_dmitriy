// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Action
export const fetchMessagesAction = createAction(`${sliceName}/FETCH_MESSAGES_ASYNC`);

// Types
import { Messages } from '../types';

// Saga
const fetchMessages = (callAction: ReturnType<typeof fetchMessagesAction>) => makeRequest<Messages>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield console.log(result);
        yield put(messagesActions.setMessages(result));
    },
});

// Watcher
export function* watchFetchMessages(): SagaIterator {
    yield takeLatest(fetchMessagesAction.type, fetchMessages);
}
