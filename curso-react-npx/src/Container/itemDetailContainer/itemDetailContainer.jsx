import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import BlockBox from "../../componentes/cards/blockBox";
import { fetch } from "../../componentes/helpers/fetch";
import Titulo from "../../componentes/titulos/titulo";


function ItemDetailContainer (){
    const [props, setProducto] = useState([])

    const {detalleId} = useParams({})
    // console.log(urljson)

    useEffect(()=>{
        fetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProducto(prod))
        .catch(err => console.log(err))

    }, [])
    console.log(fetch)
    return(
        <div>
            <Titulo name='Item Detalles'/>    
           <BlockBox props={props}/>
        </div>
    )
}
export default ItemDetailContainer;