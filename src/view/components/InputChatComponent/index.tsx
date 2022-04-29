// Core
import React, { FC, useEffect, useRef } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyCode } from '../../../bus/keyCode';
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
    const { text, dispatchChangedText } = useText();
    const { user } = useUser();
    const { sendMessage } = useMessages();
    const { setTogglerAction, togglersRedux: { isShiftPressed, isInputFocused }} = useTogglersRedux();
    const { dispatchKeyCode, dispatchKeyRemove } = useKeyCode();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onButtonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage({
            text:     text,
            username: user?.username,
        });
        event.currentTarget.reset();
    };
    if (isInputFocused === true) {
        inputRef.current?.focus();
    }
    useEffect(() => {
        // setTogglerAction({ type: 'isInputFocused', value: true });
        window.addEventListener('keydown', (event) => {
            dispatchKeyCode(event.keyCode);
            if (event.shiftKey) {
                setTogglerAction({ type: 'isShiftPressed', value: true });
            }
        });
        window.addEventListener('keyup', (event) => {
            dispatchKeyRemove();
            if (!event.shiftKey) {
                setTogglerAction({ type: 'isShiftPressed', value: false });
            }
        });
    }, []);


    return (
        <S.Container onSubmit = { onButtonSubmit }>
            <S.InputWrapper>
                <input
                    autoFocus
                    ref = { inputRef }
                    type = 'text'
                    value = { text }
                    onChange = { (event) => {
                        if (isShiftPressed) {
                            dispatchChangedText(event.target.value.toUpperCase());
                        } else {
                            dispatchChangedText(event.target.value);
                        }
                    } }
                />
            </S.InputWrapper>
            <S.Button
                disabled = { text === '' }>SEND
            </S.Button>
        </S.Container>
    );
};
