// Core
import React, { FC, useState } from 'react';
import { useMessages } from '../../../bus/messages';
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
    const [ value, setValue ] = useState('');
    const { user } = useUser();
    const { sendMessage } = useMessages();

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onButtonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage({
            text:     value,
            username: user?.username,
        });
        setValue('');
        event.currentTarget.reset();
    };

    return (
        <S.Container onSubmit = { onButtonSubmit }>
            <S.InputWrapper>
                <input
                    type = 'text'
                    value = { value }
                    onChange = { onChangeInput }
                />
            </S.InputWrapper>
            <S.Button
                disabled = { value === '' }>SENT
            </S.Button>
        </S.Container>
    );
};
