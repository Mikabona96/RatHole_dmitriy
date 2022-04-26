/* eslint-disable react/no-unused-prop-types */
// Core
import moment from 'moment';
import React, { FC, useState } from 'react';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    _id?:       string,
    username:  string,
    text:      string,
    createdAt?: string,
    updatedAt?: string,
}


export const MessageComponent: FC<PropTypes> = (props) => {
    const date = moment(props.createdAt).format('hh:mm:ss');
    const { user } = useUser();
    const { message, editMessage, deleteMessage } = useMessages();

    const alignMessage = user?.username === props?.username;
    const editMessageProps = message?.text === props.text;
    const [ toggle, setToggle ] = useState(true);
    const [ value, setValue ] = useState(`${message?.text}`);

    const editHandler = () => {
        setToggle(!toggle);
    };

    const DeleteHandler = () => {
        deleteMessage(`${message?._id}`);
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
    };

    return (
        <S.Container alignMessage = { alignMessage }>
            <S.Buttons editMessageProps = { editMessageProps }>
                <button onClick = { DeleteHandler }>X</button>
                <button onClick = { editHandler }>E</button>
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
