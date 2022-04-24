import backGround from '../../../assets/images/bg1.png';

// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: start;
    padding: 5% 10%;
    height: 100vh;
    background-image: url(${backGround});
    background-size: cover;
`;
export const FormWrapper = styled.div`
    display: flex;
    width: 20rem;
    height: 10rem;
    justify-content: start;
    background-color: rgba(0, 0, 0, .5);
    border: 1px solid white;
    z-index: 1;
    border-radius: 5px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    p {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 1rem;
    }
    
    input {
        background-color: rgba(75, 75, 75, .5);
        color: white;
        font-size: 1.5rem;
        height: 2rem;
        border-radius: 5px;
        border: none;
        outline: none;
    }
`;
export const Button = styled.button`
        height: 2rem;
        font-size: 1rem;
        margin-top: 1rem;
        padding: 0px 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, .7);
        cursor: pointer;
        transition: .5s ease;
        &:hover {
            background-color: rgb(255, 255, 255)
        }
    `;
