import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Titulo from '../titulos/titulo';
import { Icon } from '@iconify/react';
import Circulo from '../switch/switch';
import Widget from '../cart/carrito';
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



