import React from "react";
import './itemList.css';
// import Card  from "react-bootstrap/Card";
// import Button  from "react-bootstrap/Button";
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Count(){

const [ clickCount, setCount ]  = useState( {count:1, stock: 10} )// return [0,1]

const countAdd = () => {
    setCount( { count: clickCount.count + 1} )
}

const countLess = () => { 
    setCount( { count: clickCount.count - 1} )
}

    return( 
        <>
        <div className="listaItem"> 
        <span onClick={countAdd}><Icon className='iconoContador' icon="ant-design:plus-circle-outlined"/></span>
        <span className='contador'>{clickCount.count}</span>
        <span onClick={countLess} ><Icon className='iconoContador' icon="fluent:subtract-circle-32-regular"/></span> 
        <span className='contador'>{clickCount.stock}</span>
        </div>
        </>   
    ) 
}

export default Count;