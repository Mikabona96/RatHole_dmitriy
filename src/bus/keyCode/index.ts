// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { keyCodeActions } from './slice';


export const useKeyCode = () => {
    const dispatch = useDispatch();
    const keyCode = useSelector((state) => state.keyCode.keyCode); // Add keyCode to ./src/init/redux/index.ts
    const dispatchKeyCode = (key: number) => void dispatch(keyCodeActions.setKeyCode(key));
    const dispatchKeyRemove = () => void dispatch(keyCodeActions.setKeyDefault());

    return {
        keyCode,
        dispatchKeyCode,
        dispatchKeyRemove,
    };
};
