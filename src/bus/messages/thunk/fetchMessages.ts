// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Slice
import { sliceName } from '../slice';

// Tools
import { API_URL } from '../../../init/constants';

export const fetchMessages = createAsyncThunk(`${sliceName}/FETCH_MESSAGES_ASYNC`, async () => {
    const response = await fetch(`${API_URL}/messages`);

    return response.json();
});
