import { createGlobalStyle } from "styled-components";
import { GlobalTheme } from "./globalTheme";

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
    font-family: ${GlobalTheme.fonts.default};
    margin: 0 auto;
    max-width: 1920px;
  }

  button {
    font-family: ${GlobalTheme.fonts.default};
  }
  body, #root {
    width: 100%;
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

  img {
    max-width: 100%;
  }

a {
  text-decoration: none;
}

transition: all 0.5s linear;


`;
