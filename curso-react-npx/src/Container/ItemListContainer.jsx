import React,{ useState, useEffect, } from "react";
import { NavLink, Link, useParams } from 'react-router-dom';
import BlockBox from "../componentes/cards/blockBox";
import { Icon } from '@iconify/react';
import listaProductos from "../json/lista_productos.json";
import Titulo from "../componentes/titulos/titulo";
import Spinner from "../componentes/titulos/titulos";
import './itemList.css'

const urljson = listaProductos.lista;
console.log(urljson)

const fetch = new Promise((resolve, reject) =>{ //Funcion para llamar api o json local

    let condition = true
    if (condition){
        setTimeout(()=>{
            resolve(urljson)  
        },2500)
    }else{
        reject('400 - Not Found')
    }
})

function ItemListContainer({}){ // luego de ejuctar el llamado a la api o json se utliza useState para alamcenar info obtenida

    const Style = { listStyleType:'none',textDecoration:'none'}
    const [listaProds, setProds] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        
    if(id) {
        fetch
        .then(respuesta => setProds(respuesta.filter(listaProds => listaProds.categoria === id)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))    
    } else {
        fetch
        .then(respuesta => setProds(respuesta))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    }, [id]  ) // Se agrega al final de la funcion un array vacio (array de dependecia)
    
    console.log(id)
    return(
        <div className="mainLatas">
            {loading ? <div className="headerCards">
                        <Titulo name="Cargando"/>
                        <Spinner/>
                        </div>
              :
                listaProds.map((prod) =>  
                <div className='cards'>
                    <Link to={`detalle/${prod.id}`} style={Style}>
                      <p title="Ver Detale"><Icon className='ico' icon='fluent:text-add-space-before-20-regular'/></p>
                        </Link> 
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
export default ItemListContainer;
