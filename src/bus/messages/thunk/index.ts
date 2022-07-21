// Core
import { useDispatch } from 'react-redux';

// Types
import * as types from '../types';

import { fetchMessages } from './fetchMessages';
import { sendMessage } from './sendMessage';

export const useMessagesThunk = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessages()),
        sendMessage:   (message: types.message) => dispatch(sendMessage(message)),
    };
};
