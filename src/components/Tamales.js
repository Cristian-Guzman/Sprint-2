import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

export default function Tamales() {
    const { tamal } = useFetch();

    useEffect(() => {
        console.log(tamal)
    }, [tamal])

    return (
        <>
            <h1>Tamales</h1>
        </>
    )
}
