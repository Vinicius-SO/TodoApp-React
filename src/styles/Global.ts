import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --Bright-Blue: hsl(220, 98%, 61%);
        --Check-Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

        //light theme colors
        --Very-Light-Gray: hsl(0, 0%, 98%)
        --Very-Light-Grayish-Blue: hsl(236, 33%, 92%)
        --Light-Grayish-Blue: hsl(233, 11%, 84%)
        --Dark-Grayish-Blue: hsl(236, 9%, 61%)
        --Very-Dark-Grayish-Blue: hsl(235, 19%, 35%)

        // Dark theme colors
        --Very-Dark-Blue: hsl(235, 21%, 11%)
        --Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%)
        --Light-Grayish-Blue: hsl(234, 39%, 85%)
        --Light-Grayish-Blue (hover): hsl(236, 33%, 92%)
        --Dark-Grayish-Blue: hsl(234, 11%, 52%)
        --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%)
        --Very-Dark-Grayish-Blue: hsl(237, 14%, 26%)
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        height: 100%;
    }
    html{
        @media(max-width:1000px){
            font-size: 93.75%;
        }
        @media(max-width:720px){
            font-size: 87.5%;
        }
    }
    body,input,textarea,button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
`