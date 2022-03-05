import React from "react";
import './switch.css';


function Circulo(){
    return(
        
            <div className="switch">
                    <input className="inputOne" onClick="changeTheme()" type="checkbox" id="toggle"/>
                    <label className="labelOne" for="toggle"/>
                </div>
        
    )
}

export default Circulo;