// Core
import styled from 'styled-components';
import background from '../../../assets/images/bg2.jpg';

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: url(${background});
    background-size: cover;
`;

export const Header = styled.div`
    display: flex;
    padding: 0 20px;
    width: 100%;
    justify-content: space-between;
    color: white
`;
export const Username = styled.span`
    color: yellow
`;
export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    background-color: beige;
    overflow-y: auto;
    height: 500px;
    width: 500px;
    padding: 10px 10px;
    justify-content: space-between;
`;
