import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Titulo from "../../componentes/titulos/titulo";

function ItemDetailContainer (){
    const [producto, setProducto] = useState({})

    const {detalleId} = useParams({})
    console.log(detalleId)

    return(
        <div>
            <Titulo name='Item Detalles'/>
        </div>
    )
}
export default ItemDetailContainer;