

function ItemDetail({producto}) {
    return (
      <div >
        <center>
            <img src={producto.imagen} alt = '' />
            <p >{producto.name}</p>
            <p >{producto.price}</p>
            <p >{producto.categoria}</p>

        </center>
      </div>
    )
  }
  
  export default ItemDetail