// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type EditingMessageText = string
export type EditingMessageTextState = {
    editText: EditingMessageText
}

// Contracts
export type BaseContact<T = any> = CaseReducer<EditingMessageTextState, PayloadAction<T>>
export type BaseContactRemoveLetter = CaseReducer<EditingMessageTextState, PayloadAction>
