// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    _id?:       string,
    username:  string,
    text:      string,
    createdAt?: string,
    updatedAt?: string,
}

const message = {
    _id:       '62655ad63269f6bd6052d6ed',
    username:  'RAT:B4BB4',
    text:      '6te46te 4r6te4r6 te4r6te4r6te4r6te 4r6te4r 6te4r6te4r6te 4r6te4r6te4rr',
    createdAt: '2022-04-24T14:12:38.777Z',
    updatedAt: '2022-04-24T14:12:38.777Z',
};

export const MessageComponent: FC<PropTypes> = (props) => {
    const date = new Date(message.createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <S.Container>
            <S.Username>
                {props.username}
            </S.Username>
            <S.Text>
                {props.text}
            </S.Text>
            <S.Date>
                {`${hours}:${minutes}:${seconds}`}
            </S.Date>
        </S.Container>
    );
};
