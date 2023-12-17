import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body,
  html {
    margin: 0;
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: "Relaway", "Arial", sans-serif;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    color: #000000;
    scrollbar-color: #000000;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
      height: 5px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: #000000;
      border-radius: 10px;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      height: 30px;
      background-color: #000000;
      border-radius: 10px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    font-weight: 400;
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
  }

  #root {
    position: relative;

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    header,
    footer {
      flex-shrink: 0;
    }

    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
