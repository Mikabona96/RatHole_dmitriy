/* eslint-disable no-tabs */
// Core
import styled from 'styled-components';

export const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-size: cover;
    padding-top: 1%;
    font-family: 'Montserrat', sans-serif;
    `;

export const Wrapper = styled.main`
    width: 23%;
    @media (min-width: 993px) {
        width: 30%;
    }
    @media (max-width: 992px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    `;

export const Header = styled.div`
    display: flex;
    padding: 0 2%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: black;
    margin-bottom: 2%;

    p {
        font-size: 1.5rem;
    }
    `;
export const Username = styled.span`
    color: #E84C3D;
    `;
export const Button = styled.button`
        background-color: #000;
        padding: 2%;
        border: none;
        border-radius: 4%;
        color: white;
        cursor: pointer;
        transition: .5s;
        &:hover {
            background-color: #f8483f;
        }
        @media (min-width: 375px) {
            background-color: #E84C3D;
        }
        
    `;
export const OpenKeyboard = styled.button`
    background-color: #000;
        padding: 2%;
        border: none;
        border-radius: 4%;
        color: white;
        cursor: pointer;
        transition: .5s;
        display: block;
        margin: 0 auto;
        margin-top: 2%;
        &:hover {
            background-color: #f8483f;
        }
        @media (min-width: 375px) {
            background-color: #E84C3D;
        }
`;

export const Chat = styled.div`
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    border-radius: 2%;
    height: 50%;
    padding: 1%;
    justify-content: space-between;
    &::-webkit-scrollbar {
		width: 0.5rem;
        border-radius: 2%;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #E84C3D;
        border-radius: 10px;
	}
	&::-webkit-scrollbar-track {
	    background: #f9cdc8;
	}
	z-index: 50;
    @media (max-width: 768px) {
            height: 100vh;
        }
`;
