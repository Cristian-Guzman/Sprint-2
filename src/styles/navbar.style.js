import styled from "styled-components";

export const NavContenedor = styled.nav`
    background-color: ${props => props.theme.colors.amarillo};
`
export const ImgLogo = styled.img`
    height: 5rem;        
    width: auto;
`

export const NavBarStyle = styled.nav`
    display: flex;
    justify-content: ${props => 'space-between' || props.justify};
    margin-top: 1.5rem;
    align-items: center;
 `

 export const ImgShop = styled.img`
    height: ${props => props.height || '5rem'};
    opacity: ${props => props.opacity};
 `

 export const HeaderText = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    margin-top: 3rem;
    color: ${props => props.theme.colors.negro};
 `

 export const ContenedorSearch = styled.section`
    background-color: #c3bcbc7d;
    border-radius: 20px;
    height: 5rem;
 `

 export const SearchImg = styled.svg`
    position: relative;
    left: ${props => props.left || '3rem'};
    height: ${props => props.height || '3rem'};
    opacity: ${props => props.opacity || 1};
    top: ${props => props.top}
 `

 export const SearchInput = styled.input`
    position: relative;
    left: ${props => props.left || '4rem'};
    border: none;
    background-color: transparent;
    width: 65%;
    bottom: 1rem;
    outline:none;
    font-size: 1.5rem;
    padding-top: 2.5rem;
 `