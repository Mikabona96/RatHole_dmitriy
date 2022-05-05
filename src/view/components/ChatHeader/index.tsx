// Core
import React, { FC } from 'react';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const ChatHeader: FC<PropTypes> = () => {
    const { user, clearUser, resetTogglersToInitial } = useUser();
    const logOut = () => {
        localStorage.clear();
        clearUser();
        resetTogglersToInitial();
    };

    return (
        <S.Header>
            <p>Welcome, <S.Username>{user?.username}</S.Username>!</p>
            <S.Button onClick = { logOut }>LOGOUT</S.Button>
        </S.Header>
    );
};
