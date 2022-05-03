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
import { Message, editedMessage } from '../types';

// Action
export const editMessageAction = createAction<editedMessage>(`${sliceName}/EDIT_MESSAGE_ASYNC`);


// Saga
const editMessage = (callAction: ReturnType<typeof editMessageAction>) => makeRequest<Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload.id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload.text }),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.createMessage(result));
    },
});

// Watcher
export function* watchEditMessage(): SagaIterator {
    yield takeLatest(editMessageAction.type, editMessage);
}
