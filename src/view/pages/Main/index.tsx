// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { MessageComponent } from '../../components/MessageComponent';

// Hooks
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';


const Main: FC = () => {
    const { messages } = useMessages();
    const { user } = useUser();

    const logOut = () => {
        localStorage.clear();
        location.reload();
    };

    return (
        <S.Container>
            <main>
                <S.Header>
                    <p>Welcome, <S.Username>{user?.username}</S.Username>!</p>
                    <button onClick = { logOut }>LOGOUT</button>
                </S.Header>
                <S.Chat>
                    {
                        messages?.map((message) => (
                            <MessageComponent  { ...message }/>
                        ))
                    }
                </S.Chat>
            </main>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
