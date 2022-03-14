import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
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
             <img className='imgLogo'
                src={imgLogo}
                alt=''/>
            <NavLink to="/">
            <Titulo name='App'/>
            </NavLink>
            <Circulo/>   
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
                <Nav.Link className='navshop' eventKey={2} href="#memes">   
                    <Widget className='widget'/>
                    <Icon className='icono' icon="noto-v1:shopping-bags"/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
  }
 
  export default NavbarComerce; 



