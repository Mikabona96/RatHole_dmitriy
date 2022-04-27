// Core
import React, { FC } from 'react';
import { useKeyCode } from '../../../bus/keyCode';
import { useKeyboard } from '../../../tools/hooks/useKeyboard';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';


export const Keyboard: FC = () => {
    const { LayOut, toggleKeyboard, toggleLayout } = useKeyboard();
    const { keyCode, key } = useKeyCode();

    return (
        <S.LayOut>
            <S.FirstRow styles = { LayOut.firstRow.style }>
                {
                    LayOut.firstRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            return (
                                <S.Key
                                    colir = { k.code === keyCode }
                                    key = { k.key }>{k.key}
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
                            return (
                                <S.Key
                                    colir = { k.code === keyCode }
                                    key = { k.key }>{k.key}
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
                            return (
                                <S.Key
                                    colir = { k.code === keyCode }
                                    key = { k.key }>{k.key}
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
                            return (
                                <S.Key
                                    colir = { k.code === keyCode }
                                    key = { k.key }>{k.key}
                                </S.Key>
                            );
                        }

                        return <div></div>;
                    })
                }
            </S.FourthRow>
            <S.FifthRow styles = { LayOut.fifthRow.style }>
                {
                    LayOut.fifthRow.keys.map((k) => {
                        if (typeof k !== 'string') {
                            switch (k.key) {
                                case `${toggleKeyboard ? 'En' : 'Ru'}`:
                                    return (
                                        <S.Key
                                            colir = { k.code === keyCode }
                                            key = { k.key }
                                            onClick = { toggleLayout }>{k.key}

                                        </S.Key>
                                    );
                                default:
                                    return (
                                        <S.Key
                                            colir = { k.code === keyCode }
                                            key = { k.key }>{k.key}
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
