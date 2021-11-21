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
    justify-content: space-between;
    margin-top: 1.5rem;
    align-items: center;
 `

 export const ImgShop = styled.img`
    height: 5rem;
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
 `

 export const SearchImg = styled.svg`
    position: relative;
    left: 3rem;
    height: 3rem;
 `

 export const SearchInput = styled.input`
    position: relative;
    left: 4rem;
    border: none;
    background-color: transparent;
    width: 65%;
    bottom: 1rem;
    outline:none;
 `