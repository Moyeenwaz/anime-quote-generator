import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background: linear-gradient(to right, #2b5876, #4e4376 );
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
`;
