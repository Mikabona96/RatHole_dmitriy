// Tools
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';
import { messagesActions } from './slice';

// Thunk
import { useMessagesThunk } from './thunk';

// Types
import { Message } from './types';


const isDevMode = process.env.NODE_ENV === 'development';

export const useMessages = (isFetching?: true) => {
    const dispatch = useDispatch();
    const { editMessage, deleteMessage } = useMessagesSaga();
    const { fetchMessages, sendMessage } = useMessagesThunk();
    const messages = useSelector((state) => state.messages?.messages); // Add messages to ./src/init/redux/index.ts
    const createMessage = (message: Message) => dispatch(messagesActions.createMessage(message));

    useEffect(() => {
        isFetching && fetchMessages();
        const timerId = setInterval(() => isFetching && fetchMessages(), isDevMode ? 10000 : 2000);

        return () => clearInterval(timerId);
    }, []);

    return {
        messages,
        sendMessage,
        fetchMessages,
        editMessage,
        deleteMessage,
        createMessage,
    };
};
