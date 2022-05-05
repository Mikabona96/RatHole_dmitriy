/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// Bus
import { useMessages } from '../../../../bus/messages';
import { useUser } from '../../../../bus/user';
import { useEditingMessageText } from '../../../../bus/editingMessageText';


// Styles
import * as S from './styles';

// Components
import { PopUp } from './PopUp';

// Types
import { Message } from '../../../../bus/messages/types';

export const MessageComponent: FC<Message> = (props) => {
    const { user } = useUser();
    const [ toggle, setToggle ] = useState(true);
    const [ popUp, setPopUp ] = useState(false);
    const { editMessage, deleteMessage, isSecondInput, setTogglerAction } = useMessages();
    const {
        editedMessageText,
        dispatchEditText,
        dispatchEditChangedText,
        dispatchEditClearText,
    } = useEditingMessageText();

    const date = moment(props.createdAt).format('hh:mm:ss');
    const ref = useRef<HTMLInputElement | null>(null);
    const alignMessage = user?.username === props?.username;

    const editHandler = () => {
        setTogglerAction({ type: 'isSecondInput', value: !isSecondInput });
        setToggle(!toggle);
        !isSecondInput && dispatchEditText(props.text);
        dispatchEditClearText();
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
        dispatchEditChangedText(event.target.value);
    };

    const onButtonSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const editedMessage = {
            text: editedMessageText,
            id:   props?._id,
        };
        editMessage(editedMessage);
        setToggle(!toggle);
        dispatchEditClearText();
        event.currentTarget.reset();
        setTogglerAction({ type: 'isSecondInput', value: false });
    };

    return (
        <S.Container alignMessage = { alignMessage }>
            <S.Buttons alignMessage = { alignMessage }>
                <S.ButtonsWrapper>
                    <S.Delete onClick = { DeleteHandler }>
                        <FontAwesomeIcon
                            color = 'black'
                            icon = { faTrash } />
                    </S.Delete>
                    <S.EditButton onClick = { editHandler }>
                        <FontAwesomeIcon
                            color = 'black'
                            icon = { faPencilAlt } />
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
                            value = { editedMessageText !== '' ?  editedMessageText : props.text }
                            onChange = { onChangeInput }
                            onFocus = { (event: React.FocusEvent<HTMLInputElement, Element>) => {
                                event.currentTarget.selectionEnd;
                            }
                            }
                        />
                    </S.InputWrapper>
                    <S.Button
                        disabled = { editedMessageText === '' }>Update
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
