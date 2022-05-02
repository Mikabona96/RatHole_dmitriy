// Core
import styled from 'styled-components';

export const LayOut = styled.div`
    margin-top: 3%;
    width: 100%;
`;
export const FirstRow = styled.div`
    display: grid;
    width: 100%;
    display: grid;
    grid-template: ${(props: {styles: string}) => props.styles ? props.styles : ''};
`;
export const SecondRow = styled.div`
    display: grid;
    width: 100%;
    display: grid;
    grid-template: ${(props: {styles: string}) => props.styles ? props.styles : ''}
`;
export const ThirdRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: ${(props: {styles: string}) => props.styles ? props.styles : ''};
`;
export const FourthRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: ${(props: {styles: string}) => props.styles ? props.styles : ''};
`;
export const FifthRow = styled.div`
    display: grid;
    width: 100%;
    grid-template: ${(props: {styles: string}) => props.styles ? props.styles : ''};
`;
export const Key = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(59, 58, 58);
    border-radius: 5px;
    background-color: ${(props: {colir: boolean}) => props.colir === true ? '#ff2f2f' : 'white'};
    cursor: pointer;
    user-select: none;
    color: ${(props: {colir: boolean}) => props.colir === true ? 'white' : 'black'};
    overflow-wrap: break-word;
    &:active {
        background-color: #ff2f2f;
        color: white;
    }
`;
