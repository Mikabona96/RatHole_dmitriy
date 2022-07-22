// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Tools
import { API_URL } from '../../../init/constants';

// Types
import { editedMessage, Message } from '../types';

export const editMessage = createAsyncThunk<Message, editedMessage, {rejectValue: string}>('EDIT_MESSAGE_ASYNC',
    async (data, { rejectWithValue }) => {
        const response = await fetch(`${API_URL}/messages/${data.id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: data.text }),
        });

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        // The value we return becomes the `fulfilled` action payload
        const resultData = await response.json();

        return resultData;
    });
