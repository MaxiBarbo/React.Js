import React from "react";
import './count.css';
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import Button  from 'react-bootstrap/Button';

function ItemCount( { stock, initial, onAdd } ){

const [ clickCount, setCount ]  = useState( initial )// return [0,1]

const countAdd = () => {
    if(clickCount < stock){
        setCount(clickCount + 1)
    }
}

const countLess = () => { 
    if(clickCount > initial){
        setCount(clickCount - 1)
    }
}
const agregar = () => {
    onAdd( clickCount )
}
    return( 
        <>
        <div className="listaItem"> 
        <span onClick={countAdd}><Icon className='iconoContador' icon="ant-design:plus-circle-outlined"/></span>
        <span className='contador'>{clickCount}</span>
        <span onClick={countLess} ><Icon className='iconoContador' icon="fluent:subtract-circle-32-regular"/></span> 
        <Button variant="outline-light" onClick={ agregar }>Add to Cart</Button>
        </div> 
        </>   
    ) 
}

export default ItemCount;