// Core
import moment from 'moment';
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

export const MessageComponent: FC<PropTypes> = (props) => {
    const date = moment(props.createdAt).format('hh/mm/ss');

    return (
        <S.Container>
            <S.Username>
                {props.username}
            </S.Username>
            <S.Text>
                {props.text}
            </S.Text>
            <S.DateWrapper>
                <S.Updated>
                    {props.createdAt !== props.updatedAt ? 'edited' : null}
                </S.Updated>
                <S.Date>
                    {date}
                </S.Date>
            </S.DateWrapper>
        </S.Container>
    );
};
