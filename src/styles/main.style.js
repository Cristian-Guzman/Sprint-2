import styled from "styled-components";

export const NavBarProductos = styled.nav`
    display: flex;
    flex-direction: row;
    margin: 3rem 0 2rem 0;
    justify-content: space-between;
    .on {
        font-size: 2rem;
        text-decoration: none;
        color: ${props => props.theme.colors.naranja};
        padding-bottom: .8rem;
        border-bottom: 3px solid ${props => props.theme.colors.naranja};
    }
    .off {
        font-size: 2rem;
        text-decoration: none;
        color: #000;
    }
`
