import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap');
    font-size: 12px;
    padding: 0;
    margin: 0 !important;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    letter-spacing: 0.1em;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
