import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../componentes/itemDetail/itemDetail"
import { fetch } from "../../helpers/fetch"



function ItemDetailContaianer() {
    const [productos, setProducto] = useState([])

    const { detalleId } = useParams() 
    
    

    useEffect(()=>{
       fetch
        .then(prod => prod.find(item => item.id === detalleId))
        // .then(prod => setProducto(prod))
        .catch(err => console.log(err))

    }, [])

    
    return (
        <div>
            <ItemDetail productos={productos} />  
        </div>
    )
}

export default ItemDetailContaianer;