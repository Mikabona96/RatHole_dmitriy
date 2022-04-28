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
            style: '30px / repeat(8, 1fr) 15%',
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
                { key: 'й', code: 81 },
                { key: 'ц', code: 87 },
                { key: 'у', code: 69 },
                { key: 'к', code: 82 },
                { key: 'е', code: 84 },
                { key: 'н', code: 89 },
                { key: 'г', code: 85 },
                { key: 'ш', code: 73 },
                { key: 'щ', code: 79 },
                { key: 'з', code: 80 },
                { key: 'х', code: 219 },
                { key: 'ъ', code: 221 },
            ],
            style: '30px / repeat(12, 1fr)',
        },
        thirdRow: {
            keys: [
                { key: 'ф', code: 65 },
                { key: 'ы', code: 83 },
                { key: 'в', code: 68 },
                { key: 'а', code: 70 },
                { key: 'п', code: 71 },
                { key: 'р', code: 72 },
                { key: 'о', code: 74 },
                { key: 'л', code: 75 },
                { key: 'д', code: 76 },
                { key: 'ж', code: 186 },
                { key: 'э', code: 222 },
            ],
            style: '30px / repeat(11, 1fr)',
        },
        fourthRow: {
            keys: [
                { key: 'Shift', code: 16 },
                { key: 'я', code: 90 },
                { key: 'ч', code: 88 },
                { key: 'с', code: 67 },
                { key: 'м', code: 86 },
                { key: 'и', code: 66 },
                { key: 'т', code: 78 },
                { key: 'ь', code: 77 },
                { key: 'б', code: 188 },
                { key: 'ю', code: 190 },
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


/////////////////////
// import { useTogglersRedux } from '../../bus/client/togglers';


// export const useKeyboard = () => {
//     const { togglersRedux: { toggleKeyboard }, setTogglerAction } = useTogglersRedux();
//     const enLayout = {
//         firstRow: {
//             keys:  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
//             codes: [ 49, 50, 51, 52, 53, 54, 55, 56, 57, 48 ],
//             style: '30px / repeat(10, 1fr)',
//         },
//         secondRow: {
//             keys:  [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
//             codes: [ 81, 87, 69, 82, 84, 89, 85, 73, 79, 80 ],
//             style: '30px / repeat(10, 1fr)',
//         },
//         thirdRow: {
//             keys:  [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
//             codes: [ 65, 83, 68, 70, 71, 72, 74, 75, 76 ],
//             style: '30px / repeat(9, 1fr)',
//         },
//         // fourthRow: {
//         //     keys:  [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace' ],
//         //     codes: [ 16, 90, 88, 67, 86, 66, 78, 77 ],
//         //     style: '30px / repeat(8, 1fr) 15%',
//         // },
//         fourthRow: {
//             keys:  [{ key: 'Shift', code: 16 }],
//             codes: [ 16, 90, 88, 67, 86, 66, 78, 77 ],
//             style: '30px / repeat(8, 1fr) 15%',
//         },
//         fifthRow: {
//             keys:  [ ',', 'En', 'Space', '.', 'Enter' ],
//             style: '30px / repeat(2, 1fr) 3fr repeat(2, 1fr)',
//         },
//     };

//     const ruLayout = {
//         firstRow: {
//             keys:  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
//             style: '30px / repeat(10, 1fr)',
//         },
//         secondRow: {
//             keys:  [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ' ],
//             style: '30px / repeat(12, 1fr)',
//         },
//         thirdRow: {
//             keys:  [ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э' ],
//             style: '30px / repeat(11, 1fr)',
//         },
//         fourthRow: {
//             keys:  [ 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'backspace' ],
//             style: '30px / repeat(11, 1fr)',
//         },
//         fifthRow: {
//             keys:  [ ',', 'Ru', 'Space', '.', 'Enter' ],
//             style: '30px / repeat(2, 1fr) 3fr repeat(2, 1fr)',
//         },
//     };
//     const LayOut = toggleKeyboard ? enLayout : ruLayout;

//     const toggleLayout = () => {
//         setTogglerAction({ type: 'toggleKeyboard', value: !toggleKeyboard });
//     };


//     return {
//         LayOut,
//         toggleLayout,
//         toggleKeyboard,
//     };
// };
