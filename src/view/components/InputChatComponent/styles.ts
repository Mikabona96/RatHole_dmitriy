// Core
import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 4%;
`;
export const InputWrapper = styled.div`
    display: flex;
    width: 75%;
    align-content: center;
    input {
        width: 100%;
        border: 0;
        background-color: rgba(255,255,255, 0);
        color: black;
        font-size: 1rem;
        border-bottom: 2px solid #E84C3D;
        transition: all .2s ease-out;
        &:focus {
            color: black;
            border: none;
            outline: 0;
            outline-offset: 0;
            border-bottom: 2px solid #cd2b18;
        }
        &::selection {
            background: #ec6859;
            color: white;
        }
    }
`;
export const Button = styled.button`
    background-color: #E84C3D;
    padding: 2%;
    width: 20%;
    border: none;
    border-radius: 4%;
    color: white;
    cursor: pointer;
    transition: .5s;
    font-size: 1rem;
    overflow-wrap: break-word;
    &:hover {
        background-color: #f8483f;
    }
    &:disabled {
        background-color: #bc7a7a;
    }
`;
