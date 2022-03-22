import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import './itemStyle.css';

function Item({prod}) {

    const Style = { listStyleType:'none',textDecoration:'none'}

    return (
        <Link to={`detalle/${prod.id}`} style={Style}>
            <div  className="blockFour">   
                <p className='titEstilo'>{prod.name}</p>
                <img className='imglatas'
                    src={prod.imagen}
                    alt=''/>
                <p>{<Icon className='iconos' icon={prod.dataIcon} />}</p>
                <p className='titEnvase'>{prod.categoria}</p>
                <p>{<Icon className='iconoDivisa' icon={"el:usd"}/>}<span className='precio'>{prod.price}</span></p>
                <p className='titStock'>Stock: <span className='contadorStock'>{prod.stock}</span></p>
            </div>
        </Link>
    )
}

export default Item