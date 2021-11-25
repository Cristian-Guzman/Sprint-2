import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ContenedorSabor, TituloSabor, SaboresImagen } from '../styles/sabores.style'

const Sabores = ({ alimento }) => {
    const [state, setState] = useState(false)
    const [firsPara, setfirsPara] = useState('')
    const {id} = useParams();
    const imagenesComidas = [
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_verde_bprokc.png",
            url: 'Verde'
        },
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_mole_qxgnej.png",
            url: 'Mole'
        },
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_rajas_w4jbht.png",
            url: 'Rajas'
        },
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_pi%C3%B1a_pnwxil.png",
            url: 'Piña'
        },
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_pasas_nthfwk.png",
            url: 'Pasas'
        },
        {
            img: "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_guayaba_lcfnc5.png",
            url: 'Guayaba'
        }
    ]
    const imagenesBebidas = [
         {
            img : "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_champurrado_guzi3x.png",
            url: 'Champurrado'
        },
         {
            img : "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_arroz_con_leche_elgxox.png",
            url: 'Atole de Arroz'
        },
         {
            img : "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_chocolate_etwfhc.png",
            url: 'Chocolate Caliente'
        },
         {
            img : "https://res.cloudinary.com/workshop-principe/image/upload/v1637714644/Guappjolotas/Property_1_cafe_sorlon.png",
            url: 'Café'
        }
    ]

    useEffect(() => {
        if (alimento === 'tamal') {
            setState(false)
            setfirsPara('tamales')
        } else if (alimento === 'guajalota'){
            setState(false)
            setfirsPara('guajolotas')
        }
         else {
            setState(true)
            setfirsPara('bebidas')
        }
    }, [alimento])

        console.log(alimento)
        console.log(id)
        console.log(firsPara);
    const { guajolota, bebida } = useFetch();
    return (
        <>
            <TituloSabor>Sabor</TituloSabor>
            <ContenedorSabor>
                {
                    state ? (
                            imagenesBebidas.map(({img, url}, index) => {
                                console.log(url)
                                return(
                                    <>
                                        <Link key={`65412$${index}`} to={`/${firsPara}/${url}`}>
                                            <img src={img} alt=" " />
                                        </Link>
                                    </>
                            )})) : (
                                 imagenesComidas.map(({img, url}, index) => {
                                     console.log(`/${firsPara}/${firsPara} ${url}`)
                                    return(
                                        <>
                                            <Link key={`65421$${index}`} to={`/${firsPara}/${firsPara} ${url}`}>
                                                <img src={img} alt=" " />
                                            </Link>                                    
                                        </>
                                )}))
                                
                }
            </ContenedorSabor>
        </>
    )
}

export default Sabores
