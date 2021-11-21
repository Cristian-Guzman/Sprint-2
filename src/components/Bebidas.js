import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

export default function Bebidas() {
const { bebida } = useFetch();
    useEffect(() => {
        console.log(bebida)

    }, [bebida])

    return (
        <>
           <h1>Bebidas</h1> 
        </>
    )
}
