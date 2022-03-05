import React from "react";
import Card  from "react-bootstrap/Card";
import Button  from "react-bootstrap/Button";
import { useState } from 'react'
import './itemList.css'

function ItemListContainer(){
const [ count, setCount] = useState( 0 )

const handleCount = () => {
    
setCount(count + 1)

}

    return( 
        <>
        <div className="listaItem">Contador
        <lable >{count}</lable>
        <button onClick={handleCount}>Click</button>
</div>
        </> 
    ) 
}

export default ItemListContainer;