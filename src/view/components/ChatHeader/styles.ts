// Core
import styled from 'styled-components';

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
    border-radius: 5px;
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
