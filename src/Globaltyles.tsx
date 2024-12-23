import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
    }

    body {
        width: 100vw;
        min-height: 100vh;
        font-family: 'Antonio', 'Spartan' !important;
        background-image: url("./images/background-stars.svg");
        background-color: #070724;
    }
`;

export default GlobalStyles;
