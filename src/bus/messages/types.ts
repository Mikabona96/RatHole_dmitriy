// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Message = {
    '_id': string,
    'username': string,
    'text': string,
    'createdAt': string,
    'updatedAt': string
}
export type message = {
    text: string
    username: string | undefined
}

export type editedMessage = {
    text: string,
    id: string | undefined
}

export type Messages = Array<Message>
export type MessagesState = {
    status: string,
    messages: Array<Message> | [],
    error: any
} | null

// Action types
export type ActionType = {[key: string]: any}

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>
