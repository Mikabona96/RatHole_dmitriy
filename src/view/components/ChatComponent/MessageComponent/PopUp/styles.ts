// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;
export const Wrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    width: 20%;
    height: 10%;
    transform: translate(-50%, -30%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
    border-radius: 5px;
    background-color: white;

    h1 {
        text-align: center;
    }
`;
export const Buttons = styled.div`
    display: flex;
    margin-top: 5%;
    width: 40%;
    justify-content: space-between;
`;

export const ButtonDel = styled.button`
        background-color: #E84C3D;
        padding: 4%;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        transition: .5s;
        &:hover {
            background-color: #f8483f;
        }        
    `;

export const ButtonCancel = styled(ButtonDel)`
        background-color: #5b5b5b;
        &:hover {
            background-color: #868686;
        }        
    `;
