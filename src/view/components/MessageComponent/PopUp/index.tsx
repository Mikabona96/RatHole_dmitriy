// Core
import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { FC, useRef } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>
    id: string
    deleteMessage: (id: string) => AsyncThunkAction<boolean, string, {
        rejectValue: string
    }>
}

export const PopUp: FC<PropTypes> = ({ setPopUp, deleteMessage, id }) => {
    const modalRef = useRef<HTMLElement | null>(null);

    return (
        <S.Container
            ref = { modalRef }
            onClick = { (event:React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (event.target === modalRef.current) {
                    setPopUp(false);
                }
            }
            }>
            <S.Wrapper>
                <h1>Do you want to delete this message?</h1>
                <S.Buttons>
                    <S.ButtonDel onClick = { () => deleteMessage(id) }>Delete</S.ButtonDel>
                    <S.ButtonCancel onClick = { () => setPopUp(false) }>Cancel</S.ButtonCancel>
                </S.Buttons>
            </S.Wrapper>
        </S.Container>
    );
};
