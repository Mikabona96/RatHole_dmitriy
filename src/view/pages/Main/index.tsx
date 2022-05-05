// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { InputChatComponent } from '../../components/InputChatComponent';
import { Keyboard } from '../../components/Keyboard';

// Hooks

// Styles
import * as S from './styles';
import { ChatHeader } from '../../components/ChatHeader';
import { ChatComponent } from '../../components/ChatComponent';

const Main: FC = () => {
    const [ openKeyboard, setOpenKeyboard ] = useState(true);

    const openKeyuboardHandler = () => setOpenKeyboard(!openKeyboard);

    return (
        <S.Container>
            <S.Wrapper>
                <ChatHeader />
                <ChatComponent />
                <InputChatComponent />
                <S.OpenKeyboard onClick = { openKeyuboardHandler }>{openKeyboard ? 'CLOSE KEYBOARD' : 'OPEN KEYBOARD'}</S.OpenKeyboard>
                { openKeyboard && <Keyboard /> }
            </S.Wrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
