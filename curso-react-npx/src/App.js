import React, {Component} from 'react';
import './App.css';
import NavbarComerce from './componentes/navBar/navBar';
// import BlockBox from './componentes/cards/blockBox';
// import { FcCurrencyExchange } from "react-icons/fc";
// import { Icon } from '@iconify/react';
import Titulo from './componentes/titulos/titulo';
import { BrowserRouter as Router } from 'react-router-dom';
import CardBox from './Container/newCard';
import Footer from './componentes/footer/footer';
import Spinner from './componentes/titulos/titulos';


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
      <Footer/>
    </div>
  );
}

export default App;
