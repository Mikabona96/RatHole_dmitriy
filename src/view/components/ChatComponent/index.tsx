// Core
import React, { FC } from 'react';
import { useMessages } from '../../../bus/messages';
import { MessageComponent } from './MessageComponent';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const ChatComponent: FC<PropTypes> = () => {
    const { messages } = useMessages(true);

    return (
        <S.Chat>
            {
                messages?.map((message) => (
                    <MessageComponent
                        key = { message._id }
                        { ...message }
                    />
                ))
            }
        </S.Chat>
    );
};
