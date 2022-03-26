import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetch } from "../../componentes/helpers/fetch"
import ItemDetail from "../../componentes/itemDetail/itemDetail"



function ItemDetailContaianer() {
    const [producto, setProducto] = useState({})

    const { detalleId } = useParams() 
    
    

    useEffect(()=>{
       fetch
        // .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))

    }, [])

    
    return (
        <div>
            <ItemDetail producto={producto} />  
        </div>
    )
}

export default ItemDetailContaianer;