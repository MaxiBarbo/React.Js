import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetch } from "../componentes/helpers/fetch";
import ItemCount from "../componentes/itemCount/contador";
import ItemList from "../componentes/itemList/itemList";


function ItemListContainer({ saludo }) {
    
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    //console.log(task)
    const { id } = useParams()
    

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

    const onAdd = (cant) => {
        console.log(cant)
    }


    console.log(id)
    return (
            <>
                <div>{saludo}</div> 
                {       loading ? <h2>Cargando...</h2> 
                    :
                        <ItemList prods={prods} />
                }
                {/* <ItemCount initial={1} stock={10} onAdd= { onAdd  } /> */}
            </>
    )
}

export default ItemListContainer;