import React from "react";
import listaProductos from "../json/lista_productos.json";

const productos = listaProductos.listone;
// console.log(urljson)

export const fetch = new Promise((resolve, reject) =>{

    let condition = true
    if (condition){
        setTimeout(()=>{
            resolve(productos)  
        },2500)
    }else{
        reject('400 - Not Found')
    }
})

