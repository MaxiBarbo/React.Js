import React, { Component } from 'react';
import './titulos.css';

const Titulo = (props) => {
    return <h4 className='titulo'>{props.name}</h4>
}

export default Titulo;
