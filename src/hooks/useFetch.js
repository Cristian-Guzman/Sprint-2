import { useState, useEffect } from "react";

export default function useFetch() {
    const APIBebidas = 'https://srpint2.herokuapp.com/bebidas'
    const APIGuajolotas = 'https://srpint2.herokuapp.com/guajolotes'
    const APITamales = 'https://srpint2.herokuapp.com/tamales'

    const [bebida, setBebida] = useState([])
    const [guajolota, setGuajolota] = useState([])
    const [tamal, setTamal] = useState([])

    useEffect(() => {
        const getBebida = async () => {
            const res = await fetch(APIBebidas);
            const data = await res.json();
            setBebida(data)
        }
        getBebida()
    }, [])

    useEffect(() => {
        const getGuajolota = async () => {
            const res = await fetch(APIGuajolotas);
            const data = await res.json();
            setGuajolota(data)
        }
        getGuajolota()
    }, [])
    useEffect(() => {
        const getTamal = async () => {
            const res = await fetch(APITamales);
            const data = await res.json();
            setTamal(data)
        }
        getTamal()
    }, [])
    
    return {bebida, guajolota, tamal}
}