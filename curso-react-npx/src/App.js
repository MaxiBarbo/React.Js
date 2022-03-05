import React, {Component} from 'react';
import './App.css';
import ItemListContainer from './Container/itemListContainer';
import NavbarComerce from './componentes/navBar/navBar';
import BlockBox from './componentes/cards/blockBox';
// import { FcCurrencyExchange } from "react-icons/fc";
import { Icon } from '@iconify/react';
import Titulo from './componentes/titulos/titulo';
import { BrowserRouter as Router } from 'react-router-dom';




function App() {

  return (
    <div className='body'>
      <div className='header'>
        <NavbarComerce/>
      </div>
      <div>
        <Titulo className='titulo' name='Item List Container'/>
      </div>
      <div className='main'>
        <BlockBox marca='Ipa' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="el:usd"/>} icono={<Icon className='iconos' icon="ph:beer-bottle" />} />
        <BlockBox marca= 'Apa' prenda='Botella' iconoDivisa={<Icon className='iconoDivisa' icon="el:usd"/>} icono={<Icon className='iconos' icon="ph:beer-bottle" />}/>
        <BlockBox marca= 'Epa' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="el:usd"/>} icono={<Icon className='iconos' icon="jam:bottle"/>}/>
        <BlockBox marca= 'Stout' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="el:usd"/>} icono={<Icon className='iconos' icon="ph:beer-bottle-fill"/>}/>
      </div>

     <ItemListContainer/>
      
    </div>
  );
}

export default App;
