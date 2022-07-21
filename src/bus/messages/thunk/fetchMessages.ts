// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Slice

// Tools
import { API_URL } from '../../../init/constants';

// Types
import { Messages } from '../types';


export const fetchMessages = createAsyncThunk<Messages, undefined, {rejectValue: string}>('FETCH_MESSAGES_ASYNC',
    async (_, { rejectWithValue }) => {
        const response = await fetch(`${API_URL}/messages`);

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        return response.json();
    });
