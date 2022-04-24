// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type username = string
export type userId = string | null

// State
export type User = {
    username: string,
    _id: string
}
export type UserState = {
    user: User | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
