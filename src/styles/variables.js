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
        font-family: 'Krub', sans-serif;
}
    a {
        text-decoration: none;
        color: black;
    }
    .rotate {
            transform: rotate(180deg);
    }
    .display {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            width: auto;
            font-size: 2.2rem;
        }
        h3 {
            width: auto;
            color: ${props => props.theme.colors.naranja};
            font-size: 1.8rem;
            margin-top: -1rem;
        }
    }
`
export default theme;