// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';
import { messagesActions } from './slice';

import { Message } from './types';

export const useMessages = () => {
    const dispatch = useDispatch();
    const { fetchMessages, sendMessage, editMessage, deleteMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages.messages); // Add messages to ./src/init/redux/index.ts
    const message = useSelector((state) => state.messages.message); // Add messages to ./src/init/redux/index.ts
    const createMessage = (message: Message) => dispatch(messagesActions.createMessage(message));

    useEffect(() => {
        fetchMessages();
    }, []);

    return {
        messages,
        message,
        sendMessage,
        fetchMessages,
        editMessage,
        deleteMessage,
        createMessage,
    };
};
