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
import imgLogo from '../../images/img_logo.jpg'
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
                    <NavLink to="categoria/lata" style={navStyle}><p className='itemNav'>Latas</p></NavLink>
                    <NavLink to="categoria/botella" style={navStyle}><p className='itemNav'>Botellas</p></NavLink>
                    <NavLink to="categoria/growler" style={navStyle}><p className='itemNav'>Growler</p></NavLink>
                {/* <NavDropdown  title="Todos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Bares</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Fabrica</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Nosotros</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav>
                    <NavLink to="cart" style={navStyle} className={({isActive}) => isActive ? 'active' : ''}>  
                        <Widget/>
                        <Icon className='icono' icon="noto-v1:shopping-bags"/>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
  }
  export default NavbarComerce; 



