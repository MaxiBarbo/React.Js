import React from "react";
import './itemList.css';

function Productos (props){

    return(
        <div>
            <h4 className="tituloHeader">{props.name}</h4>
            <div className="tituloProductos">
                <h4>Latas</h4>
                <h4>Botellas</h4>
                <h4>Growlers</h4>
            </div>
        </div>
    )
}
export default Productos;