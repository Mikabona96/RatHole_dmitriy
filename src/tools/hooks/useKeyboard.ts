import { useTogglersRedux } from '../../bus/client/togglers';


export const useKeyboard = () => {
    const { togglersRedux: { toggleKeyboard }, setTogglerAction } = useTogglersRedux();
    const enLayout = {
        firstRow: {
            keys: [
                { key: '1', code: 49 },
                { key: '2', code: 50 },
                { key: '3', code: 51 },
                { key: '4', code: 52 },
                { key: '5', code: 53 },
                { key: '6', code: 54 },
                { key: '7', code: 55 },
                { key: '8', code: 56 },
                { key: '9', code: 57 },
                { key: '0', code: 48 },
            ],
            style: '30px / repeat(10, 1fr)',
        },
        secondRow: {
            keys: [
                { key: 'q', code: 81 },
                { key: 'w', code: 87 },
                { key: 'e', code: 69 },
                { key: 'r', code: 82 },
                { key: 't', code: 84 },
                { key: 'y', code: 89 },
                { key: 'u', code: 85 },
                { key: 'i', code: 73 },
                { key: 'o', code: 79 },
                { key: 'p', code: 80 },
            ],
            style: '30px / repeat(10, 1fr)',
        },
        thirdRow: {
            keys: [
                { key: 'a', code: 65 },
                { key: 's', code: 83 },
                { key: 'd', code: 68 },
                { key: 'f', code: 70 },
                { key: 'g', code: 71 },
                { key: 'h', code: 72 },
                { key: 'j', code: 74 },
                { key: 'k', code: 75 },
                { key: 'l', code: 76 },

            ],
            style: '30px / repeat(9, 1fr)',
        },
        fourthRow: {
            keys: [
                { key: 'Shift', code: 16 },
                { key: 'z', code: 90 },
                { key: 'x', code: 88 },
                { key: 'c', code: 67 },
                { key: 'v', code: 86 },
                { key: 'b', code: 66 },
                { key: 'n', code: 78 },
                { key: 'm', code: 77 },
                { key: 'Backspace', code: 8 },
            ],
            style: '30px / repeat(9, 1fr)',
        },
        fifthRow: {
            keys: [
                { key: ',', code: 188 },
                { key: 'En', code: 190454634 },
                { key: 'Space', code: 32 },
                { key: '.', code: 190 },
                { key: 'Enter', code: 13 },
            ],
            style: '30px / repeat(2, 1fr) 3fr repeat(2, 1fr)',
        },
    };

    const ruLayout = {
        firstRow: {
            keys: [
                { key: '1', code: 49 },
                { key: '2', code: 50 },
                { key: '3', code: 51 },
                { key: '4', code: 52 },
                { key: '5', code: 53 },
                { key: '6', code: 54 },
                { key: '7', code: 55 },
                { key: '8', code: 56 },
                { key: '9', code: 57 },
                { key: '0', code: 48 },
            ],
            style: '30px / repeat(10, 1fr)',
        },
        secondRow: {
            keys: [
                { key: '??', code: 81 },
                { key: '??', code: 87 },
                { key: '??', code: 69 },
                { key: '??', code: 82 },
                { key: '??', code: 84 },
                { key: '??', code: 89 },
                { key: '??', code: 85 },
                { key: '??', code: 73 },
                { key: '??', code: 79 },
                { key: '??', code: 80 },
                { key: '??', code: 219 },
                { key: '??', code: 221 },
            ],
            style: '30px / repeat(12, 1fr)',
        },
        thirdRow: {
            keys: [
                { key: '??', code: 65 },
                { key: '??', code: 83 },
                { key: '??', code: 68 },
                { key: '??', code: 70 },
                { key: '??', code: 71 },
                { key: '??', code: 72 },
                { key: '??', code: 74 },
                { key: '??', code: 75 },
                { key: '??', code: 76 },
                { key: '??', code: 186 },
                { key: '??', code: 222 },
            ],
            style: '30px / repeat(11, 1fr)',
        },
        fourthRow: {
            keys: [
                { key: 'Shift', code: 16 },
                { key: '??', code: 90 },
                { key: '??', code: 88 },
                { key: '??', code: 67 },
                { key: '??', code: 86 },
                { key: '??', code: 66 },
                { key: '??', code: 78 },
                { key: '??', code: 77 },
                { key: '??', code: 188 },
                { key: '??', code: 190 },
                { key: 'Backspace', code: 8 },
            ],
            style: '30px / repeat(11, 1fr)',
        },
        fifthRow: {
            keys: [
                { key: ',', code: 188 },
                { key: 'Ru', code: 190454634 },
                { key: 'Space', code: 32 },
                { key: '.', code: 190 },
                { key: 'Enter', code: 13 },
            ],
            style: '30px / repeat(2, 1fr) 3fr repeat(2, 1fr)',
        },
    };
    const LayOut = toggleKeyboard ? enLayout : ruLayout;

    const toggleLayout = () => {
        setTogglerAction({ type: 'toggleKeyboard', value: !toggleKeyboard });
    };


    return {
        LayOut,
        toggleLayout,
        toggleKeyboard,
    };
};
