// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Thunk requests
import { fetchMessages } from './thunk/fetchMessages';
import { sendMessage } from './thunk/sendMessage';
import { deleteMessage } from './thunk/deleteMessage';
import { editMessage } from './thunk/editMessage';

// Thunk Cases
import * as Cases from './thunk/cases';

// Types
import { MessagesState } from './types';

// Extra reducers
export default (builder: ActionReducerMapBuilder<MessagesState>) => {
    builder
        // fetchMessages Cases
        .addCase(fetchMessages.pending, Cases.fetchMessagePending)
        .addCase(fetchMessages.fulfilled, Cases.fetchMessageFullfiled)
        .addCase(fetchMessages.rejected, Cases.fetchMessageRejected)
        // sendMessage Cases
        .addCase(sendMessage.pending, Cases.sendMessagePending)
        .addCase(sendMessage.fulfilled, Cases.sendMessageFullfiled)
        .addCase(sendMessage.rejected, Cases.sendMessageRejected)
        // deleteMessage Cases
        .addCase(deleteMessage.pending, Cases.deleteMessagePending)
        .addCase(deleteMessage.fulfilled, Cases.deleteMessageFullfiled)
        .addCase(deleteMessage.rejected, Cases.deleteMessageRejected)
        // editMessage Cases
        .addCase(editMessage.pending, Cases.editMessagePending)
        .addCase(editMessage.fulfilled, Cases.editMessageFullfiled)
        .addCase(editMessage.rejected, Cases.editMessageRejected);
};
