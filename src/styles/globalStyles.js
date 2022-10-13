import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
        letter-spacing: .2px;
    }
`;
