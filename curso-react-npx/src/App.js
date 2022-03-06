import React, {Component} from 'react';
import './App.css';
import NavbarComerce from './componentes/navBar/navBar';
// import BlockBox from './componentes/cards/blockBox';
// import { FcCurrencyExchange } from "react-icons/fc";
// import { Icon } from '@iconify/react';
import Titulo from './componentes/titulos/titulo';
import { BrowserRouter as Router } from 'react-router-dom';

import CardBox from './Container/newCard';


function App() {

  return (
    <div className='body'>
        <NavbarComerce/>
        <Titulo name='Cargando..'/>
        <CardBox/>
    </div>
  );
}

export default App;
