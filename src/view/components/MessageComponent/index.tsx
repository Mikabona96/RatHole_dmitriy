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

// Types
import { Message } from '../../../bus/messages/types';

export const MessageComponent: FC<Message> = (props) => {
    const { user } = useUser();
    const { message, editMessage, deleteMessage, createMessage  } = useMessages();
    const [ toggle, setToggle ] = useState(true);
    const [ value, setValue ] = useState(`${props?.text}`);

    const date = moment(props.createdAt).format('hh:mm:ss');
    const ref = useRef<HTMLInputElement | null>(null);
    const alignMessage = user?.username === props?.username;


    const editHandler = () => {
        createMessage(props);
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener('keydown', () => {
            ref.current?.focus(); // change focus on message Editing
        });
    }, []);

    const DeleteHandler = () => {
        createMessage(props); // its need to run UseEffect in Main/index.tsx // its create message in redux? and command below delete it immediately
        deleteMessage(props._id);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    const onButtonSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const editedMessage = {
            message: {
                text: value,
                id:   message?._id,
            },
        };
        setValue('');
        editMessage(editedMessage);
        setToggle(!toggle);
        event.currentTarget.reset();

        console.log(editedMessage);
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
                        />
                    </S.InputWrapper>
                    <S.Button
                        disabled = { value === '' }>Update
                    </S.Button>
                </S.Edit> : null
            }

        </S.Container>
    );
};
