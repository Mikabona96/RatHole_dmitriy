// Tools
import { useEffect } from 'react';
import { useSelector } from '../../tools/hooks';

// Saga
// import { useMessagesSaga } from './saga';

// Thunk
import { useMessagesThunk } from './thunk';

const isDevMode = process.env.NODE_ENV === 'development';

export const useMessages = (isFetching?: true) => {
    // const { editMessage } = useMessagesSaga();
    const { fetchMessages, sendMessage, deleteMessage, editMessage } = useMessagesThunk();
    const messages = useSelector((state) => state.messages?.messages); // Add messages to ./src/init/redux/index.ts

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
    };
};
