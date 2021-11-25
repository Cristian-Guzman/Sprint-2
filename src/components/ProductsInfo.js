import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { ImgShop, NavBarStyle } from '../styles/navbar.style'
import { ContenedorModal } from '../styles/productsInfo.style'
import Combos from './Combos'
import ProductoCantidad from './ProductoCantidad'
import Sabores from './Sabores'

export default function ProductsInfo() {
    const {id} = useParams()
    const [tipo, setTipo] = useState()

    useEffect(() => {
        if (id.substring(0, 5).toLowerCase() === 'tamal') {
            setTipo('tamal');
        } else if (id.substring(0, 5).toLowerCase() === 'guaja') {
            setTipo('guajalota');
        } else {
            setTipo('bebida');
        }
    }, [id])

    return (
        <>
            <ContenedorModal>
                <NavBarStyle>
                    <Link to="/"><img className={'rotate'} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMjIgMjRsLTQuMTIyLTQgOC04LTgtOCA0LjEyMi00IDExLjg3OCAxMnoiLz48L3N2Zz4=" alt=" "/></Link>
                    <ImgShop src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png" />
                </NavBarStyle>
                <ProductoCantidad />  
                <Sabores alimento={tipo} />
                <Combos alimento={tipo} />
            </ContenedorModal>
        </>
    )
}

