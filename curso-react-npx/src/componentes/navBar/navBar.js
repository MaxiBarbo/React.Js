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
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className='itemsNav'>
             <img className='imgLogo'
                src={imgLogo}
                alt=''/>
                <NavLink to="/">
                <Titulo name='Home'/>
                </NavLink>
                <Circulo/>   
            </div>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/latas"><span className='itemNav'>Latas</span></NavLink>
                    <NavLink to="/botellas"><span className='itemNav'>Botellas</span></NavLink>
                <NavDropdown title="Todos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Latas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Botellas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Growler</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink to="cart" className={({isActive}) => isActive ? 'active' : ''}>  
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



