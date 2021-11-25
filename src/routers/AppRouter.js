import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import theme, {GlobalStyles} from '../styles/variables';
import { ThemeProvider } from 'styled-components';
import Guajolotas from '../components/Guajolotas';
import Bebidas from '../components/Bebidas';
import Tamales from '../components/Tamales';
import { Contenedor } from '../utilidades/Utilidades';
import ProductsInfo from '../components/ProductsInfo';

function AppRouter() {
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
            <BrowserRouter>
            <Contenedor>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Navigate replace to="/guajolotas" />} />
                    <Route path="/guajolotas" element={<Guajolotas/>}/>
                    <Route path="/guajolotas/:id" element={<ProductsInfo/>}/>
                    <Route path="/bebidas" element={<Bebidas/>}/>
                    <Route path="/bebidas/:id" element={<ProductsInfo/>}/>
                    <Route path="/tamales" element={<Tamales/>}/>
                    <Route path="/tamales/:id" element={<ProductsInfo/>}/>
                </Routes>
            </Contenedor>
            </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default AppRouter
