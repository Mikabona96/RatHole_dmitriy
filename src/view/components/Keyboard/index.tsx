// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyCode } from '../../../bus/keyCode';
import { useText } from '../../../bus/text';
import { useKeyboard } from '../../../tools/hooks/useKeyboard';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';


export const Keyboard: FC = () => {
    const { LayOut, toggleKeyboard, toggleLayout } = useKeyboard();
    const { keyCode } = useKeyCode();
    const { setTogglerAction, togglersRedux: { isShiftPressed }} = useTogglersRedux();
    const { dispatchText } = useText();

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
                                        dispatchText(k.key);
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
                                        if (isShiftPressed) {
                                            dispatchText(k.key.toUpperCase());
                                        } else {
                                            dispatchText(k.key);
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
                                        if (isShiftPressed) {
                                            dispatchText(k.key.toUpperCase());
                                        } else {
                                            dispatchText(k.key);
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
                                                setTogglerAction({ type: 'isShiftPressed', value: !isShiftPressed });
                                            } }>{k.key}
                                        </S.Key>
                                    );
                                case 'Backspace':
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }>{k.key}
                                        </S.Key>
                                    );
                                default:
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                if (isShiftPressed) {
                                                    dispatchText(k.key.toUpperCase());
                                                } else {
                                                    dispatchText(k.key);
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
                                                dispatchText(' ');
                                            } }>{k.key}
                                        </S.Key>
                                    );
                                default:
                                    return (
                                        <S.Key
                                            colir = { k.code === keycode }
                                            key = { k.key }
                                            onClick = { () => {
                                                if (isShiftPressed) {
                                                    dispatchText(k.key.toUpperCase());
                                                } else {
                                                    dispatchText(k.key);
                                                }
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
