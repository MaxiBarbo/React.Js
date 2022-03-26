import { useState } from "react"
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../itemCount/contador';
import { Link } from 'react-router-dom'
import './itemDetail.css';

const ItemDetail = ({producto}) => {

const [finishProd, setFinish] = useState(false)

const {addToCart} = useCartContext()

const onAdd = (cant) =>{
  console.log(cant)
  addToCart({...producto, cantidad: cant})
  setFinish(true)
}

console.log(producto)

    return (
      <div className="itemCard">
        <div>
            <img src={producto.imagen} alt = '' />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <p>{producto.categoria}</p>
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

      </div>
    )
  }
  
  export default ItemDetail