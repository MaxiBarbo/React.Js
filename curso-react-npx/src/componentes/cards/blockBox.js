import React, { Component } from 'react';
import Count from '../../Container/contador';
import Button  from 'react-bootstrap/Button';
import './blockBox.css';
// import image from  "./Imagenes/lata-beer9.jfif";
// import image from './imagenes/bob-blue.png';

const BlockBox = (props) => {
    return(
            <form className="blockFour">    
                <h3 className='titEstilo'>{props.estilo}</h3>
                <img className='imglatas'
                src={props.url}
                alt=''/>
                <span>{props.icono}</span>
                <h4 className='titEnvase'>{props.envase}</h4>
                <span>{props.iconoDivisa}<span className='precio'>{props.price}</span></span>
                <Count stock='50'/>
                <Button className="btnCard" variant="outline-success">Agregar Carrito</Button>
            </form>                 
     )
}



export default BlockBox;