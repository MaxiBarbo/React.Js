import React from "react";
import './itemList.css';
// import Card  from "react-bootstrap/Card";
// import Button  from "react-bootstrap/Button";
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Count(){

const [ clickCount, setCount ]  = useState( {count:0, end: 20} )// return [0,1]

// const [ bool, setBool ]  = useState( false)// return [0,1]
// useEffect(()=>{
//     console.log('Solo se dispara si cambia bool')
// }, [bool, 'hola'])

const handleCount = () => {
    
    setCount( { count: clickCount.count + 1 } )
    // console.log(count)
}
const handleBool = () => {
    
    setCount( { count: clickCount.count - 1} )
    // console.log(count)
}

    return( 
        <>
        <div className="listaItem"> 
        <span onClick={handleCount}><Icon className='iconoContador' icon="ant-design:plus-circle-outlined"/></span>
        <span className='contador'>{clickCount.count}</span>
        <span onClick={handleBool} ><Icon className='iconoContador' icon="fluent:subtract-circle-32-regular"/></span>
        
        </div>
        </> 
    ) 
}

export default Count;