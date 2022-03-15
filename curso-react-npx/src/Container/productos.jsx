import { fontStyle } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import './itemList.css';

function Productos (props){

const imgBotella="https://static.vecteezy.com/system/resources/previews/002/102/907/non_2x/hand-holding-beer-bottle-dark-mode-glyph-icon-vector.jpg";
const imgLata = "https://static.vecteezy.com/system/resources/previews/002/102/979/non_2x/beer-can-dark-mode-glyph-icon-vector.jpg"
const imgGrowler = "https://static.vecteezy.com/system/resources/previews/002/102/896/non_2x/beer-mug-dark-mode-glyph-icon-vector.jpg"
const itemNav = {listStyleType:'none',color:'white',textDecoration:'none'}

    return(
        <div>
            <h4 className="tituloHeader">{props.name}</h4>
            <div className="tituloProductos">
                <NavLink to="" style={itemNav}>
                <div className="boxBotella">
                <h4 className="titBox">Botellas</h4>
                <img className="imgLatas" src={imgBotella} alt=""/>
                </div>
                </NavLink>
                <NavLink to="" activeClassName="active" style={itemNav}>
                <div className="boxBotella">
                <h4 className="titBox">Latas</h4>
                <img className="imgLatas" src={imgLata} alt=""/>
                </div>
                </NavLink>
                <NavLink to="/" activeClassName="active" style={itemNav}>
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