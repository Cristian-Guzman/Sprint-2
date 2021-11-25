import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'

export default function Combos({alimento}) {
    const [state, setstate] = useState(false)
    useEffect(() => {
        if (alimento === 'tamal' || alimento === 'guajalota') {
            setstate(false)
        } else {
            setstate(true)
        }
    }, [alimento])
    console.log(alimento)
    const { guajolota, bebida } = useFetch()

    return (
        <>
            <h2>Guajolocombo</h2>
            <p></p>
            {
                state ? (guajolota.map(({ id, precio, sabor, imagen }) => {
                    return(
                    <div key={imagen+id}>
                        <label htmlFor={id}>
                            <img src={imagen} alt={sabor} />
                            <h1>{sabor}</h1>
                            <h1>{precio}</h1>
                            <input type="checkbox" name="combos" id={id} value={precio}/>
                        </label>
                    </div>
                    )
                })) : (
                        bebida.map(({ id, precio, sabor, imagen }) => {
                            return (
                                <div key={imagen}>
                                    <label htmlFor={id}>
                                        <img src={imagen} alt={sabor} />
                                        <input type="checkbox" name="combos" id={id} />
                                    </label>
                                </div>
                            )
                        })
                )
            }
        </>
    )
}
