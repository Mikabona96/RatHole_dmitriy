// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

const enLayout = {
    firstRow:  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
    secondRow: [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    thirdRow:  [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    fourthRow: [ 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace' ],
    fifthRow:  [ ',', 'En', 'Space', '.', 'Enter' ],
};
const ruLayout = {
    firstRow:  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
    secondRow: [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ' ],
    thirdRow:  [ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э' ],
    fourthRow: [ 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'backspace' ],
    fifthRow:  [ ',', 'Ru', 'Space', '.', 'Enter' ],
};

export const Keyboard: FC = () => {
    return (
        <S.LayOut>
            <S.FirstRow>
                {
                    ruLayout.firstRow.map((k) => <S.Key key = { k }>{k}</S.Key>)
                }
            </S.FirstRow>
            <S.SecondRow>
                {
                    ruLayout.secondRow.map((k) => <S.Key key = { k }>{k}</S.Key>)
                }
            </S.SecondRow>
            <S.ThirdRow>
                {
                    ruLayout.thirdRow.map((k) => <S.Key key = { k }>{k}</S.Key>)
                }
            </S.ThirdRow>
            <S.FourthRow>
                {
                    ruLayout.fourthRow.map((k) => <S.Key key = { k }>{k}</S.Key>)
                }
            </S.FourthRow>
            <S.FifthRow>
                {
                    ruLayout.fifthRow.map((k) => <S.Key key = { k }>{k}</S.Key>)
                }
            </S.FifthRow>
        </S.LayOut>
    );
};
