import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { ContenedorSabor, TituloSabor, SaboresImagen } from '../styles/sabores.style'
import { v4 as uuid } from 'uuid';

const Sabores = ({ alimento }) => {
    const [state, setState] = useState(false)
    const [current, setCurrent] = useState(0);
    const [firsPara, setfirsPara] = useState('')
    const [secondPara, setSecondPara] = useState('')
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
            setSecondPara('Tamal')
        } else if (alimento === 'guajalota'){
            setState(false)
            setfirsPara('guajolotas')
            setSecondPara('Guajalota')
        }
         else {
            setState(true)
            setfirsPara('bebidas')
            setSecondPara('Bebida')
        }
    }, [alimento])
    const { guajolota, bebida } = useFetch();
    return (
        <>
            <TituloSabor>Sabor</TituloSabor>
            <ContenedorSabor>
                {
                    state ? (
                            imagenesBebidas.map(({img, url}, i) => {
                                return(
                                    <>
                                        <Link key={uuid()} to={`/${firsPara}/${url}`}>
                                            <SaboresImagen className={current === i ? 'op' : 'opno'}
                                                onClick={() => setCurrent(i)} src={img} alt=" " />
                                        </Link>
                                    </>
                            )})) : (
                                 imagenesComidas.map(({img, url}, i) => {
                                    return(
                                        <>
                                            <Link key={uuid()} to={`/${firsPara}/${secondPara} ${url}`}>
                                                <SaboresImagen className={current === i ? 'op' : 'opno'}
                                                    onClick={() => setCurrent(i)} src={img} alt=" " />
                                            </Link>                                    
                                        </>
                                )}))
                                
                }
            </ContenedorSabor>
        </>
    )
}

export default Sabores
