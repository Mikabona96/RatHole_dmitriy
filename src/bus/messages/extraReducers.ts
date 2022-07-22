import { fetchMessages } from './thunk/fetchMessages';
import * as Cases from './thunk/cases';
import { sendMessage } from './thunk/sendMessage';
import { deleteMessage } from './thunk/deleteMessage';
import { editMessage } from './thunk/editMessage';


export default (builder: any) => {
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
