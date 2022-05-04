// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import user from '../../bus/user/slice';
import messages from '../../bus/messages/slice';
import keyCode from '../../bus/keyCode/slice';
import text from '../../bus/text/slice';
import editMessageText from '../../bus/editingMessageText/slice';

// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        user,
        messages,
        keyCode,
        text,
        editMessageText,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
