// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Text = string[]
export type TextState = {
    text: Text
}

// Contracts
export type BaseContact<T = any> = CaseReducer<TextState, PayloadAction<T>>
export type BaseContactRemoveLetter = CaseReducer<TextState, PayloadAction>
