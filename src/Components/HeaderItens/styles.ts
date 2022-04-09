import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: 65%;
    margin:  0 auto;
    display: flex;
    flex-direction: column;
     justify-content: center;

    
    .Sla{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
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