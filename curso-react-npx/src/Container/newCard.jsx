import React from "react";
import { useState, useEffect } from "react";
import BlockBox from "../componentes/cards/blockBox";
import { Icon } from '@iconify/react';
import './itemList.css'
import listaProductos from "../json_local.json";

const URLJSON = listaProductos;
// console.log(URLJSON)

const fetch = new Promise((resolve, reject) =>{

    let condition = true
    if (condition){
        setTimeout(()=>{
            resolve(URLJSON)
            
        },3000)
    }else{
        reject('400 - Not Found')
    }
})
// console.log(fetch)

function CardBox({}){

    const [listaProds, setProds] = useState([])

    useEffect(()=>{
        fetch
        .then(respuesta => setProds(respuesta))
        .catch(err => console.log(err))
        .finally(()=> console.log('FInalizado'))    

    }, []  ) // Se agrega al final de la funcion un array vacio (array de dependecia)
    // console.log(URLJSON)
    // console.log(listaProds)
    return(
        <>
           { listaProds.map((prod) =>  
            <div className='cards'>
                 <BlockBox  key={prod.id} 
                            price={prod.price}
                            url={prod.imagen} 
                            iconoDivisa={<Icon className='iconoDivisa' icon={"el:usd"}/>} 
                            icono={<Icon className='iconos' icon={prod.dataIcon} />} 
                            estilo={prod.name} 
                            envase={prod.categoria}
                            stock={prod.stock}/> 
                        </div>
            )}
            {/* <button onClick={CardBox}>Click</button>   */}
        </>
    )
}
export default CardBox;
