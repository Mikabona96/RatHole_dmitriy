// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';
import { messagesActions } from './slice';

import { Message } from './types';

export const useMessages = () => {
    const dispatch = useDispatch();
    const { fetchMessages, sendMessage, editMessage, deleteMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages); // Add messages to ./src/init/redux/index.ts
    const createMessage = (message: Message) => dispatch(messagesActions.createMessage(message));


    return {
        messages,
        sendMessage,
        fetchMessages,
        editMessage,
        deleteMessage,
        createMessage,
    };
};
