/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import moment from 'moment';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Assets
import del from '../../../assets/icons/del.svg';
import edit from '../../../assets/icons/ed.svg';

// Styles
import * as S from './styles';

// Components
import { PopUp } from './PopUp';

// Types
import { Message } from '../../../bus/messages/types';

export const MessageComponent: FC<Message> = (props) => {
    const { user } = useUser();
    const { editMessage, deleteMessage } = useMessages();
    const [ toggle, setToggle ] = useState(true);
    const [ value, setValue ] = useState(`${props?.text}`);
    const [ popUp, setPopUp ] = useState(false);

    const date = moment(props.createdAt).format('hh:mm:ss');
    const ref = useRef<HTMLInputElement | null>(null);
    const alignMessage = user?.username === props?.username;

    const editHandler = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener('keydown', () => {
            ref.current?.focus(); // change focus on message Editing
        });
    }, []);

    const DeleteHandler = () => {
        setPopUp(true);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onButtonSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const editedMessage = {
            text: value,
            id:   props?._id,
        };
        editMessage(editedMessage);
        setToggle(!toggle);
        event.currentTarget.reset();
    };

    return (
        <S.Container alignMessage = { alignMessage }>
            <S.Buttons alignMessage = { alignMessage }>
                <S.ButtonsWrapper>
                    <S.Delete onClick = { DeleteHandler }>
                        <img
                            alt = ''
                            src = { del }
                        />
                    </S.Delete>
                    <S.EditButton onClick = { editHandler }>
                        <img
                            alt = ''
                            src = { edit }
                        />
                    </S.EditButton>
                </S.ButtonsWrapper>
            </S.Buttons>
            <S.MessageWrapper toggle = { toggle }>
                <S.Username>
                    {props.username}
                </S.Username>
                <S.Text>
                    {props.text}
                </S.Text>
                <S.DateWrapper>
                    <S.Updated>
                        {props.createdAt !== props.updatedAt ? 'edited' : null}
                    </S.Updated>
                    <S.Date>
                        {date}
                    </S.Date>
                </S.DateWrapper>
            </S.MessageWrapper>
            {
                toggle === false ? <S.Edit onSubmit = { onButtonSubmit }>
                    <S.InputWrapper>
                        <input
                            ref = { ref }
                            type = 'text'
                            value = { value }
                            onChange = { onChangeInput }
                            onFocus = { (event: React.FocusEvent<HTMLInputElement, Element>) => {
                                event.currentTarget
                                    .setSelectionRange(
                                        event.currentTarget.value.length, event.currentTarget.value.length,
                                    );
                            }
                            }
                        />
                    </S.InputWrapper>
                    <S.Button
                        disabled = { value === '' }>Update
                    </S.Button>
                </S.Edit> : null
            }

            {
                popUp && <PopUp
                    deleteMessage = { deleteMessage }
                    id = { props._id }
                    setPopUp = { setPopUp }
                />
            }

        </S.Container>
    );
};
