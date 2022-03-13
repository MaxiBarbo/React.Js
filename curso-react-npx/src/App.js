import React, {Component} from 'react';
import './App.css';
import NavbarComerce from './componentes/navBar/navBar';
import Titulo from './componentes/titulos/titulo';
import CardBox from './Container/newCard';
import Footer from './componentes/footer/footer';
import Spinner from './componentes/titulos/titulos';
// import imagen from '../src/imagenes/bob-blue.png'
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <NavbarComerce/>
        <div className='main'>
          <div className='header'>
            <Titulo name='Cargando'/>
            <Spinner/>
          </div>
          <CardBox/>
        </div>
        <Titulo name='Productos'/>
      <Footer/>
    </div>
  );
}
export default App;
