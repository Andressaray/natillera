import React from 'react'
import logo from '../../images/logo.png'
import loupe from '../../images/icons/loupe.png'
import { Navbar, Nav, Button } from 'react-bootstrap'
import './style.css'

export default () => {
    return (
        <Navbar expand='lg' sticky='top' className='background'>
            <Navbar.Brand href='#home' className='navbar-brand'>
                <img src={logo} className='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home' className='text-white'>Home</Nav.Link>
                    <Nav.Link href='#play' className='text-white'>¿Cómo Jugar?</Nav.Link>
                    <Nav.Link href='#results' className='text-white'>Resultados</Nav.Link>
                    <Nav.Link href='#blog' className='text-white'>Blog</Nav.Link>
                </Nav>
                <Button variant='light' className='text-btn'>Acceso Natillera</Button><br />
                <Button variant='link' className='text-white'>
                    Search
                    <img src={loupe} className='icon ml-1' />
                </Button>
            </Navbar.Collapse>
        </Navbar>
            
    )
}