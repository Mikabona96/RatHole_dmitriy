/* eslint-disable no-tabs */
// Core
import styled from 'styled-components';

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
