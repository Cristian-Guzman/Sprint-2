import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/Container';
import theme from './styles/variables';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    /* overflow-x: hidden; */
    font-family: 'Krub', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);