// Core
import React, { FC, useState } from 'react';
import { useMessages } from '../../../bus/messages';
import { useText } from '../../../bus/text';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const InputChatComponent: FC<PropTypes> = () => {
    const { text } = useText();
    const { user } = useUser();
    const { sendMessage } = useMessages();

    const onButtonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage({
            text:     text,
            username: user?.username,
        });
        event.currentTarget.reset();
    };


    return (
        <S.Container onSubmit = { onButtonSubmit }>
            <S.InputWrapper>
                <input
                    type = 'text'
                    value = { text }
                    onChange = { (event) => {
                        console.log(event);
                    } }
                />
            </S.InputWrapper>
            <S.Button
                disabled = { text === '' }>SEND
            </S.Button>
        </S.Container>
    );
};
