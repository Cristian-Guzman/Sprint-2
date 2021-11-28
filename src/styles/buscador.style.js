import styled from "styled-components";

export const CancelarBuscador = styled.h1`
    font-size: 1.7rem;
`

export const TextoBuscador = styled.h3`
    font-size: 1.7rem;
`

export const ContenedorFlex = styled.article`
    display: flex;
    margin-top: 3rem;
    gap: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: ${props => props.marginTop};
`

export const ContenedorBuscador = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    left: ${props => props.left || '3rem'};
    top: ${props => props.top}
`

