import { useState } from "react"
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/contador';
import { Link } from 'react-router-dom'
import './itemDetail.css';

const ItemDetail = ({productos}) => {

const [finishProd, setFinish] = useState(false)

const {addToCart} = useCartContext()

const onAdd = (cant) =>{
  console.log(cant)
  addToCart({...productos, cantidad: cant})
  setFinish(true)
}

console.log(productos)

    return (
      <div className="itemCard">
        <div>
            <img src={productos.imagen} alt = '' />
            <p>{productos.name}</p>
            <p>{productos.price}</p>
            <p>{productos.categoria}</p>
        </div>
        {finishProd ?
                <>  
                    <Link to='/'>
                        <button className='btn btn-outline-primary'>Seguir comprando</button>

                    </Link>
                    <Link to='/cart'>
                        <button className='btn btn-outline-success'>Ir a Cart</button>
                    </Link>
                </>
             :
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            }
        <li>{productos.name}</li>
      </div>
    )
  }
  
  export default ItemDetail