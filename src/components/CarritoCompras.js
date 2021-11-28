import React from 'react'
import { Link } from 'react-router-dom'
import { ContenedorBuscador, TextoBuscador } from '../styles/buscador.style'
import { BotonPagar, ContenedorNavBar, TituloNavBar } from '../styles/carrito.style'
import { ImgShop } from '../styles/navbar.style'
import { ContenedorModal } from '../styles/productsInfo.style'

const CarritoCompras = () => {
    return (
        <>
            <ContenedorModal>
                <ContenedorNavBar>
                    <Link to="/"><img className={'rotate'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4=" alt=" " /></Link>
                    <TituloNavBar>Carrito</TituloNavBar>
                </ContenedorNavBar>
                <ContenedorBuscador top="17rem" left="0">
                    <ImgShop opacity=".4" height="15rem" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png" />
                    <TextoBuscador>No hay productos</TextoBuscador>
                </ContenedorBuscador>
                    <BotonPagar>Pagar</BotonPagar>
            </ContenedorModal>
        </>
    )
}

export default CarritoCompras
