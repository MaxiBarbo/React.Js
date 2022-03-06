import React, { Component } from 'react';
import Count from '../../Container/contador';
import Button  from 'react-bootstrap/Button';
import './blockBox.css';
// import image from  "./Imagenes/lata-beer9.jfif";
// import image from './imagenes/bob-blue.png';

const BlockBox = (props) => {
    return(
        <div>
            {/* < img src = {image} alt =''/> */}
            <div className="blockFour">
            <img className='imglatas'
            src={props.url}
            alt='' />
            <h3>{props.marca}</h3>
            <span>{props.icono}</span>
            <h4>{props.prenda}</h4>
            <span>{props.iconoDivisa}{props.price}</span>
            <Count/>
            <Button className="btnCard" variant="outline-success">Agregar Carrito</Button>
        </div>                 
    </div> 

     )
}

// function ImageLogo(){
//     return(
//         <img src={imagen} />
//     )
// }

export default BlockBox;