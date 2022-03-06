import React from "react";
import './itemList.css';
// import Card  from "react-bootstrap/Card";
// import Button  from "react-bootstrap/Button";
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Count({saludo}){

const [ count, setCount ]  = useState( 0 )// return [0,1]
const [ bool, setBool ]  = useState( false)// return [0,1]

// useEffect(()=>{
//     console.log('Solo se dispara si cambia bool')
// }, [bool, 'hola'])

const handleCount = () => {
    // count = count +1, count += 1, count ++
    setCount( count + 1 )
    // console.log(count)
}
const handleBool = () => {
    
    setCount( count - 1 )
    // console.log(count)
}

    return( 
        <>
        <div className="listaItem"> 
        <span onClick={handleCount}><Icon className='iconoContador' icon="ant-design:plus-circle-outlined"/></span>
        <lable className='contador'>{count}</lable>
        <span onClick={handleBool} ><Icon className='iconoContador' icon="fluent:subtract-circle-32-regular"/></span>
        <div>{saludo}</div>
        </div>
        </> 
    ) 
}

export default Count;