import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import theme, {GlobalStyles} from '../styles/variables';
import { ThemeProvider } from 'styled-components';
import Guajolotas from '../components/Guajolotas';
import Bebidas from '../components/Bebidas';
import Tamales from '../components/Tamales';
import { Contenedor } from '../utilidades/Utilidades';

function AppRouter() {
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
            <BrowserRouter>
            <Contenedor>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Guajolotas/>}/>
                    <Route path="/guajolotas" element={<Guajolotas/>}/>
                    <Route path="/bebidas" element={<Bebidas/>}/>
                    <Route path="/tamales" element={<Tamales/>}/>
                </Routes>
            </Contenedor>
            </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default AppRouter
