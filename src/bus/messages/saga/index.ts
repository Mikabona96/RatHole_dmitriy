// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { sendMessageAction, watchSendMessage } from './sendMessage';
import { editMessageAction, watchEditMessage } from './editMessage';
import { deleteMessageAction, watchDeleteMessage } from './deleteMessage';

// Types
import * as types from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction()),
        sendMessage:   (message: types.SendMessage) => dispatch(sendMessageAction(message)),
        editMessage:   (message: types.editedMessage) => dispatch(editMessageAction(message)),
        deleteMessage: (id: string) => dispatch(deleteMessageAction(id)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages), call(watchSendMessage), call(watchEditMessage), call(watchDeleteMessage) ]);
}
