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
    const { text, dispatchChangedText, dispatchClearText } = useText();
    const { user } = useUser();
    const { sendMessage } = useMessages();
    const { setTogglerAction } = useTogglersRedux();
    const { dispatchKeyCode, dispatchKeyRemove } = useKeyCode();
    let inputRef = useRef<HTMLInputElement | null>(null);

    const onButtonSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage({
            text:     text,
            username: user?.username,
        });
        event.currentTarget.reset();
        dispatchClearText();
    };

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            dispatchKeyCode(event.keyCode);
            if (event.shiftKey) {
                setTogglerAction({ type: 'isShiftPressed', value: true });
            }
            inputRef.current?.focus();
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
                        dispatchChangedText(event.target.value);
                    } }
                />
            </S.InputWrapper>
            <S.Button
                disabled = { text === '' }>SEND
            </S.Button>
        </S.Container>
    );
};
