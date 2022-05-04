// Core
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { MessageComponent } from '../../components/MessageComponent';
import { InputChatComponent } from '../../components/InputChatComponent';
import { Keyboard } from '../../components/Keyboard';

// Hooks
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { messages } = useMessages(true);
    const { user, clearUser } = useUser();
    const { resetTogglersToInitial } = useTogglersRedux();
    const [ openKeyboard, setOpenKeyboard ] = useState(true);

    const logOut = () => {
        localStorage.clear();
        clearUser();
        resetTogglersToInitial();
    };

    const openKeyuboardHandler = () => setOpenKeyboard(!openKeyboard);

    return (
        <S.Container>
            <S.Wrapper>
                <S.Header>
                    <p>Welcome, <S.Username>{user?.username}</S.Username>!</p>
                    <S.Button onClick = { logOut }>LOGOUT</S.Button>
                </S.Header>
                <S.Chat>
                    {
                        messages?.map((message) => (
                            <MessageComponent
                                key = { message._id }
                                { ...message }
                            />
                        ))
                    }
                </S.Chat>
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
