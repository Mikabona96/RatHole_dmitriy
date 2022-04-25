// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { fetchMessages, sendMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages.messages); // Add messages to ./src/init/redux/index.ts
    const message = useSelector((state) => state.messages.message); // Add messages to ./src/init/redux/index.ts

    useEffect(() => {
        fetchMessages();
    }, [ message ]);

    return {
        messages,
        message,
        sendMessage,
        fetchMessages,
    };
};
