import { createGlobalStyle } from 'styled-components';

const theme = {
    colors: {
        negro: '#0D0D0D',
        naranja: '#FA4A0C',
        azulClaro: '#A3E0D8',
        grisMorado: 'rgb(211, 195, 237)',
        amarillo: '#FCB235',
        rosado: '#F18F8C',
        vinoTinto: '#410F18',
        blanco: '#fff'
    },

}

export const GlobalStyles = createGlobalStyle`
  html {
      font-size: 62.5%;
    box-sizing: border-box;
    /* overflow-x: hidden; */
    font-family: 'Krub', sans-serif;
}
`
export default theme;