import React from 'react'
import { useCartContext } from '../../context/cartContext';
import Titulo from '../titulos/titulo';
import Button  from 'react-bootstrap/Button';
import './carrito.css';

function Carrito (){

const  {cartList, vaciarCarrito} = useCartContext()    

    return(
        <div>
            <Titulo name="Carrito"/>
            
            {/* {cartList.map(prod => <li key={prod.id}>
                                    nombre:{prod.name}
                                    categoria:{prod.categoria}
                                    </li>)} */}
            <Button variant="outline-secondary" onClick={vaciarCarrito}>Vaciar Carrito</Button>                        
        </div>
    )
}

export default Carrito;