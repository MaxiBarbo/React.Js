import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import './itemStyle.css';
import { Button } from "react-bootstrap";

function Item({prod}) {

    const Style = { listStyleType:'none',textDecoration:'none'}

    return (
            <div className="blockFour">   
                <p className='titEstilo'>{prod.name}</p>
                <img className='imglatas'
                    src={prod.imagen}
                    alt=''/>
                <p>{<Icon className='iconos' icon={prod.dataIcon} />}</p>
                <p className='titEnvase'>{prod.categoria}</p>
                <p>{<Icon className='iconoDivisa' icon={"el:usd"}/>}<span className='precio'>{prod.price}</span></p>
                <p className='titStock'>Stock: <span className='contadorStock'>{prod.stock}</span></p>

                <Link to={`/detalle/${prod.id}`} style={Style}>
                    <Button variant="outline-warning">Ver Detalle</Button>
                    </Link>
            </div>
    )
}

export default Item