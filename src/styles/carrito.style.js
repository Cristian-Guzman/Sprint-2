import styled from "styled-components";

export const ModalCarrito = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 92%;
    background-color: #f2f2f2;
`

export const BusquedaCarrito = styled.input`

`

export const ContenedorNavBar = styled.div`
    display: flex;
    margin-top: 3rem;
    align-items: center;
    margin-left: -12rem;
    justify-content: space-evenly;
    
`

export const TituloNavBar = styled.h2`
    font-size: 1.7rem;
`

export const BotonPagar = styled.button`
    position: absolute;
    opacity: .5;
    bottom: 0;
    left: 3rem;
    color: ${props => props.theme.colors.blanco};
    border: none;
    font-size: 1.7rem;
    padding: 2rem 12rem;
    background-color: ${props => props.theme.colors.naranja};
    border-radius: 20px;
`