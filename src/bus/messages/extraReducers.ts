import { fetchMessages } from './thunk/fetchMessages';
import * as Cases from './thunk/cases';
import { sendMessage } from './thunk/sendMessage';
import { deleteMessage } from './thunk/deleteMessage';


export default (builder: any) => {
    builder
        .addCase(fetchMessages.pending, Cases.fetchMessagePending)
        .addCase(fetchMessages.fulfilled, Cases.fetchMessageFullfiled)
        .addCase(fetchMessages.rejected, Cases.fetchMessageRejected)
        .addCase(sendMessage.pending, Cases.sendMessagePending)
        .addCase(sendMessage.fulfilled, Cases.sendMessageFullfiled)
        .addCase(sendMessage.rejected, Cases.sendMessageRejected)
        .addCase(deleteMessage.pending, Cases.deleteMessagePending)
        .addCase(deleteMessage.fulfilled, Cases.deleteMessageFullfiled)
        .addCase(deleteMessage.rejected, Cases.deleteMessageRejected);
};
