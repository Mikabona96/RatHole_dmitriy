// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';
import { useKeyCode } from '../bus/keyCode';
import { useText } from '../bus/text';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const { setTogglerAction, togglersRedux: { isShiftPressed }} = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    const { dispatchKeyCode, dispatchKeyRemove } = useKeyCode();
    const { dispatchText, removeLetterFromText } = useText();

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
        window.addEventListener('keypress', (event) => {
            if (event.keyCode !== 13) {
                if (isShiftPressed) {
                    dispatchText(event.key.toUpperCase());
                } else {
                    dispatchText(event.key);
                }
                // console.log(event.keyCode);
            }
        });
        window.addEventListener('keydown', (event) => {
            dispatchKeyCode(event.keyCode);
            if (event.shiftKey) {
                setTogglerAction({ type: 'isShiftPressed', value: true });
            }
            if (event.keyCode === 8) {
                removeLetterFromText();
            }

            console.log(event.keyCode);
        });
        window.addEventListener('keyup', (event) => {
            dispatchKeyRemove();
            if (!event.shiftKey) {
                setTogglerAction({ type: 'isShiftPressed', value: false });
            }
        });
    }, []);


    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
