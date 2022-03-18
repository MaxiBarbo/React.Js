import React, { Component } from 'react';
import Button  from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import Count from '../../Container/contador';
import './blockBox.css';

const BlockBox = (props) => {

    const Style = { listStyleType:'none',textDecoration:'none'}

    const onAdd = (cant) =>{
        console.log(cant)
    }
    return(
            <div className="blockFour">    
                <h3 className='titEstilo'>{props.estilo}</h3>
                <img className='imglatas'
                src={props.url}
                alt=''/>
                <span>{props.icono}</span>
                <h4 className='titEnvase'>{props.envase}</h4>
                <span className='titStock'>Stock: <span className='contadorStock'>{props.stock}</span></span>
                <span>{props.iconoDivisa}<span className='precio'>{props.price}</span></span>
                <Count stock={props.stock} initial={1} onAdd={onAdd}/>
                <Button  className="btnCard" variant="outline-success">Agregar Carrito</Button>
            </div>     
     )   
}
export default BlockBox;