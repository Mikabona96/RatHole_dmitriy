// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: inline-block;
    flex-direction: column;
    width: 200px;
    padding: 2%;
    background: #ebebe2;
    border-radius: 7px;
    white-space: pre-wrap;
    text-align: left;
    margin: 1.5% 0;
    align-self: ${(props: {alignMessage: boolean}) => props.alignMessage ? 'flex-end' : 'flex-start'};
    overflow-wrap: break-word;
`;
export const MessageWrapper = styled.div`
    display: ${(props: {toggle: boolean}) => props.toggle ? '' : 'none'};
    `;
export const Username = styled.p`
    font-size: 1rem;
    overflow-wrap: break-word;
    color: red;
    `;
export const Buttons = styled.div`
    display: ${(props: {alignMessage: boolean}) => props.alignMessage ? '' : 'none'};
    margin-bottom: 2%;
    `;
export const ButtonsWrapper = styled.div`
    display: flex;
    `;
export const Text = styled.div`
    overflow-wrap: break-word;
    font-size: 20px;
    margin: 1% 0;
    align-self: flex-start;
    `;
export const text = styled.div`
    width: 100%
    `;
export const DateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
export const Updated = styled.p`
    font-size: 0.7rem;
    color: #1565C0
`;

export const Date = styled.p`
    overflow-wrap: break-word;
    font-size: 1rem;
    `;

export const Button = styled.button`
    background-color: #E84C3D;
    border: none;
    border-radius: 5px;
    padding: 5px;
    &:hover {
            background-color: #f8483f;
        }
    &:disabled {
        background-color: #bc7a7a;
    }
`;
export const Delete = styled.div`
    border: 0;
    border-radius: 2px;
    color: white;
    margin: 0 5px;
    padding: 2px 5px;
    cursor: pointer;
    img {
        width: 16px;
        color: red;
    }
`;


export const EditButton = styled(Delete)`
`;

export const InputWrapper = styled.div`
input {
        width: 100%;
        border: 0;
        background-color: rgba(255,255,255, 0);
        color: black;
        font-size: 1rem;
        border-bottom: 2px solid #E84C3D;
        transition: all .2s ease-out;
        &:focus {
            color: #000;
            border: none;
            outline: 0;
            outline-offset: 0;
            border-bottom: 2px solid #cd2b18;
        }
    }
    margin-bottom: 2%;
`;

export const Edit = styled.form`
    
`;
