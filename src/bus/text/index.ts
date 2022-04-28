// Core

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { textActions } from './slice';

// Saga

export const useText = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.text.text);
    const dispatchText = (letter: string) => dispatch(textActions.setText(letter));
    const removeLetterFromText = () => dispatch(textActions.removeLetterFromText());


    return {
        text,
        dispatchText,
        removeLetterFromText,
    };
};
