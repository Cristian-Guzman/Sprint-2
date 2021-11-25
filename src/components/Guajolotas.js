import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ContenedorDetalle, ContenedorProducto, DetalleProducto, ImagenProducto, TituloProducto } from '../styles/productsInfo.style';

export default function Guajolotas() {
    const { guajolota } = useFetch();

    return (
        <>
            {
                guajolota === undefined ? <h1>Cargando...</h1> :
                    guajolota.map(({ id, sabor, precio, imagen }) => {
                        return (
                            <Link to={sabor} key={precio + id}>
                                <ContenedorProducto>
                                    <ImagenProducto src={imagen} />
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
