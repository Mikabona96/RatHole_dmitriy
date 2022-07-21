// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Slice

// Tools
import { API_URL } from '../../../init/constants';

// Types
import { message, Message } from '../types';

export const sendMessage = createAsyncThunk<Message, message, {rejectValue: string}>('SEND_MESSAGE_ASYNC',
    async (data, { rejectWithValue }) => {
        const response = await fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        // The value we return becomes the `fulfilled` action payload
        const resultData = await response.json();

        return resultData;
    });
