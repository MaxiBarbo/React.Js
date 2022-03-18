import React,{ useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import BlockBox from "../componentes/cards/blockBox";
import { Icon } from '@iconify/react';
import './itemList.css'
import Titulo from "../componentes/titulos/titulo";
import Spinner from "../componentes/titulos/titulos";
import { fetch } from "../componentes/helpers/fetch";


function CardBotellas({}){
    
    const Style = { listStyleType:'none',textDecoration:'none'}
    const [listaProds, setProds] = useState([])

    useEffect(()=>{
        fetch
        .then(respuesta => setProds(respuesta))
        .catch(err => console.log(err))
        .finally(()=> console.log('FInalizado'))    

    }, []  ) // Se agrega al final de la funcion un array vacio (array de dependecia)
    // console.log(fetch)
    return(
        <div className="mainLatas">
            <div className="headerCards">
            <Titulo name="Botellas"/>
            <Spinner/>
            </div>
            {listaProds.map((prod) =>  
                <div className='cards'>
                    <BlockBox   key={prod.id} 
                                price={prod.price}
                                url={prod.imagen} 
                                iconoDivisa={<Icon className='iconoDivisa' icon={"el:usd"}/>} 
                                icono={<Icon className='iconos' icon={prod.dataIcon} />} 
                                estilo={prod.name} 
                                envase={prod.categoria}
                                stock={prod.stock}/> 
                            </div>                
                )}
        </div>
    )
}
export default CardBotellas;
