// Core

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { editingMessageTextActions } from './slice';

// Saga

export const useEditingMessageText = () => {
    const dispatch = useDispatch();
    const editedMessageText = useSelector((state) => state.editMessageText.editText);
    const dispatchEditText = (letter: string) => dispatch(editingMessageTextActions.setText(letter));
    const dispatchEditChangedText = (text: string) => dispatch(editingMessageTextActions.setChangedText(text));
    const dispatchEditClearText = () => dispatch(editingMessageTextActions.clearText());
    const dispatchEditRemoveLetterFromText = () => dispatch(editingMessageTextActions.removeLetterFromText());


    return {
        editedMessageText,
        dispatchEditRemoveLetterFromText,
        dispatchEditText,
        dispatchEditChangedText,
        dispatchEditClearText,
    };
};
