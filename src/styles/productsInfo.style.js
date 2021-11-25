import styled from "styled-components";

export const ContenedorModal = styled.article`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 92%;
    background-color: #fff;
`

export const ContenedorProducto = styled.div`
    height: 15rem;
    display: flex;
    gap: 3.5rem;
`

export const ImagenProducto = styled.img`
    width: auto;
    height: 11rem;
`

export const ContenedorDetalle = styled.div`
    margin-top: 1rem;
    padding-bottom: 19rem;
`

export const TituloProducto = styled.h3`
    font-size: 2.2rem;
`

export const DetalleProducto = styled.p`
    font-size: 1.8rem;
    font-weight: 900;
    color: ${props => props.theme.colors.naranja}
`