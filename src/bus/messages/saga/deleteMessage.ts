// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Types
import { Message } from '../types';

// Action
export const deleteMessageAction = createAction<string>(`${sliceName}/DELETE_MESSAGE_ASYNC`);


// Saga
const deleteMessage = (callAction: ReturnType<typeof deleteMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* () {
        yield put(messagesActions.deleteMessage(callAction.payload));
    },
});

// Watcher
export function* watchDeleteMessage(): SagaIterator {
    yield takeLatest(deleteMessageAction.type, deleteMessage);
}
