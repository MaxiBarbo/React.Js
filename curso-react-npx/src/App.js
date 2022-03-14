import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavbarComerce from './componentes/navBar/navBar';
import Footer from './componentes/footer/footer';
import Productos from './Container/productos';
import CardBotellas from './Container/newCardBotellas';
import CardLatas from './Container/newCardLatas';
import './App.css';
import Carrito from './componentes/widget/carrito';

function App() {
  return (
    <Suspense fallback={<h1>Cargando ...</h1>} >
      <BrowserRouter>
        <div className='body'>
          <NavbarComerce/>
            <Routes>
                <Route path="/" element={<Productos name="Productos"/>}/>
                <Route path="/latas" element={<CardLatas/>}/>
                <Route path = "/botellas" element={<CardBotellas/>}/> 
                <Route path="/cart" element={<Carrito/>}/>
            </Routes>
            <Footer/>             
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
