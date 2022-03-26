import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'
import ItemList from "../componentes/itemList/itemList";
import Titulo from "../componentes/titulos/titulo";
import Spinner from "../componentes/titulos/titulos";
import { fetch } from "../helpers/fetch";
import './itemListNewCard.css';

function ItemListContainer({ }) {
    
    const [ loading, setLoading ] = useState(true)
    const [prods, setProds ] = useState([])
    
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

    // useEffect(()=> {
    //     const db = getFirestore()
    //     const queryCollection =  collection(db, 'itemsBeer' )
    //     const queryFilter = query(queryCollection, 
              
    //     )
    //     getDocs(queryFilter)
    //     .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))   
    // }, [id])



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