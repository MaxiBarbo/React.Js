import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavbarComerce from './componentes/navBar/navBar';
import Footer from './componentes/footer/footer';
import Productos from './Container/productos';
// import CardBotellas from './Container/newCardBotellas';
import CardLatas from './Container/ItemListContainer';
import './App.css';
import Carrito from './componentes/widget/carrito';
import ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './Container/itemDetailContainer/itemDetailContainer';



function App() {
  return (
    <Suspense fallback={<h1>Cargando ...</h1>} >
      <BrowserRouter>
        <div className='body'>
          <NavbarComerce/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Carrito/>}/>
                <Route path="/home" element={<Productos/>}/>
                {/* <Route path='/notFound' element={<Item404/>}/> */}
                <Route path="/*" element={<Navigate to="/"/>}/> 
            </Routes>
            <Footer/>             
        </div>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
