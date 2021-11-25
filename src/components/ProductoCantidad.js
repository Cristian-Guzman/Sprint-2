import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
// import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'
import { ContadorCurrent, ContenedorBotones, DetalleProducto, ImagenPlus, ImagenProducto, TituloProducto } from '../styles/productoCantidad';

export default function ProductoCantidad() {
    const {id} = useParams();
    const { tamal, guajolota, bebida } = useFetch();
    const [current, setCurrent] = useState('');
    const [contador, setContador] = useState(0);
    // const [precio, setPrecio] = useState(0);
    const [tipo, setTipo] = useState()

    useEffect(() => {
        if (id.substring(0, 5).toLowerCase() === 'tamal') {
            setTipo('tamal');
        } else if (id.substring(0, 5).toLowerCase() === 'guaja') {
            setTipo('guajolota');
        } else {
            setTipo('bebida');
        }
    }, [id])
    // const [atras, setAtras] = useState(0)
    // const [delante, setDelante] = useState(0)
    useEffect(() => {
        const currentId = async() => {
            let app = await tamal.find(el => el.sabor.toLowerCase() === id.toLowerCase());
            app === undefined ? console.log('undefinido') : setCurrent(app); console.log(app);
        }
        currentId()
    }, [tamal])
    useEffect(() => {
        const currentId = async() => {
            let app = await guajolota.find(el => el.sabor.toLowerCase() === id.toLowerCase());
            app === undefined ? console.log('undefinido') : setCurrent(app.sabor); console.log(app);
        }
        currentId()
    }, [guajolota])
    useEffect(() => {
        const currentId = async() => {
            let app = await bebida.find(el => el.sabor.toLowerCase() === id.toLowerCase());
            app === undefined ? console.log('undefinido') : setCurrent(app.sabor); console.log(app);
        }
        currentId()
    }, [bebida])
    
    useEffect(() => {
        // const ultimo = tamal[tamal.length -1];
        const positionId = () => {
            if (current === 0) {
                const app = tamal.slice(5, current+2).splice(1, 1)
                
            } else if (current === 5) {
                const app = tamal.slice(0, current+2).splice(1, 1)
                
            } else{
                const app = tamal.slice(current-1, current+2).splice(1, 1)
            }
            
        }
        !isNaN(current) && positionId()

    }, [current])

    // useEffect(() => {
    //     try {
    //         setPrecio((tamal[0].precio) * contador);
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [contador])

    useEffect(() => {
        setCurrent(id)
    }, [ id ])

    contador === -1 && setContador(0);

    return (
        <>
            {
                tipo === 'tamal' &&
                tamal.map(({ precio, sabor, imagen }, indice) => {
                    return sabor === current &&  
                    <div className="display" key={precio+sabor}>
                        <ImagenProducto src={imagen} alt=" " />
                        <TituloProducto>{sabor}</TituloProducto>
                        <DetalleProducto>${precio} MXN</DetalleProducto>
                    </div> 
                })
            }
            {
                tipo === 'guajolota' &&
                guajolota.map(({ precio, sabor, imagen }, indice) => {
                    return sabor === current &&  
                    <div className="display" key={sabor+precio}>
                        <ImagenProducto src={imagen} alt=" " />
                        <TituloProducto>{sabor}</TituloProducto>
                        <DetalleProducto>${precio} MXN</DetalleProducto>
                    </div> 
                })
            }
            {
                tipo === 'bebida' &&
                bebida.map(({ precio, sabor, imagen }, indice) => {
                    return sabor === current &&  
                    <div className="display" key={precio+sabor+indice}>
                        <ImagenProducto src={imagen} alt=" " />
                        <TituloProducto>{sabor}</TituloProducto>
                        <DetalleProducto>${precio} MXN</DetalleProducto>
                    </div> 
                })
            }
            <ContenedorBotones>
                {contador === 0 && <ImagenPlus className='off' src={'https://res.cloudinary.com/workshop-principe/image/upload/v1637705768/Guappjolotas/minus-circular-button-outline_bkgx2c.png'} /> }
                {contador > 0 && <ImagenPlus onClick={() => setContador(contador - 1)} src={'https://res.cloudinary.com/workshop-principe/image/upload/v1637705768/Guappjolotas/minus-circular-button-outline_bkgx2c.png'} />}
                <ContadorCurrent>{contador}</ContadorCurrent>
                <ImagenPlus onClick={() => setContador(contador + 1)} src={'https://res.cloudinary.com/workshop-principe/image/upload/v1637705765/Guappjolotas/plus_ihhydt.png'} />
            </ContenedorBotones>
        </>
    )
}
