// Core
import styled from 'styled-components';

export const Container = styled.section`
    display: inline-block;
    flex-direction: column;
    width: 50%;
    padding: 2%;
    background: #ebebe2;
    border-radius: 7px;
    white-space: pre-wrap;
    text-align: left;
    margin: 1.5% 0;
`;
export const Username = styled.p`
    font-size: 1rem;
    overflow-wrap: break-word;
    color: red;
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
