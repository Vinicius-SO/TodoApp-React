import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: 100%;
    margin:  0 auto;

    
    .Sla{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    
        h1{
            color: white;
            font-size: 3rem;
            letter-spacing: 1rem;
            text-transform: uppercase;
            font-weight: 600;
        }
        
        button{
            width: 2rem;
            height: 2rem;
            border: none;
            background: transparent;
            transition: filter 3s ease-in;

            *:hover{
                cursor: pointer;
                filter: brightness(0.9);
            }
        }
    }

`