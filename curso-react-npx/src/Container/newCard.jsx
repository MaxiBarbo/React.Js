import React from "react";
import { useState, useEffect } from "react";
import BlockBox from "../componentes/cards/blockBox";

import { Icon } from '@iconify/react';
import './itemList.css'


const productos = [
    { id:1, categoria:'latas', name:'Apa', price:'444', imagen:'./imagenes/bob-blue.png',},
    { id:2, categoria:'latas',name:'Ipa', price:'233', imagen:'' },
    { id:3, categoria:'botella',name:'Stout', price:'143', imagen:'' },
    { id:4, categoria:'botella',name:'Epa', price:'222', imagen:'' },
]

const fetch = new Promise((resolve, reject) =>{

    let condition = true
    if (condition){
        setTimeout(()=>{
            resolve(productos)
        },3000)
    }else{
        reject('400 - Not Found')
    }
})
// console.log(task)

function CardBox({saludo}){
    const [bool, setBool] = useState(false)
    const [prods, setProds] = useState([])

    useEffect(()=>{
        fetch
        .then(resp => setProds(resp))
        .catch(err => console.log(err))
        // .finaly(()=> setLoading(1000))

    }, []  ) // Se agrega al final de la funcion un array vacio

    console.log(prods)

    return(
        <>
        
           { prods.map((prod) =>  

            <div className='cards'>
                 <BlockBox  key={prod.id} 
                            price={prod.price}
                            url={prod.imagen} 
                            iconoDivisa={<Icon className='iconoDivisa' icon="el:usd"/>} 
                            icono={<Icon className='iconos' icon="ph:beer-bottle" />} 
                            marca={prod.name} 
                            prenda={prod.categoria} />
            </div>

            )}

            {/* <button onClick={()=> setBool (!bool)}>Click</button>   */}
        </>
    )
}
export default CardBox;
// <li key={prod.id} >{prod.price}</li> 