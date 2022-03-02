// import React, {Component} from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Container/itemListContainer';
import NavbarComerce from './componentes/navBar/navBar';
import BlockBox from './componentes/button/blockBox';
import { FcCurrencyExchange } from "react-icons/fc";
import { Icon } from '@iconify/react';
import Titulo from './componentes/titulos/titulo';



function App() {
  return (
    <div className='body'>

      <div className='header'>
      <NavbarComerce/>
      </div>
      <Titulo className='titulo' name='Item List Container'/>
      <div className='main'>
      <BlockBox marca='Ipa' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="jam:coin-f"/>} icono={<Icon className='iconos' icon="lucide:shirt" />} />
      <BlockBox marca= 'Apa' prenda='Botella' iconoDivisa={<Icon className='iconoDivisa' icon="jam:coin-f"/>} icono={<Icon className='iconos' icon="emojione-monotone:jeans" />}/>
      <BlockBox marca= 'Epa' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="jam:coin-f"/>} icono={<Icon className='iconos' icon="icon-park-outline:clothes-turtleneck"/>}/>
      <BlockBox marca= 'Stout' prenda='Lata' iconoDivisa={<Icon className='iconoDivisa' icon="jam:coin-f"/>} icono={<Icon className='iconos' icon="emojione-monotone:beer-mug"/>}/>
      
      </div>

    </div>
  );
}

export default App;
