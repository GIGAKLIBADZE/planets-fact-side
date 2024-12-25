import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box; 
    }

    html {
        font-size: 62.5%
    }

    body {
        width: 100vw;
        min-height: 100vh;
        background-image: url("./assets/background-stars.svg");
        background-color: #070724;
    }
`;

export default GlobalStyles;
