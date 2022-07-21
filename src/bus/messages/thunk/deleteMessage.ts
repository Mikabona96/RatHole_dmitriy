// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Slice

// Tools
import { API_URL } from '../../../init/constants';


export const deleteMessage = createAsyncThunk<boolean, string, {rejectValue: string}>('DELETE_MESSAGE_ASYNC',
    async (data, { rejectWithValue }) => {
        const response = await fetch(`${API_URL}/messages/${data}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return rejectWithValue('Something went wrong');
        }

        // The value we return becomes the `fulfilled` action payload
        const resultData = await response.json();

        return resultData;
    });
