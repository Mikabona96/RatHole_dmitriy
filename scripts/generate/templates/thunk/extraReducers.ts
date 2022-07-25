// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Thunk requests
import {  __entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';


// Thunk Cases
import * as Cases from './cases';

// Types
import { __entityName__(pascalCase) } from '../types';

// Extra reducers
export default (builder: ActionReducerMapBuilder<__entityName__(pascalCase)>) => {
    builder
        // fetchMessages Cases
        .addCase(__entityName__(pascalCase).pending, Cases.fetchMessagePending)
        .addCase(__entityName__(pascalCase).fulfilled, Cases.fetchMessageFullfiled)
        .addCase(__entityName__(pascalCase).rejected, Cases.fetchMessageRejected)
        
};
