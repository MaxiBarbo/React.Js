import React, { Component } from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Titulo from '../titulos/titulo';
import { Icon } from '@iconify/react';
import './navBar.css';


function NavbarComerce(){ 

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img className='imgLogo'
                src="/Imagenes/lata-beer3.png"
                alt='' />
            <Container>
            
            <Navbar.Brand href=""> App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="./componentes/footer7footer.js">Venta</Nav.Link>
                <Nav.Link href="#pricing">Compra</Nav.Link>
                <NavDropdown title="Varios" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Uno</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Dos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tres</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link className='navshop' eventKey={2} href="#memes">
                <Titulo name='Carrito'/>
                <Icon className='icono' icon="noto-v1:shopping-bags"/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
  }
 
  export default NavbarComerce; 



