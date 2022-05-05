// Core
import React, { FC, useEffect, useRef } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyCode } from '../../../bus/keyCode';
import { useMessages } from '../../../bus/messages';
import { useText } from '../../../bus/text';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const InputChatComponent: FC = () => {
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

    const keyDownListener = (event: KeyboardEvent) => {
        dispatchKeyCode(event.keyCode);
        if (event.shiftKey) {
            setTogglerAction({ type: 'isShiftPressed', value: true });
        }
        inputRef.current?.focus();
        inputRef.current?.selectionEnd;
    };
    const keyUpListener = (event: KeyboardEvent) => {
        dispatchKeyRemove(event.keyCode);
        if (!event.shiftKey) {
            setTogglerAction({ type: 'isShiftPressed', value: false });
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', keyDownListener);
        window.addEventListener('keyup', keyUpListener);
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
                    onFocus = { (event: React.FocusEvent<HTMLInputElement, Element>) => {
                        event.currentTarget
                            .setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length);
                    }
                    }
                />
            </S.InputWrapper>
            <S.Button
                disabled = { text === '' }>SEND
            </S.Button>
        </S.Container>
    );
};
