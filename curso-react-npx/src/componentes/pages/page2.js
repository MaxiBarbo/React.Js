
import React from "react";
import { useEffect, useState } from "react";

const getApi = async () => {  

    const urlApi = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    const query = await fetch(urlApi);
    const queryParse = await query.json();
    // console.log(queryParse[0])
};
function Apilista (){

    useEffect(()=> {
        getApi();
        
    }, []);
// console.log()
    return(
        <>
        </>
    )
}
export default Apilista;