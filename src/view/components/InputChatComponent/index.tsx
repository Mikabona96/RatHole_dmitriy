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
    const { sendMessage, message, messages } = useMessages();

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onButtonSubmit = () => {
        sendMessage({
            text:     value,
            username: user?.username,
        });
        setValue('');
    };

    return (
        <S.Container>
            <S.InputWrapper>
                <input
                    type = 'text'
                    value = { value }
                    onChange = { onChangeInput }
                />
            </S.InputWrapper>
            <S.Button onClick = { onButtonSubmit }>SENT</S.Button>
        </S.Container>
    );
};
