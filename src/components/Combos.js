import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ContenedorCombo, ContenedorCombos, DetallesCombo, InputCombo, LabelCombo, PrecioCombo, SaborCombo, TituloCombo } from '../styles/combos.style'
import { BotonComprar } from '../styles/productsInfo.style'

export default function Combos({alimento, contar}) {
    const [state, setstate] = useState(false)
    const [tipo, setTipo] = useState('')
    const [precio, setPrecio] = useState(0)
    const { id } = useParams()
    const guajalotaPrecio = 25;
    const bebidaPrecio = 12;
    const tamalPrecio = 14;
    let precioCombos = 0;

    const mostrarInput = ({target}) => {
        target.checked ? (precioCombos += Number(target.value)) : (precioCombos -= Number(target.value))
        setPrecio(precio + precioCombos)
    }
    
    useEffect(() => {
        if (id.substring(0, 5).toLowerCase() === 'tamal') {
            setTipo('tamal');
        } else if (id.substring(0, 5).toLowerCase() === 'guaja') {
            setTipo('guajalota');
        } else {
            setTipo('bebida');
        }
    }, [id])

    useEffect(() => {
        tipo === "tamal" ? setPrecio(tamalPrecio * contar)
            : tipo === "guajalota" ? setPrecio(guajalotaPrecio * contar)
            : setPrecio(bebidaPrecio * contar);
        console.log(contar)
        
    }, [contar])

    useEffect(() => {
        if (alimento === 'tamal' || alimento === 'guajalota') {
            setstate(false)
        } else {
            setstate(true)
        }
    }, [alimento])
    const { guajolota, bebida } = useFetch()

    return (
        <>
            <TituloCombo>Guajolocombo</TituloCombo>
            {
                state ? <DetallesCombo>Selecciona la torta que más te guste y disfruta de tu desayuno.</DetallesCombo> : <DetallesCombo>Selecciona la bebida que más te guste y disfruta de tu desayuno.</DetallesCombo>
            }
            <ContenedorCombos>
            {
                state ? (guajolota.map(({ id, precio, sabor, imagen }) => {
                    return(
                    <ContenedorCombo key={imagen+id}>
                        <LabelCombo htmlFor={id}>
                            <div>
                                <img src={imagen} alt={sabor} />
                                <SaborCombo>{sabor}</SaborCombo>
                                <PrecioCombo>+ {precio} MXN</PrecioCombo>
                            </div>
                                <InputCombo onClick={(e) => mostrarInput(e)} type="checkbox" name="combos" id={id} value={precio} value={precio}/>
                        </LabelCombo>
                    </ContenedorCombo>
                    )
                })) : (
                        bebida.map(({ id, precio, sabor, imagen }) => {
                            return (
                                <ContenedorCombo key={imagen}>
                                    <LabelCombo htmlFor={id}>
                                        <div>
                                            <img src={imagen} alt={sabor} />
                                            <SaborCombo>{sabor}</SaborCombo>
                                            <PrecioCombo>+ {precio} MXN</PrecioCombo>
                                        </div>
                                        <InputCombo onClick={(e) => mostrarInput(e)} type="checkbox" name="combos" id={id} value={precio}/>
                                    </LabelCombo>
                                </ContenedorCombo>
                            )
                        }))
            }
            </ContenedorCombos>
            <Link to="/carrito"> <BotonComprar>Agregar {contar} al carrito <span>${precio.toFixed(2)}</span></BotonComprar></Link>
        </>
    )
}
