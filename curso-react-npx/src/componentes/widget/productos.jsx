// import { fontStyle } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import './itemList.css';

function Productos (props){

const imgBotella="https://i.pinimg.com/564x/4d/de/19/4dde193abf2d80b7660ebaf106c67d5b.jpg";
const imgLata = "https://tecmel.es/2026-large_default/cartel-de-led-neon-12-fabricado-en-metacrilato-bar.jpg"
const imgGrowler = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f23f853371331.59380a385784a.gif"
const itemNav = {listStyleType:'none',color:'white',textDecoration:'none'}

    return(
        <div>
            <h4 className="tituloHeader">{props.name}</h4>
            <div className="tituloProductos">
                <NavLink to="/categoria/botella" style={itemNav}>
                <div className="boxBotella">
                <h4 className="titBox">Botellas</h4>
                <img className="imgLatas" src={imgBotella} alt=""/>
                </div>
                </NavLink>
                <NavLink to="/categoria/lata" activeClassName="active" style={itemNav}>
                <div className="boxBotella">
                <h4 className="titBox">Latas</h4>
                <img className="imgLatas" src={imgLata} alt=""/>
                </div>
                </NavLink>
                <NavLink to="/categoria/growler" activeClassName="active" style={itemNav}>
                <div className="boxBotella">
                <h4 className="titBox">Growler</h4>
                <img className="imgLatas" src={imgGrowler} alt=""/>
                </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Productos;