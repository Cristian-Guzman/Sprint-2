import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ContenedorDetalle, ContenedorProducto, DetalleProducto, ImagenProducto, TituloProducto } from '../styles/productsInfo.style';

export default function Tamales() {
    const { tamal } = useFetch();

    return (
        <>
            { 
                tamal === undefined ? <h1>Cargando...</h1> :
                    tamal.map(({ id, sabor, precio, imagen }) => {
                        return (
                            <Link to={sabor} key={precio + id}>
                                <ContenedorProducto>
                                    <ImagenProducto src={imagen} alt=" "/>
                                    <ContenedorDetalle>
                                        <TituloProducto>{sabor}</TituloProducto>
                                        <DetalleProducto>${precio} MXN</DetalleProducto>
                                    </ContenedorDetalle>
                                </ContenedorProducto>
                            </Link>
                        )
                    })

            }
        </>
    )
}
