// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Slice

// Tools
import { API_URL } from '../../../init/constants';

export const fetchMessages = createAsyncThunk('FETCH_MESSAGES_ASYNC', async () => {
    const response = await fetch(`${API_URL}/messages`);

    return response.json();
});
