// Core
import styled from 'styled-components';

export const LayOut = styled.div`
    margin-top: 3%;
    width: 100%;
`;
export const FirstRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: 30px / repeat(10, 1fr);
`;
export const SecondRow = styled.div`
    display: grid;
    width: 100%;
    display: grid;
    grid-template: 30px / repeat(12, 1fr);
`;
export const ThirdRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: 30px / repeat(11, 1fr);
`;
export const FourthRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: 30px / repeat(11, 1fr);
`;
export const FifthRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: 30px / repeat(2, 1fr) 3fr repeat(2, 1fr);
`;
export const Key = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(59, 58, 58);
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    user-select: none;
    &:active {
        background-color: #ff2f2f;
        color: white;
    }
`;

// for  EN layoiut
// // Core
// import styled from 'styled-components';

// export const LayOut = styled.div`
//     margin-top: 3%;
//     width: 100%;
// `;
// export const FirstRow = styled.div`
//     display: grid;
//     width: 100%;
//     display: grid;
//     grid-template: 30px / repeat(10, 1fr);
// `;
// export const SecondRow = styled.div`
//     display: grid;
//     width: 100%;
//     display: grid;
//     grid-template: 30px / repeat(10, 1fr);
// `;
// export const ThirdRow = styled.div`
//     display: grid;
//     width: 100%;
//     grid-template: 30px / repeat(9, 1fr);
// `;
// export const FourthRow = styled.div`
//     display: grid;
//     width: 100%;
//     grid-template: 30px / repeat(8, 1fr) 15%;
// `;
// export const FifthRow = styled.div`
//     display: grid;
//     width: 100%;
//     grid-template: 30px / repeat(2, 1fr) 3fr repeat(2, 1fr);
// `;
// export const Key = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 1px solid rgb(59, 58, 58);
//     border-radius: 5px;
//     background-color: white;
//     cursor: pointer;
//     user-select: none;
//     &:active {
//         background-color: #ff2f2f;
//         color: white;
//     }
// `;
