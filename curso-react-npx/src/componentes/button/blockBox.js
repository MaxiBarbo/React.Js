import React, { Component } from 'react';
import './blockBox.css';



const BlockBox = (props) => {
    return(
        <div>
            <div class="blockFour">
            <img className='imglatas'
            src="./Imagenes/lata-beer3.png"
            alt='' />
            <h3>{props.marca}</h3>
            <span>{props.icono}</span>
            <h4>{props.prenda}</h4>
            <span>{props.iconoDivisa}</span>
            <span>Precio</span>
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