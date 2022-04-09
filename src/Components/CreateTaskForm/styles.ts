import styled from "styled-components";

export const Container = styled.form`
    background: var(--Very-Light-Gray);
    display: flex;
    margin-top: 1rem;
    border-radius: 5px;
    align-items: center;
    padding: 1rem;
    
    input[type=text]{
        background: var(--Very-Light-Gray);
        width: 100%;
        height: 100%;
        border: none;
        outline: transparent;
        padding: 0.5rem;
    }
    button{
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        border: 1px solid var(--Light-Grayish-Blue);
        background: none;
    }
`