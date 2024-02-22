import { createGlobalStyle, css } from "styled-components";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.Roboto}, sans-serif;
    font-weight: 400;
    background: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  input,
  textarea,
  button {
    font-family: ${({ theme }) => theme.fonts.Roboto}, sans-serif;
    font-weight: 400;
    background-color: transparent;
    border: none;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[0]};
  }
`;

const GlobalStyle = createGlobalStyle`${style}`;

export default GlobalStyle;
