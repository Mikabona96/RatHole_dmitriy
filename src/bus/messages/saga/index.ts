// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { sendMessageAction, watchSendMessage } from './sendMessage';

// Types
import * as types from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction()),
        sendMessage:   (message: types.message) => dispatch(sendMessageAction(message)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages), call(watchSendMessage) ]);
}
