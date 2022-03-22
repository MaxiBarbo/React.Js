import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavbarComerce from './componentes/navBar/navBar';
import Footer from './componentes/footer/footer';
import Carrito from './componentes/cart/carrito';
import Productos from './componentes/widget/productos';
import './App.css';
import ItemListContainer from './Container/ItemListNewCard';
import ItemDetailContaianer from './Container/itemDetailContainer/ItemDetailNewCard';


function App() {
  return (
    <Suspense fallback={<h1>Cargando ...</h1>} >
      <BrowserRouter>
        <div className='body'>
          <NavbarComerce/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path='/detalle/:detalleId' element={<ItemDetailContaianer/>}/>
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
