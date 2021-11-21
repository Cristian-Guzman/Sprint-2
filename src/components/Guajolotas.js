import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

export default function Guajolotas() {
    const { guajolota } = useFetch();

    useEffect(() => {
        console.log(guajolota)
    }, [guajolota])

    return (
        <>
            <h1>Guajolotas</h1>   
        </>
    )
}
