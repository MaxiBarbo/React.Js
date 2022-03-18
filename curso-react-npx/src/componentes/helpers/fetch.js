import React from "react";
import listaProductos from "../json/lista_productos.json";

const urljson = listaProductos;
console.log(urljson)

export const fetch = new Promise((resolve, reject) =>{

    let condition = true
    if (condition){
        setTimeout(()=>{
            resolve(urljson)  
        },2500)
    }else{
        reject('400 - Not Found')
    }
})

