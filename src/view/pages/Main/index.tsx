// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { MessageComponent } from '../../components/MessageComponent';

// Hooks
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';


const Main: FC = () => {
    const { messages } = useMessages();
    const { user, clearUser } = useUser();
    const { resetTogglersToInitial } = useTogglersRedux();

    const logOut = () => {
        localStorage.clear();
        clearUser();
        resetTogglersToInitial();
    };

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
            </S.Wrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
