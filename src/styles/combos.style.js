import styled from "styled-components";

export const TituloCombo = styled.h2`
    font-size: 2rem;
    margin-top: 4rem;
`

export const DetallesCombo = styled.p`
    font-size: 1.8rem;
`

export const ContenedorCombos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const ContenedorCombo = styled.article`
    width: 15rem;
`

export const LabelCombo = styled.label`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`

export const InputCombo = styled.input`
    width: 2rem;
    height: 2rem;
    outline: 2px solid black;
    cursor: pointer;
`

export const ImagenCombo = styled.img`
    width: 70%;
    margin-left: 0.4rem;
`

export const SaborCombo = styled.h3`
    font-size: 1.5rem;
`

export const PrecioCombo = styled.h3`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.naranja};
    font-weight: 900;
`