import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="info" expand="lg" variant="light">
            <Container>
                <Navbar.Brand><NavLink className='text-white text-decoration-none' to='/'>Languagezen</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink className='text-white text-decoration-none px-3' activeStyle={activeStyle} to='/home'>Home</NavLink>
                    <NavLink className='text-white text-decoration-none px-3' to='/about'>About</NavLink>
                    <NavLink className='text-white text-decoration-none px-3' to='/service'>Service</NavLink>
                    <NavLink className='text-white text-decoration-none px-3' to='/contact'>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>            
        </div>
    );
};

export default Header;