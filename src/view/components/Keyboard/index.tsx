// Core
import React, { FC } from 'react';

// Bus
import { useKeyCode } from '../../../bus/keyCode';
import { useText } from '../../../bus/text';
import { useEditingMessageText } from '../../../bus/editingMessageText';

// Hooks
import { useKeyboard } from '../../../tools/hooks/useKeyboard';

// Helpers
import { clickAsKeyboardEvent } from '../../../tools/helpers/clickAsKeyboardEvent';

// Styles
import * as S from './styles';

export const Keyboard: FC = () => {
    const { keyCode } = useKeyCode();
    const { dispatchText, dispatchRemoveLetterFromText } = useText();
    const { dispatchEditText, dispatchEditRemoveLetterFromText } = useEditingMessageText();
    const { LayOut, toggleKeyboard, toggleLayout, setTogglerAction, isShiftPressed, isSecondInput } = useKeyboard();

    return (
        <S.LayOut>
            <S.FirstRow styles = { LayOut.firstRow.style }>
                {
                    LayOut.firstRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            const keycode = keyCode.filter((keycode) => keycode === k.code)[ 0 ];

                            return (
                                <S.Key
                                    colir = { k.code === keycode }
                                    key = { k.key }
                                    onClick = { () => {
                                        clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                        !isSecondInput && dispatchText(k.key);
                                        isSecondInput && dispatchEditText(k.key);
                                    } }>{k.key}
                                </S.Key>
                            );
                        }

                        return <div></div>;
                    })
                }
            </S.FirstRow>
            <S.SecondRow styles = { LayOut.secondRow.style }>
                {
                    LayOut.secondRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            const keycode = keyCode.filter((keycode) => keycode === k.code)[ 0 ];

                            return (
                                <S.Key
                                    colir = { k.code === keycode }
                                    key = { k.key }
                                    onClick = { () => {
                                        clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                        if (isShiftPressed) {
                                            !isSecondInput && dispatchText(k.key.toUpperCase());
                                            isSecondInput && dispatchEditText(k.key.toUpperCase());
                                        } else {
                                            !isSecondInput && dispatchText(k.key);
                                            isSecondInput && dispatchEditText(k.key);
                                        }
                                    } }>{isShiftPressed ? k.key.toUpperCase() : k.key}
                                </S.Key>
                            );
                        }

                        return <div></div>;
                    })
                }
            </S.SecondRow>
            <S.ThirdRow styles = { LayOut.thirdRow.style }>
                {
                    LayOut.thirdRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            const keycode = keyCode.filter((keycode) => keycode === k.code)[ 0 ];

                            return (
                                <S.Key
                                    colir = { k.code === keycode }
                                    key = { k.key }
                                    onClick = { () => {
                                        clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                        if (isShiftPressed) {
                                            !isSecondInput && dispatchText(k.key.toUpperCase());
                                            isSecondInput && dispatchEditText(k.key.toUpperCase());
                                        } else {
                                            !isSecondInput && dispatchText(k.key);
                                            isSecondInput && dispatchEditText(k.key);
                                        }
                                    } }>{isShiftPressed ? k.key.toUpperCase() : k.key}
                                </S.Key>
                            );
                        }

                        return <div></div>;
                    })
                }
            </S.ThirdRow>
            <S.FourthRow styles = { LayOut.fourthRow.style }>
                {
                    LayOut.fourthRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            const keycode = keyCode.filter((keycode) => keycode === k.code)[ 0 ];
                            switch (k.key) {
                                case 'Shift':
                                    return (
                                        <S.Key
                                            colir = { isShiftPressed }
                                            key = { k.key }
                                            onClick = { () => {
                                                clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                                setTogglerAction({ type: 'isShiftPressed', value: !isShiftPressed });
                                            } }>{k.key}
                                        </S.Key>
                                    );
                                case 'Backspace':
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                                !isSecondInput && dispatchRemoveLetterFromText();
                                                isSecondInput && dispatchEditRemoveLetterFromText();
                                            } }>{k.key}
                                        </S.Key>
                                    );
                                default:
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                                if (isShiftPressed) {
                                                    !isSecondInput && dispatchText(k.key.toUpperCase());
                                                    isSecondInput && dispatchEditText(k.key.toUpperCase());
                                                } else {
                                                    !isSecondInput && dispatchText(k.key);
                                                    isSecondInput && dispatchEditText(k.key);
                                                }
                                            } }>{isShiftPressed ? k.key.toUpperCase() : k.key}
                                        </S.Key>
                                    );
                            }
                        }

                        return <div></div>;
                    })
                }
            </S.FourthRow>
            <S.FifthRow styles = { LayOut.fifthRow.style }>
                {
                    LayOut.fifthRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            const keycode = keyCode.filter((keycode) => keycode === k.code)[ 0 ];
                            switch (k.key) {
                                case `${toggleKeyboard ? 'En' : 'Ru'}`:
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { toggleLayout }>{k.key}
                                        </S.Key>
                                    );
                                case 'Enter':
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }>{k.key}
                                        </S.Key>
                                    );
                                case 'Space':
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                                !isSecondInput && dispatchText(' ');
                                                isSecondInput && dispatchEditText(' ');
                                            } }>{k.key}
                                        </S.Key>
                                    );
                                default:
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                clickAsKeyboardEvent({ key: k.key, code: `${k.code}` });
                                                !isSecondInput && dispatchText(k.key);
                                                isSecondInput && dispatchEditText(k.key);
                                            } }>{k.key}
                                        </S.Key>
                                    );
                            }
                        }

                        return <div></div>;
                    })
                }
            </S.FifthRow>
        </S.LayOut>
    );
};
