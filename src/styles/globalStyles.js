import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: 16px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif;
    margin: 0 auto;
  }

  input,
  button {
    border: 0;
    margin: 0;
    outline: none;
    padding: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;
