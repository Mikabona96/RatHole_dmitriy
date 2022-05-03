/* eslint-disable id-blacklist */
// Core
import React, { FC, useEffect, useState } from 'react';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';

// Bus
import { useUser } from '../../../bus/user';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { v4 as uuidv4 } from 'uuid';
// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const RegistrationPage: FC = () => {
    const [ , setValue ] = useLocalStorage('userId', '');
    const { setTogglerAction } = useTogglersRedux();
    const [ inputValue, setInputValue ] = useState(`USER: ${uuidv4().slice(0, 5)}`);
    const { user, userRegister } = useUser();

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userRegister(inputValue);
        e.currentTarget.reset();
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (user) {
            setValue(user._id);
            setTogglerAction({ type: 'isLoggedIn', value: true });
        }
    }, [ user ]);

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form onSubmit = { onFormSubmit }>
                    <p>Enter your name:</p>
                    <input
                        type = 'text'
                        value = { inputValue }
                        onChange = { onInputChange }
                    />
                    <S.Button disabled = { inputValue === '' }>Register!</S.Button>
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationPage />
    </ErrorBoundary>
);
