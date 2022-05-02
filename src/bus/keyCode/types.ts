// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type KeyCode = number[]
export type Key = string
export type KeyCodeState = {
    keyCode: KeyCode
}

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyCodeState, PayloadAction<T>>
