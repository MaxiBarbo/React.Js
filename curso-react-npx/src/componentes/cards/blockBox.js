import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import Count from '../../Container/contador';
import './blockBox.css';
// import image from  "./Imagenes/lata-beer9.jfif";
// import image from './imagenes/bob-blue.png';

const BlockBox = (props) => {

    const addCarr = () =>{
        console.log(props.stock)
    }

    return(
            <form className="blockFour">    
                <h3 className='titEstilo'>{props.estilo}</h3>
                <img className='imglatas'
                src={props.url}
                alt=''/>
                <span>{props.icono}</span>
                <h4 className='titEnvase'>{props.envase}</h4>
                <span className='titStock'>Stock: <span className='contadorStock'>{props.stock}</span></span>
                <span>{props.iconoDivisa}<span className='precio'>{props.price}</span></span>
                <Count stock={props.stock} initial={1}/>
                <Button onClick={addCarr} className="btnCard" variant="outline-success">Agregar Carrito</Button>
            </form>                 
     )
     
}
export default BlockBox;