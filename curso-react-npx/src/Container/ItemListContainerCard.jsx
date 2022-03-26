import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetch } from "../componentes/helpers/fetch";
import ItemList from "../componentes/itemList/itemList";
import Titulo from "../componentes/titulos/titulo";
import Spinner from "../componentes/titulos/titulos";
import './itemListNewCard.css';

function ItemListContainer({ }) {
    
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    //console.log(task)
    const { id } = useParams()
    
    console.log(useParams)   

    useEffect(()=> {
        if (id) {
            fetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            fetch// simulacion a un llamado a una api        
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id])

    return (
            <>
            <div className="cartas">
                {       loading ? <div className="headerCards">
                                    <Titulo name="Cargando"/>
                                    <Spinner/>
                                    </div> 
                    :
                        <ItemList prods={prods} />
                }
               </div> 
            </>
    )
}

export default ItemListContainer;