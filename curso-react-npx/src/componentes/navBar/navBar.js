import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Titulo from '../titulos/titulo';
import { Icon } from '@iconify/react';
import Circulo from '../materialize/switch';
import Widget from '../widget/carrito';
import imgLogo from '../../imagenes/img_logo.jpg'
import './navBar.css';

function NavbarComerce(){ 
    const navStyle = { listStyleType:'none',textDecoration:'none'}
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className='itemsNav'>
                <NavLink to="/" style={navStyle}>
                <img className='imgLogo'
                src={imgLogo}
                alt=''/></NavLink>
                <NavLink to="/home" style={navStyle}>
                <Titulo name='Home'/></NavLink> 
                <Circulo/>   
            </div>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto linkNav">
                    <NavLink to="categoria/latas" style={navStyle}><span className='itemNav'>Latas</span></NavLink>
                    <NavLink to="categoria/botellas" style={navStyle}><span className='itemNav'>Botellas</span></NavLink>
                {/* <NavDropdown title="Todos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Fabrica</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Nosotros</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                    <NavLink to="cart" style={navStyle} className={({isActive}) => isActive ? 'active' : ''}>  
                        <Widget className='widget'/>
                        <Icon className='icono' icon="noto-v1:shopping-bags"/>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
  }
  export default NavbarComerce; 



