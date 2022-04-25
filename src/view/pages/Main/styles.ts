// Core
import styled from 'styled-components';
import background from '../../../assets/images/bg2.jpg';
import background3 from '../../../assets/images/bg3.jpg';

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: url(${background});
    background-size: cover;
    padding-top: 1%;
    `;

export const Wrapper = styled.main`
    width: 23%;
    `;

export const Header = styled.div`
    display: flex;
    padding: 0 2%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-bottom: 1%;

    p {
        font-size: 1.5rem;
    }
    `;
export const Username = styled.span`
    color: #ff7676;
    `;
export const Button = styled.button`
        background-color: #ff7676;
        padding: 2%;
        border: none;
        border-radius: 4%;
        color: white;
        cursor: pointer;
        transition: .5s;
        &:hover {
            background-color: #ff6464;
        }
    `;

export const Chat = styled.div`
    background: url(${background3});
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-radius: 2%;
    height: 60%;
    padding: 1%;
    justify-content: space-between;
    &::-webkit-scrollbar {
		width: 0.5rem;
        border-radius: 2%;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
        border-radius: 10px;
	}
	&::-webkit-scrollbar-track {
	    background: #4E5255;
	}
	z-index: 50;
`;
