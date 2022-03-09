import React from "react";
import { useState, useEffect } from "react";
import BlockBox from "../componentes/cards/blockBox";
import { Icon } from '@iconify/react';
import './itemList.css'


const productos = [
    { id:1, dataIcon:'ph:beer-bottle-thin', categoria:'latas', name:'Apa', price:'444', imagen:'https://i.pinimg.com/564x/31/0b/68/310b68247751c81ee39f7298b7066826.jpg'},
    { id:2, dataIcon:'ph:beer-bottle-thin', categoria:'latas',name:'Ipa', price:'233', imagen:'https://i.pinimg.com/564x/63/b9/0a/63b90afb73d32da2bd0f1248529df078.jpg'},
    { id:3, dataIcon:'ph:beer-bottle-fill', categoria:'botellas',name:'Stout', price:'143', imagen:'https://i.pinimg.com/564x/f4/f6/94/f4f69401d5992cfa7570b2b060a711b7.jpg'},
    { id:4, dataIcon:'ph:beer-bottle-light', categoria:'botellas',name:'Epa', price:'222', imagen:'https://i.pinimg.com/564x/ef/a7/c3/efa7c34182bb20d9e7909ce081ab9609.jpg'},
    { id:5, dataIcon:'ph:beer-bottle-thin', categoria:'lata',name:'Sidra', price:'325', imagen:'https://i.pinimg.com/564x/f0/18/cc/f018cc6a6586054e47c7fc23d777bb6d.jpg'},
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

function CardBox({}){
    const [prods, setProds] = useState([])

    useEffect(()=>{
        fetch
        .then(resp => setProds(resp))
        .catch(err => console.log(err))
        // .finaly(()=> setLoading(1000))

    }, []  ) // Se agrega al final de la funcion un array vacio

    // console.log(prods)

    return(
        <>
           { prods.map((prod) =>  
            <div className='cards'>
                 <BlockBox  key={prod.id} 
                            price={prod.price}
                            url={prod.imagen} 
                            iconoDivisa={<Icon className='iconoDivisa' icon={"el:usd"}/>} 
                            icono={<Icon className='iconos' icon={prod.dataIcon} />} 
                            estilo={prod.name} 
                            envase={prod.categoria} />
            </div>

            )}
            {/* <button onClick={CardBox}>Click</button>   */}
        </>
    )
}
export default CardBox;
// <li key={prod.id} >{prod.price}</li> 