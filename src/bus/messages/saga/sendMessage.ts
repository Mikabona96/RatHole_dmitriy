// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest, call } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { API_URL } from '../../../init/constants';

// Types
import { message } from '../types';

// Action
export const sendMessageAction = createAction<message>(`${sliceName}/SEND_MESSAGE_ASYNC`);


// Saga

function* makeReq(callAction: ReturnType<typeof sendMessageAction>):SagaIterator {
    const message = yield call(() => fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(callAction.payload),
    }));
    const formattedMessage = yield message.json();
    yield put(messagesActions.addMessage(formattedMessage));
}

// Watcher
export function* watchSendMessage(): SagaIterator {
    yield takeLatest(sendMessageAction.type, makeReq);
}
